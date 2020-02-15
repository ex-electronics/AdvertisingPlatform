<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    public $table = 'orders';

    protected $fillable = [
        'amount',
    ];

    public function peyment() {
        return $this->belongTo(\App\Payment::class);
    }

    public function user() {
        return $this->belongTo(\App\User::class);
    }

    public function payer() {
        return $this->belongTo(\App\User::class);
    }

    public function post() {
        return $this->belongTo(\App\Post::class);
    }

    public function group() {
        return $this->belongTo(\App\Group::class);
    }
}
