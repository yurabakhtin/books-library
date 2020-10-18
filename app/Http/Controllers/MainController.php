<?php

namespace App\Http\Controllers;

class MainController extends Controller
{
    public function index()
    {
        return view('frontoffice', ['site_config' => [
            'app_name' => config('app.name')
        ]]);
    }
}
