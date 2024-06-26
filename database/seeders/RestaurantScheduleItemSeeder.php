<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use App\Models\RestaurantScheduleItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestaurantScheduleItemSeeder extends Seeder
{
    public function run()
    {
        $restaurants = Restaurant::all();

        $daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

        foreach ($restaurants as $restaurant) {
            foreach ($daysOfWeek as $day) {
                $startsAt = $this->generateRandomTime();
                $endsAt = $this->generateRandomTimeAfter($startsAt);

                RestaurantScheduleItem::create([
                    'restaurant_id' => $restaurant->id,
                    'day_of_week' => $day,
                    'starts_at' => $startsAt,
                    'ends_at' => $endsAt,
                    'type' => $this->generateRandomType(),
                ]);
            }
        }
    }

    private function generateRandomTime()
    {
        return sprintf('%02d:%02d', rand(0, 23), rand(0, 59));
    }

    private function generateRandomTimeAfter($time)
    {
        list($hours, $minutes) = explode(':', $time);

        $newHours = rand($hours, 23);
        $newMinutes = ($newHours == $hours) ? rand($minutes, 59) : rand(0, 59);

        return sprintf('%02d:%02d', $newHours, $newMinutes);
    }

    private function generateRandomType()
    {
        return 'workday';
    }
}
