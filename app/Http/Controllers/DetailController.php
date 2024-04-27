<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DetailController extends Controller
{
    /**
     * @return Response
     */
    public function getDetail(): Response
    {
        return Inertia::render('Detail');
    }
}
