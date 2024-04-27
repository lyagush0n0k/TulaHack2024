<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Restaurant extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

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

    /**
     * Функция поиска по имени и фамилии
     * @param $query
     * @param $term
     * @return void
     */
    public function scopeSearch($query, $term): void
    {
        $term = '%' . $term . '%';

        $query->where('name', 'like', $term);
    }
}
