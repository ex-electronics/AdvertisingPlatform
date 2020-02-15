<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::domain('{account}.'.config('app.domain'))->group(function () {
    Route::get('/', 'LandingController@show')->name('sub.index');

    Route::get('/callback', function() {
        dd(request());
    })->name('sub.callback');
});

Route::get('/', 'InformationController@login')->name('index');
Route::get('/login', 'InformationController@login')->name('login');

Route::get('/settings', 'SettingsController@show')->name('settings');
Route::get('/settings/action', 'SettingsController@action')->name('settings.action');
Route::get('/settings/referral', 'SettingsController@referral')->name('settings.referral');
Route::get('/settings/domain', 'SettingsController@domain')->name('settings.domain');
Route::get('/settings/tarifs', 'SettingsController@tarifs')->name('settings.tarifs');

Route::get('/autoposting', 'PostsController@autoposting')->name('autoposting');
Route::get('/moderation', 'PostsController@moderation')->name('moderation');
Route::get('/ads', 'PostsController@ads')->name('ads');

Route::get('/groups', 'GroupsController@show')->name('groups');

Route::get('/users', 'UserController@users')->name('users');

Route::get('/payments', 'PaymentsController@show')->name('payments');

Route::post('/api/auth', 'Auth\UloginController@index')->name('api.auth');

Route::get('vk/auth', 'VkController@auth');
Route::get('vk/parse', 'VkController@parseHash');
Route::get('vk/logout', 'VkController@logout');

Route::get('vk/auth/save', 'VkController@getToken');
Route::post('vk/auth/save', 'VkController@getToken');


//API
Route::get('page/{slug}', 'Api\PageApiController@getPage')
    ->name('api.page');

Route::get('groups/list', 'Api\GroupApiController@getList')
    ->name('api.groups.list');

Route::get('groups/all', 'Api\GroupApiController@getAll')
    ->name('api.groups.all');

Route::get('groups/exchange', 'Api\GroupApiController@getExchange')
    ->name('api.groups.exchange');

Route::get('groups/item/{id}', 'Api\GroupApiController@getItem')
    ->name('api.groups.item');

Route::post('groups/edit/{id}', 'Api\GroupApiController@getEdit')
    ->name('api.groups.post');

Route::post('groups/add', 'Api\GroupApiController@add')
    ->name('api.groups.add');

Route::get('groups/delete/{id}', 'Api\GroupApiController@deleteItem')
    ->name('api.groups.delete');

Route::get('tarifs/list', 'Api\TarifApiController@getList')
    ->name('api.tarif.list');

Route::get('tarifs/buy/{id}', 'Api\TarifApiController@buy')
    ->name('api.tarif.list');

Route::get('tarifs/item/{id}', 'Api\TarifApiController@getItem')
    ->name('api.tarif.item');

Route::get('posts/list', 'Api\PostApiController@getList')
    ->name('api.post.list');

Route::get('posts/ads', 'Api\PostApiController@getAds')
    ->name('api.post.ads');

Route::get('posts/item/{id}', 'Api\PostApiController@getItem')
    ->name('api.post.item');

Route::get('posts/delete/{id}', 'Api\PostApiController@delete')
    ->name('api.post.delete');

Route::get('posts/accept/{id}', 'Api\PostApiController@accept')
    ->name('api.post.accept');

Route::get('posts/reject/{id}', 'Api\PostApiController@reject')
    ->name('api.post.reject');

Route::post('posts/create', 'Api\PostApiController@createItem')
    ->name('api.post.edit');

Route::get('users/info', 'Api\UserApiController@getInfo')
    ->name('api.user.info');

Route::post('users/edit', 'Api\UserApiController@editInfo')
    ->name('api.user.edit');

Route::post('users/add', 'Api\UserApiController@add')
    ->name('api.user.add');

Route::get('users/moderators/remove/{id}', 'Api\UserApiController@removeModerator')
    ->name('api.moderator.remove');

Route::get('users/moderators/info/{id}', 'Api\UserApiController@infoModerator')
    ->name('api.moderator.info');

Route::get('users/check', 'Api\UserApiController@checkAuth')
    ->name('api.user.check');

Route::get('users/moderators', 'Api\UserApiController@moderatorsList')
    ->name('api.user.moderators');

Route::get('/test/vkpush', function() {
    App\Jobs\Posted::dispatch(\Auth::user())->delay(now());

    dd('posted');
});


Route::get('/test/vkmarket', function() {
    $request = request();
    $user = \Auth::user();

    dd('push');
});

Route::get('login', 'InformationController@angularTheme')->name('login');

// Route::get('{slug}/{id?}', 'InformationController@angularTheme')
// 	->where(['id' => '[0-9]+', 'slug' => '((?!laravel-filemanager|admin).)*'])
//     ->name('api.user.check');