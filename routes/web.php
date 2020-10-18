<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', '\App\Http\Controllers\MainController@index')->name('home');
Route::get('/book/{bookId}', '\App\Http\Controllers\MainController@index');
Route::get('/importer', '\App\Http\Controllers\ImporterController@form')->name('importer');
Route::post('/importer/upload', '\App\Http\Controllers\ImporterController@upload')->name('import');