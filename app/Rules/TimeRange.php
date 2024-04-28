<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class TimeRange implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $start = strtotime($value[0]);
        $end = strtotime($value[1]);

        // Проверяем, что время "start" меньше времени "end"
        if ($start >= $end) {
            $fail('Начальное время больше конечного');
        }
    }
}
