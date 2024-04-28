<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class FeedbackController extends Controller
{
    /**
     * @return Response
     */
    public function getFeedback(): Response
    {
        return Inertia::render('Feedback');
    }
}
