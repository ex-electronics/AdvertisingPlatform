<?php

namespace App\Http\Middleware;

use Closure;
use App\Admin;

class CheckAdminRoleMiddleware
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

        if($user === null || $user->role_id !== Admin::ROLE_ID) {
            return redirect(route('home'));
        }

        return $next($request);
    }
}
