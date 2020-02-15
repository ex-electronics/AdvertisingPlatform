<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\SimpleController as Controller;
use Illuminate\Http\Request;
use App\Payment;

class PaymentApiController extends Controller
{
    public function __construct() {
        parent::__construct();
        $this->middleware('cors');
    }
    //
    public function payment(Request $request) {

    }

    public function field(Request $request) {

    }

    public function result(Request $request) {

    }
}
