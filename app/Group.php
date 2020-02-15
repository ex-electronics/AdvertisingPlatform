<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public $table = 'groups';

    protected $fillable = [
        'created_at',
        'updated_at',
        'name',
        'vkid',
        'avatar',
        'group_type',
    ];
}
