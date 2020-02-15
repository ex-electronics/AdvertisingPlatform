<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class InformationController extends Controller
{
    public function show() {

        return view('welcome');
    }

    public function angularTheme() {

        return view('index');
    }

    public function login() {

        return view('login');
    }
}
