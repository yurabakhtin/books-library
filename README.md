## Books Library

Books Library is a test web application with import from XML file.
This app is based on PHP framework "Laravel" version 8.9.0 with using JS framework "Vue.js" to render front-office part.

![Books Library Front-Office](resources/img/frontoffice.png)

### Installation

- Copy files on your server,
- Create database,
- Create a config file `.env` from `.env.example` and set database:
    ```
    DB_HOST=localhost
    DB_PORT=3306
    DB_DATABASE=books_library
    DB_USERNAME=root
    DB_PASSWORD=password
    ``` 
- Go to root directory of this downloaded site,
- Run `npm install` (If command `npm` is not found please read https://docs.npmjs.com/downloading-and-installing-node-js-and-npm),
- Run `composer install` (If command `npm` is not found please read https://getcomposer.org/doc/00-intro.md),
- Run `php artisan key:generate` to generate `APP_KEY` in the config file,
- Run `php artisan config:cache` to clear cache in order to apply changes in the config file,
- Run `php artisan migrate` in order to create tables in your database,
- Setup your http server to the folder `/public` manually or run `php artisan serve` to start it on address http://localhost:8000/.

### Usage

- Go to back-office and upload XML file with books data: 
![Books Library Back-Office](resources/img/backoffice.png),
- The uploaded file will be processed by laravel queue job, so you need to keep run it on server by command `php artisan queue:work`,
- Result of the import from queue you can check in the log file `/storage/logs/laravel.log`.

Author: Yuriy Bakhtin