<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['isbn'];

    /**
     * Filter query by search keyword
     *
     * @param object $query
     * @param string $keyword search keyword
     * @param array $columns The filtered columns
     * @return $query
     */
    public function scopeSearch($query, $keyword, $columns = ['isbn', 'title'])
    {
        if ($keyword !== '' && !empty($columns)) {
            foreach ($columns as $column) {
                $query->orWhere($column, 'like', '%' . $keyword . '%');
            }
        }

        return $query;
    }
}
