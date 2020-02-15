<?php

use Illuminate\Database\Seeder;
use \App\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::insert([
            [
                'id' => 1,
                'role' => 'Пользователь',
            ],
            [
                'id' => 2,
                'role' => 'Главный администратор',
            ],
        ]);
    }
}
