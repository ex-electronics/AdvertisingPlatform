<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    public $table = 'pages';

    protected $fillable = [
        'id',
        'name',
        'slug',
        'content',
        'created_at',
        'updated_at',
    ];
}
