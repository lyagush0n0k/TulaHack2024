<?php

namespace App\Http\Controllers\Admin;

use App\Enums\WeekDay;
use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Models\RestaurantScheduleItem;
use App\Rules\TimeRange;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RestaurantsController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->get('search');
        $restaurants = Restaurant::search($search)->paginate(25)->withQueryString();

        return Inertia::render(
            'Admin/Restaurants/Restaurants',
            [
                'restaurants' => $restaurants,
            ]
        );
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Restaurants/Create');
    }

    public function destroy(Request $request): void
    {
        $id = $request->get('id');
        $restaurant = Restaurant::find($id);

        if ($restaurant) {
            $restaurant->delete();
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'      => 'required|string|max:255',
            'files'     => 'required',
            'address'   => 'required',
            'info'      => 'required|string',
            'monday'    => ['required', new TimeRange()],
            'tuesday'   => ['required', new TimeRange()],
            'wednesday' => ['required', new TimeRange()],
            'thursday'  => ['required', new TimeRange()],
            'friday'    => ['required', new TimeRange()],
            'saturday'  => ['required', new TimeRange()],
            'sunday'    => ['required', new TimeRange()],
        ]);

        $files = $request->file('files');
        $address = $request->get('address');

        $restaurant = Restaurant::create([
            'name'    => $request->get('name'),
            'address' => $address['address'],
            'info'    => $request->get('info'),
            'lat'     => $address['lat'],
            'lon'     => $address['lon'],
        ]);

        $schedule = [];

        foreach (WeekDay::cases() as $day) {
            $timeArray = $request->get($day->value);
            $start = (new \DateTime())->setTimestamp(strtotime($timeArray[0]));
            $end = (new \DateTime())->setTimestamp(strtotime($timeArray[1]));
            $schedule[] = [
                'day_of_week'   => $day->value,
                'restaurant_id' => $restaurant->id,
                'starts_at'     => $start->format('H:i'),
                'ends_at'       => $end->format('H:i'),
                'type'          => 'workday'
            ];
        }

        RestaurantScheduleItem::insert($schedule);

        foreach ($files as $file) {
            $restaurant->addMedia($file)->toMediaCollection('photos');
        }

        return redirect()->route('admin.restaurants.index');
    }
}
