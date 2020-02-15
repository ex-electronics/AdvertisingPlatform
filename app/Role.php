<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public $table = 'roles';

    protected $fillable = [
        'created_at',
        'updated_at',
    ];

    public function rules() {
        return $this->belongToMany(\App\RoleRule::class);
    }
}
