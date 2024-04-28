<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::with(['restaurant', 'table', 'user'])
            ->join('tables', 'bookings.table_id', '=', 'tables.id')
            ->orderBy('tables.number')
            ->get();
 //       dd()
        return Inertia::render('Admin/Booking/Booking', ['booking' => $bookings]);
    }
}
