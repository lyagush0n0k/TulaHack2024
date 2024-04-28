<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use App\Models\Table;
use Illuminate\Database\Seeder;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Создаем данные для ресторанов
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
            [
                'name' => 'Restaurant C',
                'address' => '456 Elm St',
                'lat' => 34.0522,
                'lon' => -118.2437,
                'info' => 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            ],
            [
                'name' => 'Restaurant D',
                'address' => '456 Elm St',
                'lat' => 34.0522,
                'lon' => -118.2437,
                'info' => 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            ],
        ];
        $index = 1;
        // Заполняем таблицу ресторанов и столов
        foreach ($restaurantsData as $restaurantData) {
            $restaurant = Restaurant::create($restaurantData);
            // Создаем 10 столов для каждого ресторана
            for ($i = 1; $i <= 10; $i++) {
                Table::create([
                    'restaurant_id' => $restaurant->id,
                    'number' => $i,
                    'max_guests' => rand(2, 8), // Случайное количество максимальных гостей
                ]);
            }
            $index++;
        }
    }
}
