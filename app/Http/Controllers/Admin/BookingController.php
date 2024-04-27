<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index(){
        $booking = Booking::all();
        dd($booking);
        return Inertia::render('Admin/Users/Users', ['users' => $booking]);

    }
}
