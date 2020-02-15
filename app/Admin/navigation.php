<?php

use SleepingOwl\Admin\Navigation\Page;

return [
    [
        'title' => 'Пользователи',
        'icon'  => 'fa fa-list',
        'pages' => [
            (new Page(\App\User::class))
                ->setPriority(0),
            (new Page(\App\Role::class))
                ->setPriority(0),
            (new Page(\App\Payment::class))
                ->setPriority(0),
            (new Page(\App\Order::class))
                ->setPriority(0),
        ],
        'priority' => 1000
    ],
    [
        'title' => 'Посты',
        'icon'  => 'fa fa-list',
        'pages' => [
            (new Page(\App\Post::class))
                ->setPriority(0),
            // (new Page(\App\PostImage::class))
            //     ->setPriority(0),
            // (new Page(\App\PostVideo::class))
            //     ->setPriority(0),
            // (new Page(\App\PostAudio::class))
            //     ->setPriority(0),
            // (new Page(\App\PostDocument::class))
            //     ->setPriority(0),
        ],
        'priority' => 1000
    ],
    [
        'title' => 'Группы',
        'icon'  => 'fa fa-list',
        'pages' => [
            (new Page(\App\Group::class))
                ->setPriority(0),
        ],
        'priority' => 1000
    ],
    [
        'title' => 'Информация',
        'icon'  => 'fa fa-list',
        'pages' => [
            (new Page(\App\Page::class))
                ->setPriority(0),
            (new Page(\App\Tarif::class))
                ->setPriority(0),
            (new Page(\App\Setting::class))
                ->setPriority(0),
            (new Page(\App\Promocode::class))
                ->setPriority(0),
        ],
        'priority' => 1000
    ],
    
];
