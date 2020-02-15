webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
//User Components

var UserRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__user_component__["a" /* UserComponent */],
        data: {
            title: 'User'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_serivces_user_service__ = __webpack_require__("../../../../../src/app/shared/serivces/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_serivces_group_service__ = __webpack_require__("../../../../../src/app/shared/serivces/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils_noty_util__ = __webpack_require__("../../../../../src/app/shared/utils/noty.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = (function () {
    function UserComponent(userService, groupService, router, navigation) {
        this.userService = userService;
        this.groupService = groupService;
        this.router = router;
        this.navigation = navigation;
        this.groups = null;
        this.moderatorInfo = null;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = typeof params['id'] !== 'undefined' ? Number(params['id']) : null;
            _this.groupService.getAll().then(function (response) {
                _this.groups = response.data;
            });
            if (id !== null) {
                _this.userService.getModeratorInfo(id).then(function (response) {
                    _this.moderatorInfo = response.data;
                });
            }
        });
    };
    UserComponent.prototype.add = function (event) {
        var _this = this;
        event.preventDefault();
        var data = {
            link: __WEBPACK_IMPORTED_MODULE_4_jquery__('[name="link"]').val(),
            role: __WEBPACK_IMPORTED_MODULE_4_jquery__('[name="role"]:checked').val(),
        };
        __WEBPACK_IMPORTED_MODULE_4_jquery__('[name^="GROUPS"]:checked').each(function (index, element) {
            data[__WEBPACK_IMPORTED_MODULE_4_jquery__(element).attr('name')] = __WEBPACK_IMPORTED_MODULE_4_jquery__(element).val();
        });
        this.userService.addModerator(data).then(function (response) {
            response.text().then(function (example) {
                var json = JSON.parse(example);
                __WEBPACK_IMPORTED_MODULE_5__shared_utils_noty_util__["a" /* NotyUtil */].success(json.success);
                _this.navigation.navigate(['/users']);
            });
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/user/user.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_serivces_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_serivces_group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-7\">\r\n                            <h4 class=\"card-title\">Add User</h4>\r\n                            <form (submit)=\"add($event)\" class=\"form-horizontal mrg-top-40 pdd-right-30\">\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"form-1-5\" class=\"col-md-2 control-label\">Link</label>\r\n                                    <div class=\"col-md-10\">\r\n                                        <input class=\"form-control\" type=\"text\" id=\"link\" name=\"link\" value=\"{{moderatorInfo ? moderatorInfo.info.social_id : null}}\">\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"groups\" class=\"group-wrapper\">\r\n                                    <div *ngFor=\"let item of groups\" style=\"clear: both\">\r\n                                        <div class=\"checkbox\">\r\n                                            <input id=\"its_ad-{{item.id}}\" name=\"GROUPS[{{item.id}}]\" type=\"checkbox\" value=\"{{item.id}}\">\r\n                                            <label for=\"its_ad-{{item.id}}\">{{item.name}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"group-wrapper\">\r\n                                    <div style=\"clear: both\">\r\n                                        <!-- <div class=\"radio\"> -->\r\n                                            <input name=\"role\" type=\"radio\" value=\"1\">\r\n                                            <label>Модератор</label>\r\n                                        <!-- </div> -->\r\n                                    </div>\r\n                                    <div style=\"clear: both\">\r\n                                        <!-- <div class=\"radio\"> -->\r\n                                            <input name=\"role\" type=\"radio\" value=\"2\">\r\n                                            <label>Постер</label>\r\n                                        <!-- </div> -->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"col-md-10\">\r\n                                        <button class=\"btn btn-success\">Save</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__ = __webpack_require__("../../../../../src/app/shared/config/theme-constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_inspectors_auth_inspector__ = __webpack_require__("../../../../../src/app/shared/inspectors/auth.inspector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_serivces_user_service__ = __webpack_require__("../../../../../src/app/shared/serivces/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_serivces_group_service__ = __webpack_require__("../../../../../src/app/shared/serivces/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// User Component








var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__user_routing_module__["a" /* UserRoutes */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__user_component__["a" /* UserComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__["a" /* ThemeConstants */],
                __WEBPACK_IMPORTED_MODULE_10__shared_serivces_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_serivces_group_service__["a" /* GroupService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__shared_inspectors_auth_inspector__["a" /* AuthInterceptor */], multi: true },
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map