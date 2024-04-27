<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;

class MainController extends Controller
{
    /**
     * @return Response
     */
    public function getMain(): Response
    {
        $currentDayOfWeek = strtolower(date('l'));

        $restaurants = Restaurant::with([
            'schedule' => function ($query) use ($currentDayOfWeek) {
                $query->where('day_of_week', strtolower($currentDayOfWeek));
            }
        ])->get();

        return Inertia::render('Main', [
            'restaurants' => $restaurants,
        ]);
    }
}
