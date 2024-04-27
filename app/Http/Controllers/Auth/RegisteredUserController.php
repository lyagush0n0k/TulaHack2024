<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserAvatar;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{


    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|lowercase|email|max:255|unique:users',
            'phone'    => 'required|numeric|min:10|unique:users',
            'sex'      => 'required|in:male,female',
            'avatar'   => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        $avatarId = UserAvatar::inRandomOrder()->where('type', 'like', "default_{$request->sex}")->limit(1)->first()->id;

        if ($request->hasFile('avatar')) {
            $requestedFile = $request->file('avatar');

            $avatarName = time() . '.' . $requestedFile->getClientOriginalName();
            $filePath = Storage::disk('public')->putFileAs('', $requestedFile, $avatarName);

            $avatarId = UserAvatar::create(['path' => $filePath])->id;
        }

        $user = User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'phone'     => $request->phone,
            'sex'       => $request->sex,
            'avatar_id' => $avatarId,
            'password'  => Hash::make($request->password),
        ]);

        event(new Registered($user));

        $user->assignRole('User');

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
