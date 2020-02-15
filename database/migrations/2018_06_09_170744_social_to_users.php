<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SocialToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('login', 255);
            $table->string('social_id', 255)->nullable();
            $table->integer('referal_id')->nullable();
            $table->timestamp('last_activity')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::table('users', function (Blueprint $table) {
        //     $table->dropColumn('login', 255);
        //     $table->dropColumn('social_id');
        //     $table->dropColumn('referal_id');
        //     $table->dropColumn('last_activity');
        // });
    }
}
