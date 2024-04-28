<?php

use App\Http\Controllers\DetailController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [MainController::class, 'getMain'])->name('main');
Route::get('/detail/{id}', [DetailController::class, 'getDetail'])->name('detail');
Route::get('/crsf', function (Request $request) {
    $token = $request->session()->token();
    return response()->json(['token' => $token]);
})->name('crsf');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/booking.php';
