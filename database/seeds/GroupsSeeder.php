<?php

use Illuminate\Database\Seeder;

class GroupsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 100; $i > 0; $i--) {
            \App\Group::insert([
                [
                    'user_id' => 1,
                    'name' => 'Дуров ' . $i,
                    'vkid' => 'https://vk.com/id1',
                    'avatar' => 'https://pp.userapi.com/c836333/v836333001/31189/8To0r3d-6iQ.jpg',
                    'group_type' => 0,
                ],
            ]);
        }
    }
}
