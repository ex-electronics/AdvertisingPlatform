<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostImage extends Model
{
    public $table = 'post_images';

    protected $fillable = [
        'created_at',
        'updated_at',
        'image',
    ];

    public static function saveAndInsert($postId, $file) {
        $saveFile = $file->store('images');

        static::insert([
            'image' => $saveFile,
            'post_id' => $postId,
        ]);
    }

    public static function saveAndUpdate($postId, $file) {
        static::where('post_id', $postId)->delete();
        static::saveAndInsert($postId, $file);
    }
}
