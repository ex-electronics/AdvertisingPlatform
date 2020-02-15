webpackJsonp(["exchange.module"],{

/***/ "../../../../../src/app/exchange/exchange-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exchange_component__ = __webpack_require__("../../../../../src/app/exchange/exchange.component.ts");
//Dashboard Components

var ExchangeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__exchange_component__["a" /* ExchangeComponent */],
        data: {
            title: 'Exchange'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/exchange/exchange.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_serivces_group_service__ = __webpack_require__("../../../../../src/app/shared/serivces/group.service.ts");
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



var ExchangeComponent = (function () {
    function ExchangeComponent(groupService, router) {
        this.groupService = groupService;
        this.router = router;
        this.list = null;
        this.pages = [1];
        this.currentPage = null;
        this.route = 'exchange';
        this.currentPage = 1;
    }
    ExchangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.pages = [];
            var page = typeof params['page'] !== 'undefined' ? Number(params['page']) : 1;
            _this.currentPage = page;
            _this.groupService.getExchange(page).then(function (list) {
                _this.list = list;
                for (var i = 0; i < list.pages; i++) {
                    _this.pages.push(i + 1);
                }
            });
        });
    };
    ExchangeComponent.prototype.edit = function () {
        //console.log(1);
    };
    ExchangeComponent.prototype.delete = function (event, id) {
        if (confirm('Удалить?')) {
            this.groupService.deleteItem(id).then(function (response) {
                console.log(response);
            });
        }
    };
    ExchangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/exchange/exchange.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_serivces_group_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ExchangeComponent);
    return ExchangeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exchange/exchange.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"page-title\">\r\n        <h4>Groups</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"table-overflow\">\r\n                        <button [routerLink]=\"['/group']\" btn btn-success\">Add</button>\r\n                        <table id=\"dt-opt\" class=\"table table-lg table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Avatar</th>\r\n                                    <th>Name</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"list !== null\">\r\n                                <tr *ngFor=\"let item of list.data; let i = index\">\r\n                                    <td>\r\n                                        <div class=\"list-info mrg-top-10\">\r\n                                            <img class=\"thumb-img\" src=\"{{item.avatar}}\" alt=\"\">\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"info\">\r\n                                            <span class=\"title\">{{item.name}}</span>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"mrg-top-2 text-center\">\r\n                                            <button [routerLink]=\"['/adv/' + item.id]\" btn btn-icon btn-flat btn-rounded dropdown-toggle\">\r\n                                                Post\r\n                                            </button>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <app-pagination [pages]=\"pages\" [currentPage]=\"currentPage\" [route]=\"route\"></app-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/exchange/exchange.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeModule", function() { return ExchangeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__ = __webpack_require__("../../../../../src/app/shared/config/theme-constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_pagination_module__ = __webpack_require__("../../../../../src/app/common/pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exchange_routing_module__ = __webpack_require__("../../../../../src/app/exchange/exchange-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__exchange_component__ = __webpack_require__("../../../../../src/app/exchange/exchange.component.ts");
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






// Exchange Component






var ExchangeModule = (function () {
    function ExchangeModule() {
    }
    ExchangeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__exchange_routing_module__["a" /* ExchangeRoutes */]),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_pagination_module__["a" /* PaginationModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__exchange_component__["a" /* ExchangeComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__["a" /* ThemeConstants */],
                __WEBPACK_IMPORTED_MODULE_7__shared_serivces_group_service__["a" /* GroupService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_11__shared_inspectors_auth_inspector__["a" /* AuthInterceptor */], multi: true },
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NO_ERRORS_SCHEMA */]]
        })
    ], ExchangeModule);
    return ExchangeModule;
}());



/***/ })

});
//# sourceMappingURL=exchange.module.chunk.js.map