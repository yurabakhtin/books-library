<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImporterRequest;
use App\Library\Facades\BooksImporter;

class ImporterController extends Controller
{
    public function form()
    {
        return view('importer/importer_form');
    }

    public function upload(ImporterRequest $request)
    {
        return BooksImporter::upload($request->file('xml_file'));
    }
}
