<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {

            $table->increments('id');

            $table->integer('id_user')->unsigned()->index();
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');

            $table->string('apellidos');
            $table->string('nombres');
            $table->string('correo_electronico');

            $table->string('numero_orden');
            $table->string('numero_caso');
            $table->string('plan_ofrecido');
            $table->string('pcs');
            $table->string('rut');
            $table->string('pcs_a_portar');
            $table->string('canal_real');
            $table->string('producto');
            $table->string('equipo_marca');
            $table->string('estatus');

            $table->string('tipo');
            $table->string('cod_equipo');
            $table->string('equipo_modelo');
            $table->string('cod_suc');
            $table->string('cod_plan');
            $table->string('forma_entrega');
            $table->string('destino_entrega');

            $table->string('region_cac');
            $table->datetime('fecha');
            $table->string('tipo_acreditacion');
            $table->string('abono');
            $table->string('monto_abono');
            $table->string('descuento_ofrecido');

            $table->string('fono_contacto');
            $table->string('direccion_facturacion');
            $table->string('direccion_entrega');
            $table->string('comuna');
            $table->string('ciudad');
            $table->string('estado');
            $table->string('serie_ci');

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
        Schema::dropIfExists('sales');
    }
}
