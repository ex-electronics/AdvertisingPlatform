<?php

namespace App\Providers;

use SleepingOwl\Admin\Providers\AdminSectionsServiceProvider as ServiceProvider;

class AdminSectionsServiceProvider extends ServiceProvider
{

    /**
     * @var array
     */
    protected $sections = [
        \App\User::class => \App\Http\Admin\UsersProvider::class,
        \App\PostDocument::class => \App\Http\Admin\PostDocumentsProvider::class,
        \App\PostAudio::class => \App\Http\Admin\PostAudiosProvider::class,
        \App\PostImage::class => \App\Http\Admin\PostImagesProvider::class,
        \App\PostVideo::class => \App\Http\Admin\PostVideosProvider::class,
        \App\Group::class => \App\Http\Admin\GroupsProvider::class,
        \App\Tarif::class => \App\Http\Admin\TarifsProvider::class,
        \App\Payment::class => \App\Http\Admin\PaymentProvider::class,
        \App\Role::class => \App\Http\Admin\RolesProvider::class,
        \App\Page::class => \App\Http\Admin\PagesProvider::class,
        \App\Post::class => \App\Http\Admin\PostsProvider::class,
        \App\Order::class => \App\Http\Admin\OrdersProvider::class,
        \App\Setting::class => \App\Http\Admin\SettingsProvider::class,
        \App\Promocode::class => \App\Http\Admin\PromocodesProvider::class,
    ];

    /**
     * Register sections.
     *
     * @return void
     */
    public function boot(\SleepingOwl\Admin\Admin $admin)
    {
    	//

        parent::boot($admin);
    }
}
