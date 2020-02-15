<?php namespace App\Utils;

use \VK\Client\VKApiClient;
use \VK\OAuth\VKOAuth;

class VK {

    public static $version = '5.73';

    public static function open() {
        return new VKApiClient(static::$version, VKLanguage::ENGLISH);
    }

    public static function auth() {
        return new VKOAuth();
    }

}