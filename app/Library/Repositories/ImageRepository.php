<?php
namespace App\Library\Repositories;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class ImageRepository
{
    protected $disk = 'public_storage';

    /**
     * Change disk
     *
     * @param string $name disk name
     * @return $this
     */
    public function disk($name)
    {
        $this->disk = $name;

        return $this;
    }

    /**
     * Response thumbnail by image path
     *
     * @param string $imagePath
     * @param array $width_height [0 => width, 1 => height]
     * @return \Illuminate\Http\Response
     */
    public function thumbnail($imagePath, ...$width_height)
    {
        $imageSize = array_slice($width_height, 0 ,2);
        if (empty($imageSize)) {
            // Use original image if sizes are not passed for thumbnail:
            return Storage::disk($this->disk)->response($imagePath);
        }

        if (!isset($imageSize[1])) {
            // Use height same as width by default:
            $imageSize[1] = $imageSize[0];
        }

        $imagePathInfo = pathinfo($imagePath);
        $dirPath = trim($imagePathInfo['dirname'] . DIRECTORY_SEPARATOR . 'thumbnails', '.' . DIRECTORY_SEPARATOR );
        $thumbnailPath = $dirPath . DIRECTORY_SEPARATOR . $imagePathInfo['filename'] . '-' . implode('x', $imageSize) . '.' . $imagePathInfo['extension'];

        if (Storage::disk($this->disk)->exists($thumbnailPath)) {
            // Use already created thumbnail:
            return Storage::disk($this->disk)->response($thumbnailPath);
        }

        // Create a directory for cached thumnbails:
        Storage::disk($this->disk)->makeDirectory($dirPath);

        return Image::make(Storage::disk($this->disk)->path($imagePath))
            ->fit(...$imageSize)
            ->save(Storage::disk($this->disk)->path($thumbnailPath))
            ->response();
    }
}