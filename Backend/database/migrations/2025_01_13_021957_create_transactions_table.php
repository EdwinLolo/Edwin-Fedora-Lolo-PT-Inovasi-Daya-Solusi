<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('productID');
            $table->string('productName');
            $table->decimal('amount', 10, 2);
            $table->string('customerName');
            $table->unsignedTinyInteger('status');
            $table->timestamp('transactionDate')->nullable(false);
            $table->string('createBy');
            $table->timestamp('createOn')->nullable()->default(DB::raw('CURRENT_TIMESTAMP')); // Tambahkan default
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
