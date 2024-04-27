<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar_id',
        'phone',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'created_at'        => 'datetime:d.m.Y H:i:s',
            'password'          => 'hashed',
        ];
    }

    protected $appends = [
        'avatar',
    ];

    public function avatar(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo('App\Models\UserAvatar');
    }

    public function canAccessPanel(): bool
    {
        return $this->hasPermissionTo('access-panel');
    }

    public function getAvatarAttribute(): string
    {
        return $this->avatar()->first()->path;
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
