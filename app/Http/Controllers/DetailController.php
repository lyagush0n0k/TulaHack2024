<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use App\Models\RestaurantScheduleItem;
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
        $todaySchedule = RestaurantScheduleItem::where('restaurant_id', $id)->where('day_of_week', $currentDayOfWeek)->first();
        $schedule = ['startsAt' => $todaySchedule->starts_at,
            'ends_at' => $todaySchedule->ends_at];
        dump($schedule);
        return Inertia::render('Detail', ['restaurant' => $restaurant, 'schedule' => $schedule]);
    }
}
