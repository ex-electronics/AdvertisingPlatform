<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    //
    public function show(Request $request) {
        
        
    }

    public function users() {

        return view('users');
    }
}
