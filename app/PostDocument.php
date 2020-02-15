<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostDocument extends Model
{
    public $table = 'post_documents';

    protected $fillable = [
        'created_at',
        'updated_at',
        'document',
    ];

    public static function saveAndInsert($postId, $file) {
        $saveFile = $file->store('documents');

        static::insert([
            'document' => $saveFile,
            'post_id' => $postId,
        ]);
    }

    public static function saveAndUpdate($postId, $file) {
        static::where('post_id', $postId)->delete();
        static::saveAndInsert($postId, $file);
    }
}
