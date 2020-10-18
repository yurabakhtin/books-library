<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Library\Repositories\ImageRepository;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Book::search($request->input('search'))
            ->paginate(100);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Book::findOrFail($id);
    }

    /**
     * Display resized book image
     *
     * @param int $id book ID
     * @param ImageRepository $image
     * @return \Illuminate\Http\Response
     */
    public function thumbnail($id, ImageRepository $image)
    {
        return $image->thumbnail(Book::findOrFail($id)->image, 200, 400);
    }
}
