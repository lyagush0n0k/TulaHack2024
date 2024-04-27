<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RestaurantScheduleItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'restaurant_id',
        'starts_at',
        'ends_at',
        'type'
    ];
}
