webpackJsonp(["settingsAction.module"],{

/***/ "../../../../../src/app/profile/settingsAction/settingsAction-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsActionRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settingsAction_component__ = __webpack_require__("../../../../../src/app/profile/settingsAction/settingsAction.component.ts");

var SettingsActionRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__settingsAction_component__["a" /* SettingsActionComponent */],
        data: {
            title: 'SettingsAction'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/profile/settingsAction/settingsAction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsActionComponent; });
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


var SettingsActionComponent = (function () {
    function SettingsActionComponent(userService) {
        this.userService = userService;
        this.info = null;
    }
    SettingsActionComponent.prototype.ngOnInit = function () {
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
    SettingsActionComponent.prototype.submit = function (event, form) {
        event.preventDefault();
    };
    SettingsActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/profile/settingsAction/settingsAction.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_serivces_user_service__["a" /* UserService */]])
    ], SettingsActionComponent);
    return SettingsActionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/settingsAction/settingsAction.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\r\n\t<main class=\"main-exchange\">\r\n\t\t<div class=\"tab-content\" id=\"coupons\">\r\n\t\t\t<p class=\"lg-block-title\">Создайте купоны на скидку при покупке рекламы в ваших сообществах для своих\r\n\t\t\t\tклиентов</p>\r\n\t\t\t<div class=\"white-container white-container--flat-top\">\r\n\t\t\t\t<div class=\"coupons-intro-container\">\r\n\t\t\t\t\t<button class=\"btn btn--regular btn--light tablinks\" onclick=\"openTab(event, 'coupon-create')\">Создать купон на\r\n\t\t\t\t\t\tскидку\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"white-container\">\r\n\t\t\t\t<ul class=\"coupons-list\">\r\n\t\t\t\t\t<li class=\"coupons-item\">\r\n\t\t\t\t\t\t<div class=\"coupon-header\">\r\n\t\t\t\t\t\t\t<h3>SADASF8fffKFC</h3>\r\n\t\t\t\t\t\t\t<span>название купона</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"coupon-body\">\r\n\t\t\t\t\t\t\t<b>Скидка</b>\r\n\t\t\t\t\t\t\t<span>10<i>%</i></span>\r\n\t\t\t\t\t\t\t<p>Действует от 3 постов<br> без ограничения по времени</p>\r\n\t\t\t\t\t\t\t<button class=\"btn btn--regular\">Изменить</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"coupons-item\">\r\n\t\t\t\t\t\t<div class=\"coupon-header\">\r\n\t\t\t\t\t\t\t<h3>SADASF8fffKFC</h3>\r\n\t\t\t\t\t\t\t<span>название купона</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"coupon-body\">\r\n\t\t\t\t\t\t\t<b>Скидка</b>\r\n\t\t\t\t\t\t\t<span>10<i>%</i></span>\r\n\t\t\t\t\t\t\t<p>Действует от 1 поста<br> годен до 20.07.2018</p>\r\n\t\t\t\t\t\t\t<button class=\"btn btn--regular\">Изменить</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"coupons-item\">\r\n\t\t\t\t\t\t<div class=\"coupon-header\">\r\n\t\t\t\t\t\t\t<h3>SADASF8fffKFC</h3>\r\n\t\t\t\t\t\t\t<span>название купона</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"coupon-body\">\r\n\t\t\t\t\t\t\t<b>Скидка</b>\r\n\t\t\t\t\t\t\t<span>10<i>%</i></span>\r\n\t\t\t\t\t\t\t<p>Действует от 1 поста<br> годен до 20.07.2018</p>\r\n\t\t\t\t\t\t\t<button class=\"btn btn--regular\">Изменить</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"coupons-item\">\r\n\t\t\t\t\t\t<div class=\"coupon-header\">\r\n\t\t\t\t\t\t\t<h3>SADASF8fffKFC</h3>\r\n\t\t\t\t\t\t\t<span>название купона</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"coupon-body\">\r\n\t\t\t\t\t\t\t<b>Скидка</b>\r\n\t\t\t\t\t\t\t<span>10<i>%</i></span>\r\n\t\t\t\t\t\t\t<p>Действует от 1 поста<br> годен до 20.07.2018</p>\r\n\t\t\t\t\t\t\t<button class=\"btn btn--regular\">Изменить</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"coupons-item\">\r\n\t\t\t\t\t\t<div class=\"coupon-header\">\r\n\t\t\t\t\t\t\t<h3>SADASF8fffKFC</h3>\r\n\t\t\t\t\t\t\t<span>название купона</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"coupon-body\">\r\n\t\t\t\t\t\t\t<b>Скидка</b>\r\n\t\t\t\t\t\t\t<span>10<i>%</i></span>\r\n\t\t\t\t\t\t\t<p>Действует от 1 поста<br> годен до 20.07.2018</p>\r\n\t\t\t\t\t\t\t<button class=\"btn btn--regular\">Изменить</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"tab-content\" id=\"coupon-create\">\r\n\t\t\t<p class=\"lg-block-title\">Создать купон на скидку</p>\r\n\t\t\t<div class=\"white-container white-container--flat-top\">\r\n\t\t\t\t<div class=\"coupon-create-intro\">\r\n\t\t\t\t\t<input type=\"text\" class=\"text-input\" value=\"BUDKSDOE23\">\r\n\t\t\t\t\t<span>Название вашего купона</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"coupon-limitation-container\">\r\n\t\t\t\t\t<p>Срок купона:</p>\r\n\t\t\t\t\t<div class=\"radio-container\">\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"radio-1\" id=\"radio-1\" checked>\r\n\t\t\t\t\t\t<label for=\"radio-1\">Выберите этот пункт, если у купона нет окончания срока действия</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"radio-container\">\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"radio-1\" id=\"radio-2\">\r\n\t\t\t\t\t\t<label for=\"radio-2\">Выберите этот пункт, если у купона есть окончания срока действия</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"date-container\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"date-input\" value=\"17.08.2018\">\r\n\t\t\t\t\t\t<button class=\"btn btn--calendar\" type=\"button\"><span class=\"visually-hidden\">календарь</span></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"coupon-add-conditions\">\r\n\t\t\t\t\t<p>Дополнительные условия для купона:</p>\r\n\t\t\t\t\t<div class=\"select-container\">\r\n\t\t\t\t\t\t<div class=\"c-dropdown js-dropdown\">\r\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"time-input-1\" id=\"time-input-1\" class=\"js-dropdown__input time-input\">\r\n\t\t\t\t\t\t\t<span class=\"c-button c-button--dropdown js-dropdown__current\">30 постов</span>\r\n\t\t\t\t\t\t\t<ul class=\"c-dropdown__list\">\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"01\">1 пост</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"02\">2 поста</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"03\">3 поста</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"04\">4 поста</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"05\">5 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"06\">6 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"07\">7 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"08\">8 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"09\">9 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"10\">10 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"11\">11 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"12\">12 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"13\">13 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"14\">14 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"15\">15 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"16\">16 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"17\">17 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"18\">18 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"19\">19 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"20\">20 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"21\">21 пост</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"22\">22 поста</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"23\">23 поста</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"24\">24 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"25\">25 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"26\">26 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"27\">27 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"28\">28 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"29\">29 постов</li>\r\n\t\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"30\">30 постов</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>Вы можете выбрать количество постов при покупке которых купон будет действителен</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<button class=\"btn btn--regular btn--create-coupon\" id=\"createCoupon\" type=\"button\">Создать купон</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"modal-content modal-content--coupon\">\r\n\t\t\t<button class=\"btn btn--modal-close\" type=\"button\">\r\n\t\t\t\t<span class=\"visually-hidden\">закрыть</span>\r\n\t\t\t</button>\r\n\t\t\t<h4>Создать купон на скидку</h4>\r\n\t\t\t<div class=\"coupon-create-intro\">\r\n\t\t\t\t<input type=\"text\" class=\"text-input\" value=\"BUDKSDOE23\">\r\n\t\t\t\t<span>Название вашего купона</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"coupon-limitation-container\">\r\n\t\t\t\t<p>Срок купона:</p>\r\n\t\t\t\t<div class=\"radio-container\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"radio-fsd\" id=\"radio-3\">\r\n\t\t\t\t\t<label for=\"radio-3\">Выберите этот пункт, если у купона нет окончания срока действия</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"radio-container\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"radio-fsd\" id=\"radio-4\">\r\n\t\t\t\t\t<label for=\"radio-4\">Выберите этот пункт, если у купона есть окончания срока действия</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"date-contaner\">\r\n\t\t\t\t\t<input type=\"text\" class=\"date-input\" value=\"17.08.2018\">\r\n\t\t\t\t\t<button class=\"btn btn--calendar\" type=\"button\"><span class=\"visually-hidden\">календарь</span></button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"coupon-add-conditions\">\r\n\t\t\t\t<p>Дополнительные условия для купона:</p>\r\n\t\t\t\t<div class=\"select-container\">\r\n\t\t\t\t\t<div class=\"c-dropdown js-dropdown\">\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"time-input-1\" id=\"time-input-1\" class=\"js-dropdown__input time-input\">\r\n\t\t\t\t\t\t<span class=\"c-button c-button--dropdown js-dropdown__current\">30 постов</span>\r\n\t\t\t\t\t\t<ul class=\"c-dropdown__list\">\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"01\">1 пост</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"02\">2 поста</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"03\">3 поста</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"04\">4 поста</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"05\">5 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"06\">6 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"07\">7 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"08\">8 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"09\">9 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"10\">10 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"11\">11 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"12\">12 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"13\">13 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"14\">14 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"15\">15 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"16\">16 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"17\">17 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"18\">18 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"19\">19 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"20\">20 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"21\">21 пост</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"22\">22 поста</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"23\">23 поста</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"24\">24 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"25\">25 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"26\">26 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"27\">27 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"28\">28 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"29\">29 постов</li>\r\n\t\t\t\t\t\t\t<li class=\"c-dropdown__item\" data-dropdown-value=\"30\">30 постов</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>Вы можете выбрать количество постов при покупке которых купон будет действителен</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn--regular btn--create-coupon\" type=\"button\">Создать купон</button>\r\n\t\t</div>\r\n\t\t<div class=\"tab-content\" id=\"ref-system\">\r\n\t\t\t<p class=\"lg-block-title\">У вас есть <output>0</output> бесплатных дней</p>\r\n\t\t\t<div class=\"white-container white-container--flat-top\">\r\n\t\t\t\t<div class=\"copy-link-container\">\r\n\t\t\t\t\t<input type=\"text\" class=\"text-input text-input--copy-link\" value=\"www.adrpice.ru/res234234\">\r\n\t\t\t\t\t<button class=\"btn btn--regular\">Скопировать ссылку</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"custom-list\">\r\n\t\t\t\t\t<li class=\"custom-list-item\">Реферальная программа с помощью которой вы можете оплачивать услуги сервиса.</li>\r\n\t\t\t\t\t<li class=\"custom-list-item\">Приведите друга по вашей реферальной ссылке и получите 3 дня бесплатного пользования.\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"ref-stat\">\r\n\t\t\t\t\t<h5>Дымченко Сергей - </h5>\r\n\t\t\t\t\t<p>зарегистрировался по вашей реферальной ссылке 28.07.2018.\r\n\t\t\t\t\t\tВам было начислено 3 бесплатных дня\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</main>\r\n\t<aside class=\"aside aside--right tab\">\r\n\t\t<button class=\"tablinks\" [routerLink]=\"['/settings']\" id=\"defaultOpen\">Профиль</button>\r\n\t\t<button class=\"tablinks\" [routerLink]=\"['/settings/domain']\" id=\"defaultOpen\">Веб сайт биржи</button>\r\n\t\t<button class=\"tablinks\" [routerLink]=\"['/settings/action']\">Купоны на скидку</button>\r\n\t\t<a class=\"tablinks\" [routerLink]=\"['/tarifs']\">Тарифный план</a>\r\n\t\t<button class=\"tablinks\" [routerLink]=\"['/settings/referral']\">Реферальная система</button>\r\n\t</aside>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/settingsAction/settingsAction.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsActionModule", function() { return SettingsActionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__ = __webpack_require__("../../../../../src/app/shared/config/theme-constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settingsAction_routing_module__ = __webpack_require__("../../../../../src/app/profile/settingsAction/settingsAction-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settingsAction_component__ = __webpack_require__("../../../../../src/app/profile/settingsAction/settingsAction.component.ts");
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





var SettingsActionModule = (function () {
    function SettingsActionModule() {
    }
    SettingsActionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__settingsAction_routing_module__["a" /* SettingsActionRoutes */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__settingsAction_component__["a" /* SettingsActionComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__["a" /* ThemeConstants */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__shared_inspectors_auth_inspector__["a" /* AuthInterceptor */], multi: true },
            ]
        })
    ], SettingsActionModule);
    return SettingsActionModule;
}());



/***/ })

});
//# sourceMappingURL=settingsAction.module.chunk.js.map