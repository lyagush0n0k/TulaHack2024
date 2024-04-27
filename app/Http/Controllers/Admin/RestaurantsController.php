<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Restaurant;
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
            'name'    => 'required|string|max:255',
            'files'   => 'required',
            'address' => 'required',
            'info'    => 'required|string',
        ]);

        $files = $request->file('files');

        $restaurant = Restaurant::create([
            'name'    => $request->get('name'),
            'address' => $request->get('address')['address'],
            'info'    => $request->get('info'),
            'lat'     => $request->get('address')['lat'],
            'lon'     => $request->get('address')['lon'],
        ]);

        foreach ($files as $file) {
            $restaurant->addMedia($file)->toMediaCollection('photos');
        }

        return redirect()->route('admin.restaurants.index');
    }
}
