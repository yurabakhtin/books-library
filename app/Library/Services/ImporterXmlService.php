<?php
namespace App\Library\Services;

use App\Jobs\ImportBooks;
use App\Models\Book;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ImporterXmlService
{
    protected $uploadedFilePath;
    protected $originalFileName;

    /**
     * Upload XML file for further import by queue
     *
     * @param UploadedFile $uploadedFile
     * @return \Illuminate\Http\RedirectResponse
     */
    public function upload(UploadedFile $uploadedFile)
    {
        $fileName = date('Y-m-d-H:i:s') . '.xml';
        $uploadedFilePath = $uploadedFile
            ->storeAs('import', $fileName);

        if ($uploadedFilePath === false) {
            return redirect()->route('importer')
                ->withErrors('Couldn\'t upload file to the path "' . Storage::path('import/' . $fileName) . '", please check rights.');
        }

        ImportBooks::dispatch([
            'uploaded_file_path' => $uploadedFilePath,
            'original_file_name' => $uploadedFile->getClientOriginalName()
        ]);

        return redirect()->route('importer')
            ->with('success', 'The uploaded XML file has been uploaded successfully and will be imported by queue job.');
    }

    /**
     * Import books from the uploaded XML file
     *
     * @param array $params [uploaded_file_path, original_file_name]
     * @return void
     */
    public function import($params)
    {
        $this->log(str_repeat('-', 32));

        if (empty($params['uploaded_file_path']) || empty($params['original_file_name'])) {
            $this->log('Wrong data to import books!');
            return;
        }

        $this->originalFileName = $params['original_file_name'];
        $this->uploadedFilePath = $params['uploaded_file_path'];

        $this->log('START xml file "' . $this->originalFileName . '" from "' . $this->uploadedFilePath . '"');

        $importResults = $this->importBooks();

        if (is_array($importResults))
        {
            foreach ($importResults as $resultType => $resultNumber) {
                $this->log('* '.ucfirst($resultType).': ' . $resultNumber);
            }
        }

        $this->log('END xml file "' . $this->originalFileName . '" from "' . $this->uploadedFilePath . '"');

        $this->log('DELETE file "' . $this->uploadedFilePath . '": ' .
            (Storage::delete($this->uploadedFilePath) ? 'OK': 'Failed, check right and try to delete it manually') . '.');
    }

    /**
     * Get books XML data from uploaded XML file
     *
     * @return bool|\SimpleXMLElement
     */
    private function getBooksFromFile()
    {
        libxml_use_internal_errors(true);
        $booksSimpleXMLElement = simplexml_load_file(storage_path('app/' . $this->uploadedFilePath));
        if (!$booksSimpleXMLElement) {
            foreach (libxml_get_errors() as $error) {
                $this->logError($error->message);
            }
            return false;
        }

        if (!$booksSimpleXMLElement->count() ||
            $booksSimpleXMLElement->children()->getName() != 'books' ||
            !$booksSimpleXMLElement->children()->count() ||
            $booksSimpleXMLElement->children()->children()->getName() != 'book'
        ) {
            $this->logError('Wrong XML file data structure');
            return false;
        }

        return $booksSimpleXMLElement->children()->children();
    }

    /**
     * Import Books
     *
     * @return bool|array
     */
    private function importBooks()
    {
        if (!($booksXMLData = $this->getBooksFromFile())) {
            return false;
        }

        $booksNumber = [
            'processed' => 0,
            'imported' => 0,
            'skipped' => 0,
            'failed' => 0,
        ];
        foreach ($booksXMLData as $bookXMLData) {
            $booksNumber['processed']++;
            $this->logBook('Start...', $booksNumber['processed']);

            $importBookResult = $this->importBook($bookXMLData);
            if($importBookResult === true) {
                $this->logBook('Imported successfully.');
                $booksNumber['imported']++;
            } else if($importBookResult === false) {
                $this->logBookError('Couldn\'t be saved in DB!');
                $booksNumber['failed']++;
            } else {
                $this->logBookWarning($importBookResult);
                $booksNumber['skipped']++;
            }
        }

        return $booksNumber;
    }

    /**
     * Import book from XML data into DB
     *
     * @param object Book XML data
     * @return bool|string true - on success import,
     *                     false - on failed storing in DB,
     *                     Warning message - on wrong XMl data
     */
    private function importBook($bookXMLData)
    {
        $bookAttributes = $bookXMLData->attributes();
        if (!$bookAttributes ||
            !isset($bookAttributes->isbn) ||
            !isset($bookAttributes->title) ||
            !isset($bookXMLData->description)
        ) {
            return 'Skip - no required attributes!';
        }

        $bookISBN = $bookAttributes->isbn->__toString();
        $this->logBook('ISBN "' . $bookISBN . '"');
        if (Book::where('isbn', $bookISBN)->take(1)->exists()) {
            return 'Skip - already exists with same ISBN!';
        }

        $book = new Book;
        $book->isbn = $bookISBN;
        $book->title = $bookAttributes->title->__toString();
        if (isset($bookXMLData->description)) {
            $book->description = $bookXMLData->description->__toString();
        }
        if($bookImagePath = $this->loadImage($bookXMLData->image->__toString(), $bookISBN)) {
            $book->image = $bookImagePath;
        }

        return $book->save();
    }

    /**
     * Load image from URL
     *
     * @param string $imageUrl
     * @param string $imageName
     * @return string|false Image path
     */
    public function loadImage($imageUrl, $imageName)
    {
        if (empty($imageUrl) ||
            !($imageContent = file_get_contents($imageUrl))) {
            return false;
        }

        $fileInfo = finfo_open();
        $imageMimeType = finfo_buffer($fileInfo, $imageContent, FILEINFO_MIME_TYPE);
        finfo_close($fileInfo);
        switch ($imageMimeType) {
            case 'image/png':
                $imageExt = 'png';
                break;
            case 'image/gif':
                $imageExt = 'gif';
                break;
            case 'image/jpeg':
                $imageExt = 'jpeg';
                break;
            default:
                $this->logBookWarning('Unknown mime type "' . $imageMimeType . '" from URL "' . $imageUrl . '"');
        }
        if (isset($imageExt)) {
            $imagePath = date('Y') . '/' . date('m') . '/' . date('d') . '/' . $imageName . '.' . $imageExt;
            if (Storage::disk('public_storage')->put($imagePath, $imageContent)) {
                return $imagePath;
            }
        }

        $this->logBookWarning('Couldn\'t load image from URL "' . $imageUrl . '"');
        return false;
    }

    /**
     * Log message
     *
     * @param string $message
     */
    private function log($message)
    {
        info('Import Books: ' . $message);
    }

    /**
     * Log error message
     *
     * @param string $message
     */
    private function logError($message)
    {
        info('Import Books [ERROR]: ' . $message);
    }

    /**
     * Log message of an importing book
     *
     * @param string $message
     * @param string $prefix
     */
    private function logBook($message, $prefix = '-')
    {
        info(' '.$prefix.' Book: ' . $message);
    }

    /**
     * Log error of an importing book
     *
     * @param string $message
     */
    private function logBookError($message)
    {
        info(' - Book [ERROR]: ' . $message);
    }

    /**
     * Log warning of an importing book
     *
     * @param string $message
     */
    private function logBookWarning($message)
    {
        info(' - Book [WARNING]: ' . $message);
    }
}