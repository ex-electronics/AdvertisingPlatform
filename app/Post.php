<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public $table = 'posts';

    protected $fillable = [
        'created_at',
        'updated_at',
        'text',
        'its_ad',
        'signature',
        'id',
    ];

    public function audios() {
        return $this->hasMany(\App\PostAudio::class, 'post_id', 'id');
    }

    public function videos() {
        return $this->hasMany(\App\PostVideo::class, 'post_id', 'id');
    }

    public function images() {
        return $this->hasMany(\App\PostImage::class, 'post_id', 'id');
    }

    public function documents() {
        return $this->hasMany(\App\PostDocument::class, 'post_id', 'id');
    }
}
