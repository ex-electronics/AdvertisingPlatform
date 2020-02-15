webpackJsonp(["group.module"],{

/***/ "../../../../../src/app/group/group-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_component__ = __webpack_require__("../../../../../src/app/group/group.component.ts");
//Dashboard Components

var GroupRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__group_component__["a" /* GroupComponent */],
        data: {
            title: 'Group'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_serivces_group_service__ = __webpack_require__("../../../../../src/app/shared/serivces/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
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




var GroupComponent = (function () {
    function GroupComponent(groupService, router) {
        this.groupService = groupService;
        this.router = router;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.router.params.subscribe(function (params) {
            // this.pages = [];
            // const page: number = typeof params['page'] !== 'undefined' ? Number(params['page']) : 1;
            // this.currentPage = page;
            // this.postService.getAds(page).then((list) => {
            //     if (list !== null && typeof list.data !== 'undefined') {
            //         this.list = list.data;
            //         for (let i = 0; i < list.pages; i++) {
            //             this.pages.push(i + 1);
            //         }
            //     }
            // });
        });
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var data = [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1),
                desc: 'Meetings',
                bullet: 'success',
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                desc: 'Hangouts',
                bullet: 'success',
            },
            {
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false,
                desc: 'Product Checkup',
                bullet: 'warning',
            },
            {
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false,
                desc: 'Conference',
                bullet: 'danger',
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                desc: 'Gathering',
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                desc: 'Google',
                bullet: 'success',
            },
        ];
        this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month'
            },
            events: data
        };
    };
    GroupComponent.prototype.edit = function (event) {
        event.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng_fullcalendar__["a" /* CalendarComponent */])
    ], GroupComponent.prototype, "ucCalendar", void 0);
    GroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/group/group.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_serivces_group_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/group/group.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div *ngIf=\"calendarOptions\">\r\n                        <ng-fullcalendar #ucCalendar [options]=\"calendarOptions\" (eventClick)=\"eventClick($event.detail)\" (eventDrop)=\"updateEvent($event.detail)\"\r\n                            (eventResize)=\"updateEvent($event.detail)\" (clickButton)=\"clickButton($event.detail)\"></ng-fullcalendar>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal fade\" id=\"calendar-edit\">\r\n                <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"border btm padding-15\">\r\n                            <h4 class=\"no-mrg\">Edit Event</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <form>\r\n                                <div class=\"form-group\">\r\n                                    <label>Event title</label>\r\n                                    <input class=\"form-control\">\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>Start</label>\r\n                                        <div class=\"timepicker-input input-icon form-group\">\r\n                                            <i class=\"ti-calendar\"></i>\r\n                                            <input type=\"text\" class=\"form-control start-date\" placeholder=\"Datepicker\" data-provide=\"datepicker\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>End</label>\r\n                                        <div class=\"timepicker-input input-icon form-group\">\r\n                                            <i class=\"ti-calendar\"></i>\r\n                                            <input type=\"text\" class=\"form-control end-date\" placeholder=\"Datepicker\" data-provide=\"datepicker\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Event title</label>\r\n                                    <textarea class=\"form-control\"></textarea>\r\n                                </div>\r\n                                <div class=\"text-right\">\r\n                                    <button class=\"btn btn-success\" data-dismiss=\"modal\">Done</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/group/group.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModule", function() { return GroupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__ = __webpack_require__("../../../../../src/app/shared/config/theme-constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group_routing_module__ = __webpack_require__("../../../../../src/app/group/group-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_serivces_group_service__ = __webpack_require__("../../../../../src/app/shared/serivces/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__group_component__ = __webpack_require__("../../../../../src/app/group/group.component.ts");
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







// Group Component





var GroupModule = (function () {
    function GroupModule() {
    }
    GroupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__group_routing_module__["a" /* GroupRoutes */]),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_fullcalendar__["b" /* FullCalendarModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__group_component__["a" /* GroupComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_config_theme_constant__["a" /* ThemeConstants */],
                __WEBPACK_IMPORTED_MODULE_5__shared_serivces_group_service__["a" /* GroupService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_11__shared_inspectors_auth_inspector__["a" /* AuthInterceptor */], multi: true },
            ]
        })
    ], GroupModule);
    return GroupModule;
}());



/***/ })

});
//# sourceMappingURL=group.module.chunk.js.map