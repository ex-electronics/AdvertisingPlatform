<?php

use Illuminate\Database\Seeder;
use \App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            'name' => 'Admin',
            'email' => 'cdz73ok5@gmail.com',
            'password' => \Hash::make(str_random(8)),
            'login' => 'admin',
            'social_id' => 'http://vk.com/id75339985',
        ]);
    }
}
