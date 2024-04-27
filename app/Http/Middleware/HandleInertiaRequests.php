<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        $authData = [
            'permissions' => [],
            'roles'       => [],
        ];

        if ($user) {
            $authData['user'] = $user->only(['id', 'name', 'email', 'phone', 'sex', 'avatar']);
            $authData['permissions'] = $user->permissions() ?: [];
            $authData['roles'] = $user->roles() ?: [];
        }

        return array_merge(parent::share($request), ['auth' => $authData]);
    }
}
