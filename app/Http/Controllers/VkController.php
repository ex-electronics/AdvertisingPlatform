<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Utils\VK;
use \VK\OAuth\VKOAuthDisplay;
use \VK\OAuth\VKOAuthResponseType;
use \VK\OAuth\Scopes\VKOAuthGroupScope;
use \VK\OAuth\Scopes\VKOAuthUserScope;

use \App\User;
use \App\Group;
use App\Utils\VkResponse;
use Cookie;

use Auth;

class VkController extends Controller
{
    //

    public function auth() {
        $oauth = VK::auth();
        $client_id = config('vk.client'); 

        $redirect_uri = config('vk.redirect');
        $display = VKOAuthDisplay::PAGE; 
        $scope = array(
            VKOAuthUserScope::GROUPS, 
            VKOAuthGroupScope::MANAGE,
            VKOAuthGroupScope::PHOTOS,
            VKOAuthGroupScope::APP_WIDGET,
            //VKOAuthGroupScope::MESSAGES,
            VKOAuthGroupScope::DOCS,

            VKOAuthUserScope::NOTIFY,
            VKOAuthUserScope::FRIENDS,
            VKOAuthUserScope::PHOTOS,
            VKOAuthUserScope::AUDIO,
            VKOAuthUserScope::VIDEO,
            VKOAuthUserScope::PAGES,
            VKOAuthUserScope::LINK,
            VKOAuthUserScope::STATUS,
            VKOAuthUserScope::NOTES,
            //VKOAuthUserScope::MESSAGES,
            VKOAuthUserScope::WALL,
            VKOAuthUserScope::ADS,
            VKOAuthUserScope::OFFLINE,
            VKOAuthUserScope::DOCS,
            VKOAuthUserScope::NOTIFICATIONS,
            VKOAuthUserScope::STATS,
            VKOAuthUserScope::EMAIL,
            VKOAuthUserScope::MARKET,
        ); 
        $state = '123456'; 
        //$groups_ids = array(168366921); 

        $browser_url = $oauth->getAuthorizeUrl(VKOAuthResponseType::CODE, $client_id, $redirect_uri, $display, $scope, $state);
        
        return redirect($browser_url);
    }

    public function getToken(Request $request) {
        $oauth = VK::auth();
        $client_id = config('vk.client'); 
        $client_secret = config('vk.secret'); 
        $redirect_uri = config('vk.redirect');
        $code = $request->input('code'); 
        
        $response = $oauth->getAccessToken($client_id, $client_secret, $redirect_uri, $code); 

        if(isset($response['access_token']) && strlen($response['access_token']) > 10 
        && isset($response['user_id']) && (int)$response['user_id']) {
            $access_token = $response['access_token'];
            $socialId = 'https://vk.com/id' . $response['user_id'];

            if($user = User::where('social_id', $socialId)->first()) {
                Auth::loginUsingId($user->id, true);

                User::where('social_id', $socialId)->update([
                    'access_token' => $access_token,
                ]);
            } else {
                $vk = new \VK\Client\VKApiClient(); 
                $responseInfo = $vk->users()->get($access_token, array( 
                    'user_ids' => array($response['user_id']), 
                    'fields' => array('photo', 'email'), 
                ));

                if(isset($responseInfo[0])) {
                    $newData = [
                        'name' => array_get($responseInfo[0], 'first_name') . ' ' . array_get($responseInfo[0], 'last_name'),
                        'email' => array_get($response, 'email'),
                        'password' => \Hash::make(str_random(8)),
                        'login' => 'id'.array_get($responseInfo[0], 'id'),
                        'social_id' => $socialId,
                        'access_token' => $access_token,
                        'avatar' => array_get($responseInfo[0], 'photo'),
                        'role_id' => 2, //Удалить на продакшене
                    ];
        
                    if((int)Cookie::get('referal_id')) {
                        $newData['referal_id'] = (int)Cookie::get('referal_id');
                    }
        
                    $newId = User::insertGetId($newData);

                    $this->vk = new VkResponse;
                    $userGroups = $this->vk->request('groups.get', [
                        'access_token' => $access_token,
                        'user_id' => $responseInfo[0]['id'],
                        'count' => 100,
                        'extended' => 1,
                    ]);
                    
                    if($userGroups && isset($userGroups->response->items)) {
                        foreach($userGroups->response->items as $key => $userGroup) {
                            if($key > 0 && $userGroup->is_admin === 1) {
                                Group::insert([
                                    'name' => $userGroup->name,
                                    'group_type' => $userGroup->type === 'page' ? 1 : 0,
                                    'vkid' => $userGroup->id,
                                    'user_id' => $newId,
                                    'avatar' => $userGroup->photo_200,
                                ]);
                            }
                        }
                    }
                    
                    Auth::loginUsingId($newId, true);
                }
            }
        }

        return redirect(config('frontend.url'));
    }

    public function logout() {
        Auth::logout();
        return redirect('/login');
    }
}
