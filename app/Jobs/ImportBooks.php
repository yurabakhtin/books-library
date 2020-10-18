<?php

namespace App\Jobs;

use App\Library\Facades\BooksImporter;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ImportBooks implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var array:
     *      - 'uploaded_file_path': Original file name, e.g. 'your_books_library.xml'
     *      - 'original_file_name': Relative path to the uploaded XML file, e.g. 'import/2020-10-17-07:42:45.xml'
     */
    protected $importData = [];

    /**
     * Create a new job instance.
     *
     * @param array $importData [uploaded_file_path, original_file_name]
     */
    public function __construct(array $importData)
    {
        $this->importData = $importData;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        BooksImporter::import($this->importData);
    }
}
