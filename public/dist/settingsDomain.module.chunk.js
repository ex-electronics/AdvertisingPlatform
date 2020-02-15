webpackJsonp(["settingsDomain.module"],{

/***/ "../../../../../src/app/profile/settingsDomain/settingsDomain-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsDomainRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settingsDomain_component__ = __webpack_require__("../../../../../src/app/profile/settingsDomain/settingsDomain.component.ts");

var SettingsDomainRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__settingsDomain_component__["a" /* SettingsDomainComponent */],
        data: {
            title: 'SettingsDomain'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/profile/settingsDomain/settingsDomain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsDomainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_serivces_user_service__ = __webpack_require__("../../../../../src/app/shared/serivces/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsDomainComponent = (function () {
    function SettingsDomainComponent(userService) {
        this.userService = userService;
        this.info = null;
    }
    SettingsDomainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getInfo().then(function (data) {
            var user = data.data.user;
            if (data.data.landing !== null) {
                user.landing = data.data.landing.html;
            }
            _this.info = {
                status: data.status,
                data: user,
            };
        });
    };
    SettingsDomainComponent.prototype.submit = function (event, form) {
        event.preventDefault();
    };
    SettingsDomainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/profile/settingsDomain/settingsDomain.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_serivces_user_service__["a" /* UserService */]])
    ], SettingsDomainComponent);
    return SettingsDomainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/settingsDomain/settingsDomain.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\r\n\t<main class=\"main-exchange\">\r\n\t\t<div class=\"tab-content\" id=\"web-exchange\">\r\n\t\t\t<p class=\"lg-block-title\">Придумайте название для вашей рекламной биржи\r\n\t\t\t</p>\r\n\t\t\t<div class=\"white-container white-container--flat-top\">\r\n\t\t\t\t<div class=\"web-exchange-container\">\r\n\t\t\t\t\t<div class=\"web-exchange-input-container\">\r\n\t\t\t\t\t\t<span>www.</span>\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"напишите имя поддомена\">\r\n\t\t\t\t\t\t<span>.adprice.ru</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button class=\"btn btn--regular btn--light btn--220\">Изменить название</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"white-container\">\r\n\t\t\t\t<ul class=\"template-list\">\r\n\t\t\t\t\t<li class=\"template-item template-item-chosen\">\r\n\t\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t\t<img src=\"img/template-1.jpg\" alt=\"template\" width=\"253\" height=\"206\">\r\n\t\t\t\t\t\t\t<figcaption class=\"template-chosen\">\r\n\t\t\t\t\t\t\t\t<p>Вы выбрали этот шаблон</p>\r\n\t\t\t\t\t\t\t\t<span>Lorem ipsum dolor sit amet</span>\r\n\t\t\t\t\t\t\t</figcaption>\r\n\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"template-item\">\r\n\t\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t\t<img src=\"img/template-2.jpg\" alt=\"template\" width=\"253\" height=\"206\">\r\n\t\t\t\t\t\t\t<figcaption class=\"template-chose\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn--regular btn--med\" type=\"button\">Выбрать</button>\r\n\t\t\t\t\t\t\t\t<a class=\"template-link\" href=\"#\">Посмотреть</a>\r\n\t\t\t\t\t\t\t</figcaption>\r\n\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"template-item\">\r\n\t\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t\t<img src=\"img/template-3.jpg\" alt=\"template\" width=\"253\" height=\"206\">\r\n\t\t\t\t\t\t\t<figcaption class=\"template-chose\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn--regular btn--med\" type=\"button\">Выбрать</button>\r\n\t\t\t\t\t\t\t\t<a class=\"template-link\" href=\"#\">Посмотреть</a>\r\n\t\t\t\t\t\t\t</figcaption>\r\n\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"template-item\">\r\n\t\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t\t<img src=\"img/template-4.jpg\" alt=\"template\" width=\"253\" height=\"206\">\r\n\t\t\t\t\t\t\t<figcaption class=\"template-chose\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn--regular btn--med\" type=\"button\">Выбрать</button>\r\n\t\t\t\t\t\t\t\t<a class=\"template-link\" href=\"#\">Посмотреть</a>\r\n\t\t\t\t\t\t\t</figcaption>\r\n\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"template-item\">\r\n\t\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t\t<img src=\"img/template-5.jpg\" alt=\"template\" width=\"253\" height=\"206\">\r\n\t\t\t\t\t\t\t<figcaption class=\"template-chose\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn--regular btn--med\" type=\"button\">Выбрать</button>\r\n\t\t\t\t\t\t\t\t<a class=\"template-link\" href=\"#\">Посмотреть</a>\r\n\t\t\t\t\t\t\t</figcaption>\r\n\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"template-item\">\r\n\t\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t\t<img src=\"img/template-6.jpg\" alt=\"template\" width=\"253\" height=\"206\">\r\n\t\t\t\t\t\t\t<figcaption class=\"template-chose\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn--regular btn--med\" type=\"button\">Выбрать</button>\r\n\t\t\t\t\t\t\t\t<a class=\"template-link\" href=\"#\">Посмотреть</a>\r\n\t\t\t\t\t\t\t</figcaption>\r\n\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"tab-content\" id=\"ref-system\">\r\n\t\t\t<p class=\"lg-block-title\">У вас есть <output>0</output> бесплатных дней</p>\r\n\t\t\t<div class=\"white-container white-container--flat-top\">\r\n\t\t\t\t<div class=\"copy-link-container\">\r\n\t\t\t\t\t<input type=\"text\" class=\"text-input text-input--copy-link\" value=\"www.adrpice.ru/res234234\">\r\n\t\t\t\t\t<button class=\"btn btn--regular\">Скопировать ссылку</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"custom-list\">\r\n\t\t\t\t\t<li class=\"custom-list-item\">Реферальная программа с помощью которой вы можете оплачивать услуги сервиса.</li>\r\n\t\t\t\t\t<li class=\"custom-list-item\">Приведите друга по вашей реферальной ссылке и получите 3 дня бесплатного пользования.\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"ref-stat\">\r\n\t\t\t\t\t<h5>Дымченко Сергей - </h5>\r\n\t\t\t\t\t<p>зарегистрировался по вашей реферальной ссылке 28.07.2018.\r\n\t\t\t\t\t\tВам было начислено 3 бесплатных дня\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</main>\r\n\t<aside class=\"aside aside--right tab\">\r\n\t\t<button class=\"tablinks\" [routerLink]=\"['/settings']\" id=\"defaultOpen\">Профиль</button>\r\n\t\t<button class=\"tablinks\" [routerLink]=\"['/settings/domain']\" id=\"defaultOpen\">Веб сайт биржи</button>\r\n\t\t<button class=\"tablinks\" [routerLink]=\"['/settings/action']\">Купоны на скидку</button>\r\n\t\t<a class=\"tablinks\" [routerLink]=\"['/tarifs']\">Тарифный план</a>\r\n\t\t<button class=\"tablinks\" [routerLink]=\"['/settings/referral']\">Реферальная система</button>\r\n\t</aside>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/settingsDomain/settingsDomain.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDomainModule", function() { return SettingsDomainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__ = __webpack_require__("../../../../../src/app/shared/config/theme-constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settingsDomain_routing_module__ = __webpack_require__("../../../../../src/app/profile/settingsDomain/settingsDomain-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settingsDomain_component__ = __webpack_require__("../../../../../src/app/profile/settingsDomain/settingsDomain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_inspectors_auth_inspector__ = __webpack_require__("../../../../../src/app/shared/inspectors/auth.inspector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Settings Component





var SettingsDomainModule = (function () {
    function SettingsDomainModule() {
    }
    SettingsDomainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__settingsDomain_routing_module__["a" /* SettingsDomainRoutes */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__settingsDomain_component__["a" /* SettingsDomainComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__["a" /* ThemeConstants */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__shared_inspectors_auth_inspector__["a" /* AuthInterceptor */], multi: true },
            ]
        })
    ], SettingsDomainModule);
    return SettingsDomainModule;
}());



/***/ })

});
//# sourceMappingURL=settingsDomain.module.chunk.js.map