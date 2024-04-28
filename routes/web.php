<?php

use App\Http\Controllers\DetailController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UploadController;
use Illuminate\Support\Facades\Route;

Route::get('/', [MainController::class, 'getMain'])->name('main');
Route::get('/detail/{id}', [DetailController::class, 'getDetail'])->name('detail');

Route::get('/feedback', [FeedbackController::class, 'getFeedback'])->name('feedback');

Route::middleware('auth')->group(function () {
    Route::post('/uploads', [UploadController::class, 'upload']);
    Route::post('/uploads/remove', [UploadController::class, 'remove']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/booking.php';
