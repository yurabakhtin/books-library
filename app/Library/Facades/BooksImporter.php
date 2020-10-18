<?php
namespace App\Library\Facades;

use Illuminate\Support\Facades\Facade;

class BooksImporter extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'BooksImporter';
    }
}