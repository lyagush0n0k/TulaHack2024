<?php

namespace Database\Seeders;

use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AvatarSeeder::class,
            PermissionsSeeder::class,
            RolesSeeder::class,
        ]);

        User::factory()->create([
            'name'     => 'Super Admin',
            'email'    => 'test@example.com',
            'password' => Hash::make('password'),
            'phone'    => '79999999999',
            'avatar_id' => 1
        ])->each(function ($user) {
            $user->assignRole('Super Admin');
        });
    }
}
