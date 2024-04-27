<?php

namespace Database\Seeders;

use App\Models\UserAvatar;
use Illuminate\Database\Seeder;

class AvatarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserAvatar::insert([
            'path' => '/img/default_avatars/default_male_1.png',
            'type' => 'default_male'
        ]);
        UserAvatar::insert([
            'path' => '/img/default_avatars/default_male_2.png',
            'type' => 'default_male'
        ]);
        UserAvatar::insert([
            'path' => '/img/default_avatars/default_male_3.png',
            'type' => 'default_male'
        ]);
        UserAvatar::insert([
            'path' => '/img/default_avatars/default_male_4.png',
            'type' => 'default_male'
        ]);
        UserAvatar::insert([
            'path' => '/img/default_avatars/default_female_1.png',
            'type' => 'default_female'
        ]);
        UserAvatar::insert([
            'path' => '/img/default_avatars/default_female_2.png',
            'type' => 'default_female'
        ]);
        UserAvatar::insert([
            'path' => '/img/default_avatars/default_female_3.png',
            'type' => 'default_female'
        ]);
    }
}
