<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\Restaurant;
use App\Models\Table;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class BookingsSeeder extends Seeder
{
    public function run()
    {
        $statuses = ['waiting', 'accepted', 'cancelled'];

        // Получаем коллекции объектов
        $restaurants = Restaurant::all();
        $tables = Table::all();
        $users = User::all();

        // Проверяем, что коллекции не пустые
        if ($restaurants->isEmpty() || $tables->isEmpty() || $users->isEmpty()) {
            // Если какая-то из коллекций пустая, выводим сообщение об ошибке
            $this->command->warn('One or more of the collections is empty:');
            $this->command->warn('Restaurants count: ' . $restaurants->count());
            $this->command->warn('Tables count: ' . $tables->count());
            $this->command->warn('Users count: ' . $users->count());
            $this->command->warn('Seeder aborted.');
            return;
        }

        // Генерируем бронирования
        for ($i = 0; $i < 50; $i++) {
            $restaurant = $restaurants->isNotEmpty() ? $restaurants->random() : null;
            if ($restaurant === null)
                continue; // Пропустить текущую итерацию цикла

            $table = $tables->where('restaurant_id', $restaurant->id)->isNotEmpty() ? $tables->where('restaurant_id', $restaurant->id)->random() : null;
            if ($table === null)
                continue; // Пропустить текущую итерацию цикла

            $user = $users->isNotEmpty() ? $users->random() : null;
            if ($user === null)
                continue;
            $user = $users->isNotEmpty() ? $users->random() : null;

            if (!$restaurant || !$table || !$user) {
                // Если какая-то из коллекций пустая или не удалось найти соответствующие данные, прерываем выполнение сида
                $this->command->warn('Failed to find necessary data. Seeder aborted.');
                return;
            }

            $startsAt = strtotime(Carbon::now()->addDays(rand(1, 30))->addHours(rand(0, 23))->addMinutes(rand(0, 59)));
            $endsAt = strtotime(Carbon::now()->addDays(rand(1, 30))->addHours(rand(0, 23))->addMinutes(rand(0, 59))->addHours(rand(1, 4)));

            $booking = new Booking([
                'restaurant_id' => $restaurant->id,
                'table_id' => $table->id,
                'user_id' => $user->id,
                'guest_count' => rand(1, $table->max_guests),
                'starts_at' => $startsAt*1000,
                'ends_at' => $endsAt*1000,
                'status' => $statuses[array_rand($statuses)],
            ]);

            $booking->save();
        }
    }
}
