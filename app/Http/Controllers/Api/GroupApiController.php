<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\SimpleController as Controller;
use App\Group;

class GroupApiController extends Controller
{
    public $limit = 10;

    public function __construct() {
        parent::__construct();
        $this->middleware('cors');
    }
    
    public function getList(Request $request) {
        $user = \Auth::user();
        $page = $request->input('page') ? (int)$request->input('page') : 1;
        $list = Group::select('*')
            ->where('user_id', $user->id)
            ->orderBy('id', 'DESC')
            ->paginate($this->limit);

        $count = Group::where('user_id', $user->id)->count();

        return response()->json([
            'status' => 200,
            'data' => $list->items(),
            'pages' => $count > 0 ? ceil($count / $this->limit) : 1,
        ]);
    }

    public function getAll(Request $request) {
        $user = \Auth::user();
        $page = $request->input('page') ? (int)$request->input('page') : 1;
        $list = Group::select('*')
            ->where('user_id', $user->id)
            ->orderBy('id', 'DESC')
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $list,
        ]);
    }
    
    public function getExchange(Request $request) {
        $user = \Auth::user();
        $page = $request->input('page') ? (int)$request->input('page') : 1;
        $list = Group::select('*')
            ->where('user_id', '<>', $user->id)
            ->orderBy('id', 'DESC')
            ->paginate($this->limit);

        $count = Group::count();

        return response()->json([
            'status' => 200,
            'data' => $list->items(),
            'pages' => $count > 0 ? ceil($count / $this->limit) : 1,
        ]);
    }

    public function getItem(Request $request) {
        $user = \Auth::user();
        $id = $request->id;
        $item = Group::select('*')
            ->where('id', $id)
            ->where('user_id', $user->id)
            ->first();

        if($item === null) {
            return response()->json([
                'status' => 404,
                'data' => [],
            ]);
        }

        return response()->json([
            'status' => 200,
            'data' => $item->getAttributes(),
        ]);
    }

    public function editItem(Request $request) {
        $user = \Auth::user();
        $data = $request->all();
        $id = $request->id;

        $item = Group::select('*')
            ->where('id', $id)
            ->where('user_id', $user->id)
            ->first();

        if($item === null) {
            return response()->json([
                'status' => 404,
                'data' => [],
            ]);
        }

    }

    public function createItem(Request $request) {
        $user = \Auth::user();
        $data = $request->all();
        $id = $request->id;

        $item = Group::select('*')
            ->where('id', $id)
            ->where('user_id', $user->id)
            ->first();

        if($item === null) {
            return response()->json([
                'status' => 404,
                'data' => [],
            ]);
        }

    }

    public function deleteItem(Request $request) {
        $user = \Auth::user();
        $id = $request->id;

        Group::where('user_id', $user->id)->where('id', $id)->delete();

        return response()->json([
            'status' => 200,
            'data' => [],
            'success' => 'Сообщество удалено из списка'
        ]);
    }

    public function add(Request $request) {
        $user = \Auth::user();
        $link = $request->input('link');
        $vkApi = new \App\Utils\VkResponse;

        if(preg_match('/vk\.com\/(.*)/', $link, $result)) {
            $requestResult = $vkApi->request('groups.getById', [
                'access_token' => $user->access_token,
                'group_id' => $result[1],
            ]);

            foreach($requestResult->response as $key => $userGroup) {
                if($userGroup->is_admin === 1) {
                    Group::insert([
                        'name' => $userGroup->name,
                        'group_type' => $userGroup->type === 'page' ? 1 : 0,
                        'vkid' => $userGroup->id,
                        'user_id' => $user->id,
                        'avatar' => $userGroup->photo_200,
                    ]);
                }
            }
        }
        

        return response()->json([
            'status' => 200,
            'data' => $link,
            'success' => 'Группа добавлена',
        ]);
    }

}
