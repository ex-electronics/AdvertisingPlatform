@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <a class="btn" href="/vk/auth">Vk Auth</a>
                <!-- <div id="uLogin" data-ulogin="display=panel;theme=classic;fields=first_name,last_name,email;providers=vkontakte;hidden=;redirect_uri={{route('api.auth')}};mobilebuttons=0;"></div> -->
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
