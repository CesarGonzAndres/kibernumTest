<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTypeUserPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('typeUser_permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_typeUser')->unsigned()->index();
            $table->foreign('id_typeUser')->references('id')->on('users_type')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('id_permissions')->unsigned()->index();
            $table->foreign('id_permissions')->references('id')->on('permissions')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('typeUser_permissions');
    }
}
