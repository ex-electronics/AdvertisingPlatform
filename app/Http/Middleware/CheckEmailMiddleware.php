<?php

namespace App\Http\Middleware;

use Closure;

class CheckEmailMiddleware
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
        $user = \Auth::user();

        if($user !== null && $user->email === null) {
            //Session::flush();
        }

        return $next($request);
    }
}
