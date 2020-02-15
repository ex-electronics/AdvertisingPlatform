<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use App\Setting;

class SimpleController extends Controller
{

    public function __construct() {

        $settingsResult = Setting::get();
        $settings = [
            'settings' => [],
        ];

        foreach($settingsResult as $settingItem) {
            $settings['settings'][$settingItem->value_key] = $settingItem->value;
        }

        config($settings);
    }

}
