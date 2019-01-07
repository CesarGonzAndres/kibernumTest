<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClaroTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('claros', function (Blueprint $table) {
            $table->increments('id');
            $table->string('id_call')->unique();
            $table->string('phone');
            $table->date('step_actual');
            $table->string('goto');
            $table->string('label');
            $table->string('coincidences');
            $table->string('number_caller');
            $table->string('number_called');
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
        Schema::drop('claros');
    }
}
