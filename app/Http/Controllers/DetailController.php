<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Restaurant;
use App\Models\RestaurantScheduleItem;
use DateInterval;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class DetailController extends Controller
{

    public function getAvailableTables(Request $request)
    {
        $request->validate([
            'date' => 'required',
            'starting_time' => 'required',
            'duration' => 'required',
            'guest_count' => 'required'
        ]);

        $start_time = new DateTime($request->get('starting_time'));
        $end_time = new DateTime($request->get('starting_time')->add(new DateInterval('PT'.$request.get('duration').'H')));

        error_log($start_time);
        error_log($end_time);

        $available_tables = DB::table('tables')
            ->select('tables.id', 'tables.number')
            ->leftJoin('bookings', function ($join) use ($start_time, $end_time) {
                $join->on('tables.id', '=', 'bookings.table_id')
                    ->where(function ($query) use ($start_time, $end_time) {
                        $query->where('bookings.starts_at', '<', $end_time)
                            ->where('bookings.ends_at', '>', $start_time);
                    });
            })
            ->whereNull('bookings.id')
            ->get();

        error_log($available_tables);

        return $available_tables;
    }

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

        $schedule = [
            'starts_at' => null,
            'ends_at' => null
        ];

        if ($todaySchedule) {
            $schedule['starts_at'] = $todaySchedule->starts_at;
            $schedule['ends_at'] = $todaySchedule->ends_at;
        }

        $bookings = Booking::where('user_id', auth()->check() ? auth()->user()->id : null)
            ->where('restaurant_id', $id)
            ->get();

        return Inertia::render('Detail', ['restaurant' => $restaurant, 'schedule' => $schedule, 'bookings' => $bookings]);
    }
}
