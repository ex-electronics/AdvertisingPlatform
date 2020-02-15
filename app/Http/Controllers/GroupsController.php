<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class GroupsController extends Controller
{
    public function show() {

        return view('groups');
    }
}
