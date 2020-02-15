<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public $table = 'payments';

    protected $fillable = [
        'created_at',
        'updated_at',
        'form',
        'public_key',
        'private_key',
        'status',
    ];

    public function types() {
        return $this->belongTo(\App\PaymentType::class);
    }
}
