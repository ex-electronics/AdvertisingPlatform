<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Landing;

class LandingController extends Controller
{
    //
    public function show(Request $request) {
        $account = $request->account;
        $user = User::where('login', $account)->first();
        $landing = Landing::where('user_id', $user->id)->first();

        return response($landing->html);
    }
}
