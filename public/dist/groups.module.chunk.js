webpackJsonp(["groups.module"],{

/***/ "../../../../../src/app/groups/groups-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__groups_component__ = __webpack_require__("../../../../../src/app/groups/groups.component.ts");
//Dashboard Components

var GroupsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__groups_component__["a" /* GroupsComponent */],
        data: {
            title: 'Groups'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/groups/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_serivces_group_service__ = __webpack_require__("../../../../../src/app/shared/serivces/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_noty_util__ = __webpack_require__("../../../../../src/app/shared/utils/noty.util.ts");
// Typing for Ammap
/// <reference path="../shared/typings/ammaps/ammaps.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupsComponent = (function () {
    function GroupsComponent(groupService, router) {
        this.groupService = groupService;
        this.router = router;
        this.list = null;
        this.pages = [1];
        this.currentPage = null;
        this.route = 'groups';
        this.currentPage = 1;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.pages = [];
            var page = typeof params['page'] !== 'undefined' ? Number(params['page']) : 1;
            _this.currentPage = page;
            _this.groupService.getList(page).then(function (list) {
                _this.list = list;
                for (var i = 0; i < list.pages; i++) {
                    _this.pages.push(i + 1);
                }
            });
        });
    };
    GroupsComponent.prototype.delete = function (event, id) {
        if (confirm('Удалить?')) {
            this.groupService.deleteItem(id).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_3__shared_utils_noty_util__["a" /* NotyUtil */].success(response.success);
            });
        }
    };
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/groups/groups.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_serivces_group_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/groups/groups.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main main--full\">\r\n\t<p class=\"lg-block-title lg-block-title--btn\">Вы можете добавить руководителя в вашу рекламную сеть\r\n\t\t<button class=\"btn btn--regular\" type=\"button\" id=\"add\" [routerLink]=\"['/group']\">Добавить площадку</button>\r\n\t</p>\r\n\t<div class=\"white-container white-container--flat-top\">\r\n\t\t<ul *ngIf=\"list !== null\" class=\"moderations-list\">\r\n\t\t\t<li *ngFor=\"let item of list.data; let i = index\" class=\"moderations-item lb-bg\">\r\n\t\t\t\t<div class=\"moderation-item-image\">\r\n\t\t\t\t\t<img src=\"img/avatar-1.jpg\" width=\"65\" height=\"65\" alt=\"avatar\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<table class=\"table-2col\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Название</td>\r\n\t\t\t\t\t\t<td><a href=\"#\">Отбросы/misfits</a></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Дата</td>\r\n\t\t\t\t\t\t<td>17.08.2018</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Время</td>\r\n\t\t\t\t\t\t<td>17:04</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Цена</td>\r\n\t\t\t\t\t\t<td>500 руб.</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Тип поста</td>\r\n\t\t\t\t\t\t<td>1 час в топе без удаления</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<button class=\"btn btn--dots\" id=\"btn1\"><span class=\"visually-hidden\">меню</span></button>\r\n\t\t\t\t<ul class=\"dots-list\">\r\n\t\t\t\t\t<li class=\"dots-item\">\r\n\t\t\t\t\t\t<button class=\"btn\" type=\"button\">Удалить</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<app-pagination [pages]=\"pages\" [currentPage]=\"currentPage\" [route]=\"route\"></app-pagination>\r\n\t</div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/groups/groups.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsModule", function() { return GroupsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__ = __webpack_require__("../../../../../src/app/shared/config/theme-constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_pagination_module__ = __webpack_require__("../../../../../src/app/common/pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groups_routing_module__ = __webpack_require__("../../../../../src/app/groups/groups-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__groups_component__ = __webpack_require__("../../../../../src/app/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_serivces_group_service__ = __webpack_require__("../../../../../src/app/shared/serivces/group.service.ts");
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






// Groups Component






var GroupsModule = (function () {
    function GroupsModule() {
    }
    GroupsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__groups_routing_module__["a" /* GroupsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_pagination_module__["a" /* PaginationModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__groups_component__["a" /* GroupsComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__["a" /* ThemeConstants */],
                __WEBPACK_IMPORTED_MODULE_7__shared_serivces_group_service__["a" /* GroupService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_11__shared_inspectors_auth_inspector__["a" /* AuthInterceptor */], multi: true },
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NO_ERRORS_SCHEMA */]]
        })
    ], GroupsModule);
    return GroupsModule;
}());



/***/ })

});
//# sourceMappingURL=groups.module.chunk.js.map