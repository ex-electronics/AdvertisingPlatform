<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tarif extends Model
{
    public $table = 'tarifs';

    protected $fillable = [
        'created_at',
        'updated_at',
        'price',
        'name',
        'description',
    ];
}
