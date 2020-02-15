webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
//Users Components

var UsersRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__users_component__["a" /* UsersComponent */],
        data: {
            title: 'Users'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_serivces_user_service__ = __webpack_require__("../../../../../src/app/shared/serivces/user.service.ts");
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




var UsersComponent = (function () {
    function UsersComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.list = null;
        this.pages = [1];
        this.currentPage = null;
        this.route = 'users';
        this.moderators = null;
        this.currentPage = 1;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.userService.listModerator().then(function (response) {
                _this.moderators = response.data;
            });
        });
    };
    UsersComponent.prototype.remove = function (event, id) {
        if (confirm('Удалить?')) {
            this.userService.removeModerator(id).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_3__shared_utils_noty_util__["a" /* NotyUtil */].success(response.success);
            });
        }
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/users/users.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_serivces_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main main--full\">\r\n    <p class=\"lg-block-title lg-block-title--btn\">Вы можете добавить руководителя в вашу рекламную сеть\r\n        <button [routerLink]=\"['/user']\" btn btn--regular\" type=\"button\" id=\"add\">Добавить руководителя</button>\r\n    </p>\r\n    <div class=\"white-container white-container--flat-top\">\r\n        <ul *ngIf=\"moderators !== null\" class=\"moderations-list\">\r\n            <li *ngFor=\"let item of moderators; let i = index\" class=\"moderations-item lb-bg\">\r\n                <div class=\"moderation-item-image user-image-container\">\r\n                    <img src=\"img/avatar-1.jpg\" width=\"65\" height=\"65\" alt=\"avatar\">\r\n                </div>\r\n                <table class=\"table-2col table-2col--info\">\r\n                    <tr>\r\n                        <td>Имя</td>\r\n                        <td><a href=\"#\">Дмитрий Гаврилов</a></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Должность</td>\r\n                        <td>Постер и модератор</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td></td>\r\n                        <td>vk.com/club23124</td>\r\n                    </tr>\r\n                </table>\r\n                <button class=\"btn btn--dots\" id=\"btn1\"><span class=\"visually-hidden\">меню</span></button>\r\n                <ul class=\"dots-list\" id=\"set1\">\r\n                    <li class=\"dots-item\">\r\n                        <button class=\"btn\" type=\"button\">Редактировать</button>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <app-pagination [pages]=\"pages\" [currentPage]=\"currentPage\" [route]=\"route\"></app-pagination>\r\n    </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__ = __webpack_require__("../../../../../src/app/shared/config/theme-constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_pagination_module__ = __webpack_require__("../../../../../src/app/common/pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_routing_module__ = __webpack_require__("../../../../../src/app/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_serivces_user_service__ = __webpack_require__("../../../../../src/app/shared/serivces/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_inspectors_auth_inspector__ = __webpack_require__("../../../../../src/app/shared/inspectors/auth.inspector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Users Component





var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__users_routing_module__["a" /* UsersRoutes */]),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_pagination_module__["a" /* PaginationModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__users_component__["a" /* UsersComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__["a" /* ThemeConstants */],
                __WEBPACK_IMPORTED_MODULE_6__shared_serivces_user_service__["a" /* UserService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_11__shared_inspectors_auth_inspector__["a" /* AuthInterceptor */], multi: true },
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map