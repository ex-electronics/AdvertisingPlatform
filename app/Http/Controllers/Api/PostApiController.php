<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\SimpleController as Controller;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;

use App\Post;
use App\PostAudio;
use App\PostVideo;
use App\PostImage;
use App\PostDocument;

class PostApiController extends Controller
{
    public $limit = 10;

    public function __construct() {
        parent::__construct();
        $this->middleware('cors');
    }
    //
    public function getList(Request $request) {
        $user = \Auth::user();
        $page = $request->input('page') ? (int)$request->input('page') : 1;

        $list = Post::select('*')
            ->where('user_id', $user->id)
            ->orderBy('id', 'DESC')
            ->paginate($this->limit);
        $count = Post::where('user_id', $user->id)
            ->count();

        return response()->json([
            'status' => 200,
            'data' => $list->items(),
            'pages' => $count > 0 ? ceil($count / $this->limit) : 1,
        ]);
    }

    public function getAds(Request $request) {
        $user = \Auth::user();
        $page = $request->input('page') ? (int)$request->input('page') : 1;
        $list = Post::select('*')
            ->where('user_id', $user->id)
            ->where('its_ad', 1)
            ->paginate($this->limit);
        $count = Post::where('user_id', $user->id)->where('its_ad', 1)->count();

        return response()->json([
            'status' => 200,
            'data' => $list->items(),
            'pages' => $count > 0 ? ceil($count / $this->limit) : 1,
        ]);
    }

    public function getItem(Request $request) {
        $user = \Auth::user();
        $id = $request->id;
        $item = Post::select('*')
            ->where('id', $id)
            ->with('images', 'videos', 'audios', 'documents')
            ->first();

        if($item === null) {
            return response()->json([
                'status' => 404,
                'data' => [],
            ]);
        }

        return response()->json([
            'status' => 200,
            'data' => [
                'post' => $item->getAttributes(),
                'relations' => $item->getRelations()
            ],
        ]);
    }

    public function createItem(PostRequest $request) {
        if($request->input('id') !== null) {
            return $this->edit($request);
        } else {
            return $this->create($request);
        }
    }

    public function edit(PostRequest $request) {
        $user = \Auth::user();
        $data = $request->all();
        $id = $request->input('id');

        Post::where('id', $id)->update([
            'text' => array_get($data, 'text'),
            'its_ad' => (int)array_get($data, 'its_ad'),
            'signature' => (int)array_get($data, 'signature'),
            'posted_at' => array_get($data, 'posted_at'),
            'user_id' => $user->id,
        ]);

        foreach($request->files->all() as $key => $files) {
            foreach($files as $index => $file) {
                if(isset($request->{$key}[$index])) {
                    switch($key) {
                        case 'images':
                            PostImage::saveAndUpdate($id, $request->{$key}[$index]);
                        case 'videos':
                            PostVideo::saveAndUpdate($id, $request->{$key}[$index]);
                        case 'audios':
                            PostAudio::saveAndUpdate($id, $request->{$key}[$index]);
                        case 'documents':
                            PostDocument::saveAndUpdate($id, $request->{$key}[$index]);
                    }
                }
            }
        }

        return response()->json([
            'status' => 200,
            'data' => $data,
            'success' => 'Пост успешно обновлен.'
        ]);
    }

    public function create(PostRequest $request) {
        $user = \Auth::user();
        $data = $request->all();

        $id = Post::insertGetId([
            'text' => array_get($data, 'text'),
            'its_ad' => (int)array_get($data, 'its_ad'),
            'posted_at' => array_get($data, 'posted_at'),
            'signature' => (int)array_get($data, 'signature'),
            'user_id' => $user->id,
        ]);

        foreach($request->files->all() as $key => $files) {
            foreach($files as $index => $file) {
                if(isset($request->{$key}[$index])) {
                    switch($key) {
                        case 'images':
                            PostImage::saveAndInsert($id, $request->{$key}[$index]);
                        case 'videos':
                            PostVideo::saveAndInsert($id, $request->{$key}[$index]);
                        case 'audios':
                            PostAudio::saveAndInsert($id, $request->{$key}[$index]);
                        case 'documents':
                            PostDocument::saveAndInsert($id, $request->{$key}[$index]);
                    }
                }
            }
        }

        return response()->json([
            'status' => 200,
            'data' => $data,
            'success' => 'Пост успешно создан.'
        ]);
    }

    public function delete(Request $request) {
        $user = \Auth::user();
        $id = $request->id;
        Post::where('user_id', $user->id)->where('id', $id)->delete();

        return response()->json([
            'status' => 200,
            'data' => $id,
            'success' => 'Пост успешно удален.'
        ]);
    }

    public function accept(Request $request) {
        $id = $request->id;


        return response()->json([
            'status' => 200,
            'data' => $id,
            'success' => 'Пост одобрен.'
        ]);
    }

    public function reject(Request $request) {
        $id = $request->id;
        

        return response()->json([
            'status' => 200,
            'data' => $id,
            'success' => 'Пост отклонен.'
        ]);
    }
}
