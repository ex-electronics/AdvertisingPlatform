<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\SimpleController as Controller;
use Illuminate\Http\Request;

use App\Tarif;

class TarifApiController extends Controller
{
    public function __construct() {
        parent::__construct();
        $this->middleware('cors');
    }
    //
    public function getList(Request $request) {
        $user = \Auth::user();
        $list = Tarif::select('*')->get();

        return response()->json([
            'status' => 200,
            'data' => $list,
        ]);
    }

    public function getItem(Request $request) {
        $user = \Auth::user();
        $id = $request->id;
        $item = Tarif::select('*')->where('id', $id)->first();

        return response()->json([
            'status' => 200,
            'data' => $item->getAttributes(),
        ]);
    }

    public function buy(Request $request) {
        $user = \Auth::user();
        $id = $request->id;
        $item = Tarif::select('*')->where('id', $id)->first();

        if(!$item) {
            return response()->json([
                'status' => 404,
                'data' => $id,
                'success' => 'Такого тарифа не существует',
            ]);
        }

        $user->tarif_id = $id;
        $user->pymented_at = date('Y-m-d H:i:s', time() + config('settings.sub_days') * 24 * 60 * 60);
        $user->save();

        return response()->json([
            'status' => 200,
            'data' => $id,
            'success' => 'Оплата прошла успешно',
        ]);
    }
}
