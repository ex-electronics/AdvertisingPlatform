<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Landing extends Model
{
    //
    public $table = 'landings';

    public static function upsert($userId, $landingCode) {
        $data = [
            'user_id' => $userId,
            'html' => $landingCode,
        ];

        if(static::where('user_id', $userId)->first()) {
            return static::where('user_id', $userId)->update($data);
        } else {
            return static::insert($data); 
        }
    }
}
