<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\SimpleController as Controller;
use Illuminate\Http\Request;
use App\User;
use App\Landing;
use App\Http\Requests\UserRequest;
use Auth;

class UserApiController extends Controller
{
    public function __construct() {
        parent::__construct();
        $this->middleware('cors');
    }
    //
    public function getInfo(Request $request) {
        $user = Auth::user();

        

        return response()->json([
            'status' => 200,
            'data' => [
                'user' => User::where('id', $user->id)->first(),
                'landing' => Landing::where('user_id', $user->id)->first(),
            ],
        ]);
    }

    public function editInfo(UserRequest $request) {
        $user = Auth::user();
        $data = $request->all();

        User::where('id', $user->id)->update([
            'email' => array_get($data, 'email'),
            'login' => array_get($data, 'login'),
            'name' => array_get($data, 'name'),
        ]);

        if(array_get($data, 'landing')) {
            Landing::upsert($user->id, array_get($data, 'landing'));
        }

        return response()->json([
            'status' => 200,
            'data' => $data,
            'success' => 'Успешно сохранено',
        ]);
    }

    public function checkAuth(Request $request) {
        
        return response()->json([
            'status' => 200,
            'data' => [
                'auth' => Auth::check(),
                'user' => Auth::user(),
            ],
        ]);
    }

    public function add(Request $request) {
        $data = $request->all();
        $user = Auth::user();
        $moderator = User::where('social_id', array_get($data, 'link'))->first();
        
        if(!$moderator) {
            return response()->json([
                'status' => 404,
                'data' => [
    
                ],
            ]);
        }

        User::makeNodes($data, $user->id, $moderator->id);

        return response()->json([
            'status' => 200,
            'data' => $moderator,
            'success' => 'Модератор добавлен',
        ]);
    }

    public function moderatorsList(Request $request) {
        $data = $request->all();
        $user = Auth::user();
        $moderators = \DB::table('users_to_groups')
            ->select('users.name', \DB::raw('MIN(users.id) as id'))
            ->join('users', 'users.id', 'users_to_groups.moderator_id')
            ->where('users_to_groups.user_id', $user->id)
            ->groupBy('users.id')
            ->groupBy('users.name')
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $moderators,
        ]);
    }

    public function removeModerator(Request $request) {
        $id = $request->id;
        $user = Auth::user();

        $result = \DB::table('users_to_groups')
            ->where('user_id', $user->id)
            ->where('moderator_id', $id )
            ->delete();

        return response()->json([
            'status' => 200,
            'data' => $id,
            'success' => 'Модератор удален',
        ]);
    }

    public function infoModerator(Request $request) {
        $id = $request->id;
        $user = Auth::user();
        $moderatorRole = \DB::table('users_to_groups')
            ->where('user_id', $user->id)
            ->where('moderator_id', $id )
            ->get();
        $moderator = User::select('social_id')->where('id', $id)->first();

        return response()->json([
            'status' => 200,
            'data' => [
                'info' => $moderator,
                'roles' => $moderatorRole,
            ],
        ]);
    }
}
