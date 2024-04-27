<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('restaurant_schedule_items', function (Blueprint $table) {
            $table->string('starts_at')->change();
            $table->string('ends_at')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('restaurant_schedule_items', function (Blueprint $table) {
            $table->time('starts_at')->change();
            $table->time('ends_at')->change();
        });
    }
};
