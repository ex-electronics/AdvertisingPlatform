<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RoleRules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_rules', function (Blueprint $table) {
            $table->increments('id');
            $table->string('rule', 100);
            $table->tinyInteger('create')->nullable();
            $table->tinyInteger('update')->nullable();
            $table->tinyInteger('delete')->nullable();
            $table->tinyInteger('show')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_rules');
    }
}
