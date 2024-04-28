<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Restaurant;
use App\Models\RestaurantScheduleItem;
use App\Models\Table;
use DateInterval;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class DetailController extends Controller
{

    public function getAvailableTables(Request $request)
    {
        $request->validate([
            'date' => 'required',
            'time' => 'required',
            'duration' => 'required',
            'guest_count' => 'required'
        ]);

        $date_only = substr($request->get('date'), 0, 10); // Extract YYYY-MM-DD part
        $time_only = substr($request->get('time'), 10, 6); // Extract HH:mm:ss with timezone
        $combined_datetime = $date_only . $time_only . 'Z';

        $start_time = strtotime($combined_datetime) * 1000;
        $end_time = (strtotime($combined_datetime) + 3600 * $request->get('duration')) * 1000;

        $available_tables = Table::select('tables.*')
            ->where('tables.restaurant_id', 3)
            ->leftJoin('bookings', function ($join) use ($start_time, $end_time) {
                $join->on('tables.id', '=', 'bookings.table_id')
                    ->where(function ($query) use ($start_time, $end_time) {
                        $query->where('bookings.starts_at', '<', $end_time)
                            ->where('bookings.ends_at', '>', $start_time);
                    });
            })
            ->whereNull('bookings.id')
            ->get();

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
            'ends_at' => null,
        ];

        if ($todaySchedule) {
            $schedule['starts_at'] = $todaySchedule->starts_at;
            $schedule['ends_at'] = $todaySchedule->ends_at;
        }

        $mediaRaw = $restaurant->getMedia('photos');
        $media = [];

        /** @var Media $mediaItem * */
        foreach ($mediaRaw as $mediaItem) {
            $media[] = $mediaItem->getFullUrl();
        }

        $bookings = Booking::where('user_id', auth()->check() ? auth()->user()->id : null)
            ->where('restaurant_id', $id)
            ->get();

        return Inertia::render(
            'Detail',
            [
                'restaurant' => $restaurant,
                'schedule' => $schedule,
                'bookings' => $bookings,
                'media' => $media,
            ]
        );
    }
}
