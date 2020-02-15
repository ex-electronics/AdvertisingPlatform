<?php

use Illuminate\Database\Seeder;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 100; $i > 0; $i--) {
            \App\Post::insert([
                [
                    'user_id' => 1,
                    'text' => 'text',
                    'its_ad' => rand(0, 1),
                    'signature' => rand(0, 1),
                    'created_at' => date('Y-m-d H:i:s'),
                ],
            ]);
        }
    }
}
