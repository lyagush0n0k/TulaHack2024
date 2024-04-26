<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [MainController::class, 'getMain'])->name('main');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [MainController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [MainController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [MainController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
