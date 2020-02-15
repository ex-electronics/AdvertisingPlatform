<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\SimpleController as Controller;
use Illuminate\Http\Request;
use App\Page;

class PageApiController extends Controller
{

    public function __construct() {
        parent::__construct();
        $this->middleware('cors');
    }
    
    public function getPage(Request $request) {
        $page = Page::where('slug', $request->slug)->first();

        if($page === null) {
            return response()->json([
                'status' => 404,
                'data' => [],
            ]);
        }

        return response()->json([
            'status' => 200,
            'data' => $page->getAttributes(),
        ]);
    }

}
