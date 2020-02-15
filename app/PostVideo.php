<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostVideo extends Model
{
    public $table = 'post_videos';

    protected $fillable = [
        'created_at',
        'updated_at',
        'video',
    ];

    public static function saveAndInsert($postId, $file) {
        $saveFile = $file->store('videos');

        static::insert([
            'video' => $saveFile,
            'post_id' => $postId,
        ]);
    }

    public static function saveAndUpdate($postId, $file) {
        static::where('post_id', $postId)->delete();
        static::saveAndInsert($postId, $file);
    }
}
