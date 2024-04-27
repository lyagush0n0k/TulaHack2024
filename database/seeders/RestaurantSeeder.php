<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Seeder;
class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $restaurantsData = [
            [
                'name' => 'Restaurant A',
                'address' => '123 Main St',
                'lat' => 40.7128,
                'lon' => -74.0060,
                'info' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ],
            [
                'name' => 'Restaurant B',
                'address' => '456 Elm St',
                'lat' => 34.0522,
                'lon' => -118.2437,
                'info' => 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            ],
        ];

        foreach ($restaurantsData as $restaurantData) {
            Restaurant::insert($restaurantData);
        }
    }
}
