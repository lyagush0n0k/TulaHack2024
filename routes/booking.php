<?php

use App\Http\Controllers\DetailController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->prefix('/booking')->group(function () {
    Route::get('/getAvailableTables', [DetailController::class, 'getAvailableTables'])->name('booking.getAvailableTables');
    Route::post('/store', [DetailController::class, 'createBooking'])->name('booking.store');
    Route::post('/delete', [DetailController::class, 'removeBooking'])->name('booking.delete');
    //Route::get('/bookings', [BookingController::class, 'index'])->name('admin.booking.index');
});
