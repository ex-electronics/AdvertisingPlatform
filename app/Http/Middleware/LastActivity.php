<?php

namespace App\Http\Middleware;

use Closure;

class LastActivity
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($user = \Auth::user()) {
            $user->last_activity = date('Y-m-d H:i:s');
            $user->save();
        }
        return $next($request);
    }
}
