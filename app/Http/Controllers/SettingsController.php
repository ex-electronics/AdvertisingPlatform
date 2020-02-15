<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class SettingsController extends Controller
{
    //
    public function show(Request $request) {
        
        return view('settings');
    }

    public function action(Request $request) {
        
        return view('settingsSction');
    }

    public function referral(Request $request) {
        
        return view('settingsReferral');
    }

    public function domain(Request $request) {
        
        return view('settingsDomain');
    }

    public function tarifs(Request $request) {
        
        return view('settingsTarif');
    }
}
