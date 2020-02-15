<?php

use Illuminate\Database\Seeder;

class PaymentTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\PymentType::insert([
            array(
                'name' => 'Яндекс.Касса',
            ),
            array(
                'name' => 'Робокасса',
            ),
        ]);
    }
}
