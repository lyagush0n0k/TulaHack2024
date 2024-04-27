<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class MainController extends Controller
{
    /**
     * @return Response
     */
    public function getMain(): Response
    {
        return Inertia::render('Welcome');
    }
}
