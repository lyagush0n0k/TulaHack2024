<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->get('search');
        $users = User::search($search)->paginate(25)->withQueryString();

        return Inertia::render('Admin/Users/Users', ['users' => $users]);
    }

    public function detail(Request $request, int $id)
    {
        $user = User::find($id);

        return Inertia::render('Admin/Users/Detail', ['user' => $user]);
    }
}
