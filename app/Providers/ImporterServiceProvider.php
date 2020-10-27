<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ImporterServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('BooksImporter', 'App\Library\Services\ImporterXmlService');
    }
}
