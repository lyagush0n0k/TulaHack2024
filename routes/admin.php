<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\BookingController;
use App\Http\Controllers\Admin\RestaurantsController;
use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'can:access-panel'])->prefix('/admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.index');


    Route::prefix('/users')->group(function () {
        Route::get('/', [UsersController::class, 'index'])->name('admin.users.index');
        Route::get('/{id}', [UsersController::class, 'detail'])->name('admin.users.detail');
    });

    Route::prefix('/restaurants')->group(function () {
        Route::get('/', [RestaurantsController::class, 'index'])->name('admin.restaurants.index');
        Route::get('/create', [RestaurantsController::class, 'create'])->name('admin.restaurants.create');
        Route::post('/create', [RestaurantsController::class, 'store'])->name('admin.restaurants.store');
        Route::post('/destroy', [RestaurantsController::class, 'destroy'])->name('admin.restaurants.destroy');
    });

    Route::get('/bookings', [BookingController::class, 'index'])->name('admin.booking.index');
});
