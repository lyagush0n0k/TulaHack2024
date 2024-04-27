<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Inertia\Inertia;
use Inertia\Response;

class MainController extends Controller
{
    /**
     * @return Response
     */
    public function getMain(): Response
    {
        $restaurants = Restaurant::paginate(25);
        return Inertia::render('Main', ['restaurants' => $restaurants]);
    }
}
