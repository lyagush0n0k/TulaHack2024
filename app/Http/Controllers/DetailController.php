<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Restaurant;
use App\Models\RestaurantScheduleItem;
use http\Client\Curl\User;
use Inertia\Inertia;
use Inertia\Response;

class DetailController extends Controller
{
    /**
     * @return Response
     */
    public function getDetail($id): Response
    {
        $restaurant = Restaurant::find($id);

        $currentDayOfWeek = strtolower(date('l'));
        $todaySchedule = RestaurantScheduleItem::where('restaurant_id', $id)
            ->where('type', 'workday')
            ->where('day_of_week', $currentDayOfWeek)->first();

        $schedule = ['starts_at' => $todaySchedule->starts_at,
            'ends_at' => $todaySchedule->ends_at];
        $bookings = Booking::where('user_id', auth()->check() ? auth()->user()->id : null)->where('restaurant_id', $id)->get();

        return Inertia::render('Detail', ['restaurant' => $restaurant, 'schedule' => $schedule, 'bookings' => $bookings]);
    }
}
