<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Restaurant extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'lat',
        'lon',
        'info'
    ];

    public function schedule(): HasMany
    {
        return $this->hasMany(RestaurantScheduleItem::class);
    }

    public function tables(): HasMany
    {
        return $this->hasMany(Table::class);
    }

    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }
}
