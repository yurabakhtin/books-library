<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('books', '\App\Http\Controllers\Api\BookController')
    ->only(['index', 'show']);
Route::get('/books/{bookId}/thumbnail', '\App\Http\Controllers\Api\BookController@thumbnail');
