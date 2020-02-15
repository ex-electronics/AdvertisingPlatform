<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostAudio extends Model
{
    public $table = 'post_audios';

    protected $fillable = [
        'created_at',
        'updated_at',
        'audio',
    ];

    public static function saveAndInsert($postId, $file) {
        $saveFile = $file->store('audios');

        static::insert([
            'audio' => $saveFile,
            'post_id' => $postId,
        ]);
    }

    public static function saveAndUpdate($postId, $file) {
        static::where('post_id', $postId)->delete();
        static::saveAndInsert($postId, $file);
    }
}
