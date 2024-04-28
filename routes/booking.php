<?php

use App\Http\Controllers\DetailController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->prefix('/booking')->group(function () {
    Route::get('/getAvailableTables', [DetailController::class, 'getAvailableTables'])->name('booking.getAvailableTables');
    Route::post('/store', [DetailController::class, 'store'])->name('booking.store');
    //Route::get('/bookings', [BookingController::class, 'index'])->name('admin.booking.index');
});
