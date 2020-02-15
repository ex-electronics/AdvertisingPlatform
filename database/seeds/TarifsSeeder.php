<?php

use Illuminate\Database\Seeder;
use \App\Tarif;

class TarifsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tarif::insert([
            [
                'price' => 150,
                'name' => 'Тариф 1',
                'description' => 'Описание',
            ],
            [
                'price' => 250,
                'name' => 'Тариф 2',
                'description' => 'Описание',
            ],
            [
                'price' => 350,
                'name' => 'Тариф 3',
                'description' => 'Описание',
            ],
        ]);
    }
}
