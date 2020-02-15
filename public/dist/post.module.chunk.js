webpackJsonp(["post.module"],{

/***/ "../../../../../src/app/post/post-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
//Post Components

var PostRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__post_component__["a" /* PostComponent */],
        data: {
            title: 'Post'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_serivces_post_service__ = __webpack_require__("../../../../../src/app/shared/serivces/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_noty_util__ = __webpack_require__("../../../../../src/app/shared/utils/noty.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = (function () {
    function PostComponent(postService, router, navigation) {
        this.postService = postService;
        this.router = router;
        this.navigation = navigation;
        this.post = null;
        this.rel = null;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = typeof params['id'] !== 'undefined' ? Number(params['id']) : null;
            if (id !== null) {
                _this.postService.getItem(id).then(function (response) {
                    _this.post = response.data.post;
                    _this.rel = response.data.relations;
                });
            }
        });
    };
    PostComponent.prototype.create = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(document.querySelector('form'));
        this.postService.create(data).then(function (response) {
            response.text().then(function (example) {
                var json = JSON.parse(example);
                __WEBPACK_IMPORTED_MODULE_3__shared_utils_noty_util__["a" /* NotyUtil */].success(json.success);
                _this.navigation.navigate(['/posts']);
            });
        });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/post/post.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_serivces_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/post/post.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-7\">\r\n                            <h4 class=\"card-title\">Add Post</h4>\r\n                            <form (submit)=\"create($event)\" method=\"POST\" enctype=\"multipart/form-data\" class=\"form-horizontal mrg-top-40 pdd-right-30\">\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"form-1-5\" class=\"col-md-2 control-label\">Text</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <textarea class=\"form-control\" rows=\"3\" id=\"text\" name=\"text\">{{post ? post.text : ''}}</textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"form-1-1\" class=\"col-md-2 control-label\">Image</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <input type=\"file\" class=\"form-control\" id=\"image\" name=\"images[]\" placeholder=\"Image\">\r\n                                        <small *ngIf=\"rel && rel.images[0]\">{{rel.images[0].image}}</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"form-1-1\" class=\"col-md-2 control-label\">Video</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <input type=\"file\" class=\"form-control\" id=\"video\" name=\"videos[]\" placeholder=\"Video\">\r\n                                        <small *ngIf=\"rel && rel.videos[0]\">{{rel.videos[0].video}}</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"form-1-1\" class=\"col-md-2 control-label\">Document</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <input type=\"file\" class=\"form-control\" id=\"document\" name=\"documents[]\" placeholder=\"Document\">\r\n                                        <small *ngIf=\"rel && rel.documents[0]\">{{rel.documents[0].document}}</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"form-1-1\" class=\"col-md-2 control-label\">Audio</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <input type=\"file\" class=\"form-control\" id=\"audio\" name=\"audios[]\" placeholder=\"Audio\">\r\n                                        <small *ngIf=\"rel && rel.audios[0]\">{{rel.audios[0].audio}}</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"form-1-1\" class=\"col-md-2 control-label\">Date/Time</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <input type=\"text\" id=\"date-range-picker\" class=\"form-control\" name=\"posted_at\" value=\"2018.01.01 01:01:01\" placeholder=\"Date range picker\" />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"checkbox\">\r\n                                        <input id=\"its_ad\" name=\"its_ad\" type=\"checkbox\" value=\"1\">\r\n                                        <label for=\"its_ad\">Это реклама</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"checkbox\">\r\n                                        <input id=\"signature\" name=\"signature\" type=\"checkbox\" value=\"1\">\r\n                                        <label for=\"signature\">Подпись</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"col-md-10\">\r\n                                        <div *ngIf=\"post\"><input  id=\"id\" name=\"id\" type=\"hidden\" value=\"{{post.id}}\"></div>\r\n                                        <button class=\"btn btn-success\">{{post ? 'Save' : 'Create'}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/post/post.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__ = __webpack_require__("../../../../../src/app/shared/config/theme-constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_routing_module__ = __webpack_require__("../../../../../src/app/post/post-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_inspectors_auth_inspector__ = __webpack_require__("../../../../../src/app/shared/inspectors/auth.inspector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_serivces_post_service__ = __webpack_require__("../../../../../src/app/shared/serivces/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Post Component







var PostModule = (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__post_routing_module__["a" /* PostRoutes */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__post_component__["a" /* PostComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__["a" /* ThemeConstants */],
                __WEBPACK_IMPORTED_MODULE_10__shared_serivces_post_service__["a" /* PostService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__shared_inspectors_auth_inspector__["a" /* AuthInterceptor */], multi: true },
            ]
        })
    ], PostModule);
    return PostModule;
}());



/***/ })

});
//# sourceMappingURL=post.module.chunk.js.map