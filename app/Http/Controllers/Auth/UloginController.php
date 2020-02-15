<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

use Auth;
use Hash;
use Cookie;

class UloginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $s = @file_get_contents('http://ulogin.ru/token.php?token=' . $request->input('token') . '&host=' . array_get($_SERVER, 'HTTP_HOST'));
        $user = json_decode($s, true);

        $checkUser = User::where('email', array_get($user, 'email'))
            ->where('social_id', array_get($user, 'identity'))
            ->first();

        if($checkUser !== null && (int)$checkUser->id) {
            Auth::loginUsingId($checkUser->id, true);
        } else {
            $newData = [
                'name' => array_get($user, 'first_name') . ' ' . array_get($user, 'last_name'),
                'email' => array_get($user, 'email'),
                'password' => Hash::make(str_random(8)),
                'login' => array_get($user, 'uid'),
                'social_id' => array_get($user, 'identity'),
            ];

            if((int)Cookie::get('referal_id')) {
                $newData['referal_id'] = (int)Cookie::get('referal_id');
            }

            $newId = User::insertGetId($newData);

            Auth::loginUsingId($newId, true);
        }

        return redirect(route('home'));
    }
}
