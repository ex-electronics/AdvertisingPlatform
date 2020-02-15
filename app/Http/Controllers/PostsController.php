<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class PostsController extends Controller
{
    //
    public function autoposting(Request $request) {
        
        return view('posts');
    }

    public function moderation(Request $request) {
        
        return view('moderation');
    }

    public function ads(Request $request) {
        
        return view('ads');
    }
}
