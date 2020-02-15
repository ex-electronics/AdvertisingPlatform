<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function role() {
        return $this->belongsTo(\App\Role::class, 'role_id', 'id');
    }

    public function referal() {
        return $this->belongsTo(\App\User::class, 'referal_id', 'id');
    }

    public function landing() {
        return $this->belongsTo(\App\Landing::class, 'user_id', 'id');
    }

    public function tarif() {
        return $this->belongsTo(\App\Landing::class, 'tarif_id', 'id');
    }

    public static function makeNodes($data, $userId, $moderatorId) {
        $toInsert = [];

        \DB::table('users_to_groups')
            ->where('user_id', $userId)
            ->where('moderator_id', $moderatorId)
            ->delete();

        foreach($data as $key => $item) {
            if(preg_match("/^GROUPS/", $key)) {
                $toInsert[] = [
                    'group_id' => (int)$item,
                    'role' => array_get($data, 'role'),
                    'user_id' => $userId,
                    'moderator_id' => $moderatorId,
                ];
            }
        }

        return \DB::table('users_to_groups')->insert($toInsert);
    }
}
