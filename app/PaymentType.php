<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentType extends Model
{
    public $table = 'payment_types';

    protected $fillable = [
        'created_at',
        'updated_at',
        'name',
    ];

    public function peyments() {
        return $this->hasMany(\App\Payment::class);
    }
}
