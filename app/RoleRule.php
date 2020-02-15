<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoleRule extends Model
{
    public $table = 'role_rules';

    protected $fillable = [
        'created_at',
        'updated_at',
    ];

    public function roles() {
        return $this->hasMany(\App\Role::class);
    }
}
