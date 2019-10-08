(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper default-theme\" >\n  <main>\n    <div class=\"pages container-fluid pt-4 pr-4 \">\n      <router-outlet></router-outlet>\n      <hr>\n    </div>\n  </main>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ATNSrfc';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-password-strength-meter */ "./node_modules/angular-password-strength-meter/fesm5/angular-password-strength-meter.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/registration/registration.component */ "./src/app/pages/registration/registration.component.ts");
/* harmony import */ var _pages_my_rfcs_my_rfcs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/my-rfcs/my-rfcs.component */ "./src/app/pages/my-rfcs/my-rfcs.component.ts");
/* harmony import */ var _pages_current_rfcs_current_rfcs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/current-rfcs/current-rfcs.component */ "./src/app/pages/current-rfcs/current-rfcs.component.ts");
/* harmony import */ var _pages_phase1_phase1_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/phase1/phase1.component */ "./src/app/pages/phase1/phase1.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_rfcsignoff_rfcsignoff_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/rfcsignoff/rfcsignoff.component */ "./src/app/pages/rfcsignoff/rfcsignoff.component.ts");
/* harmony import */ var _pages_phase2_phase2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/phase2/phase2.component */ "./src/app/pages/phase2/phase2.component.ts");
/* harmony import */ var _pages_phase3_phase3_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/phase3/phase3.component */ "./src/app/pages/phase3/phase3.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_route_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guards/route.guard */ "./src/app/guards/route.guard.ts");
/* harmony import */ var _models_app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./models/app-routing.module */ "./src/app/models/app-routing.module.ts");
/* harmony import */ var _services_route_authorisation_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/route-authorisation.service */ "./src/app/services/route-authorisation.service.ts");
/* harmony import */ var _services_ccr_http_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/ccr-http-interceptor */ "./src/app/services/ccr-http-interceptor.ts");
/* harmony import */ var _pages_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/admin-dashboard/admin-dashboard.component */ "./src/app/pages/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ "./src/app/pages/forgot-password/forgot-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/



// imports for bootstrap forms






// ngx imports





// Application components












// Routing guards, module and auth service







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
                _pages_my_rfcs_my_rfcs_component__WEBPACK_IMPORTED_MODULE_19__["MyRFCSComponent"],
                _pages_phase1_phase1_component__WEBPACK_IMPORTED_MODULE_21__["Phase1Component"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _pages_current_rfcs_current_rfcs_component__WEBPACK_IMPORTED_MODULE_20__["CurrentRFCSComponent"],
                _pages_rfcsignoff_rfcsignoff_component__WEBPACK_IMPORTED_MODULE_23__["RFCsignoffComponent"],
                _pages_phase2_phase2_component__WEBPACK_IMPORTED_MODULE_24__["Phase2Component"],
                _pages_phase3_phase3_component__WEBPACK_IMPORTED_MODULE_25__["Phase3Component"],
                _pages_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["AdminDashboardComponent"],
                _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_32__["ForgotPasswordComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SweetAlert2Module"].forRoot(),
                angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_6__["PasswordStrengthMeterModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__["CollapseModule"].forRoot(),
                _models_app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_10__["NgxFileDropModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopoverModule"],
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_12__["SelectDropDownModule"],
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"], _services_route_authorisation_service__WEBPACK_IMPORTED_MODULE_29__["RouteAuthorisationService"], _guards_route_guard__WEBPACK_IMPORTED_MODULE_27__["RouteGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_ccr_http_interceptor__WEBPACK_IMPORTED_MODULE_30__["CcrHttpInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Created by : Liam Gordon McCabe-->\n<!-- Student number: 27455211-->\n<nav class=\"navbar navbar-expand-md fixed-top navbar-dark bg-dark flex-fill\" >\n  <!-- sidebar toggler -->\n  <!-- <button class=\"sidebar-toggler ml-4\" type=\"button\">\n    <i class=\"fa fa-navicon\"></i>\n  </button> -->\n  <div class=\"sidebar-toggler ml-4\">\n    <a class=\"btn nav-link\" (click)=\"toggleSidebar()\"><i class=\"fa fa-navicon\"></i></a>\n  </div>\n  <!-- header -->\n  <div class=\"navbar-header pl-2 pr-2 text-center\">\n    <a class=\"navbar-brand m-0 text-uppercase w-100\" href=\"#\">\n      <!-- <i class=\"fa fa-flash mr-1\"></i> -->\n      <span class=\"ml-1\">ATNS CCR System</span>\n    </a>\n  </div>\n  <!-- left box -->\n  <ul class=\"navbar-nav flex-fill mt-1 align-items-center left-nav\">\n    <li class=\"nav-item navicon\">\n      <a class=\"btn nav-link\" (click)=\"toggleSidebarPin()\"><i class=\"fa fa-navicon\"></i></a>\n    </li>\n<!--    <li class=\"nav-item flex-fill\">-->\n<!--      <input class=\"form-control navbar-search\" type=\"text\" placeholder=\"Search\">-->\n<!--    </li>-->\n  </ul>\n  <!-- right menu toggler -->\n<!--  <div class=\"nav-toggler-right mr-4 d-md-none\">-->\n<!--    <button class=\"\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\">-->\n<!--      &lt;!&ndash; <span class=\"navbar-toggler-icon\"></span> &ndash;&gt;-->\n<!--      <img src=\"../../../assets/images/user.jpg\" class=\"img-fluid\" alt=\"\">-->\n<!--    </button>-->\n<!--    <span class=\"nav-alert bg-danger\"></span>-->\n<!--  </div>-->\n  <!-- right menu -->\n  <div class=\"collapse navbar-collapse right-nav\" id=\"collapseBasic\" [collapse]=\"isCollapsed\">\n    <ul class=\"navbar-nav \">\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link\">\n          <i class=\"fa fa-bell-o\"></i>\n          <span class=\"link-text\">Alerts</span>\n          <!-- <span class=\"badge badge-pill ba dge-danger\">3</span> -->\n          <span class=\"nav-alert bg-danger\"></span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link\">\n          <i class=\"fa fa-envelope-o\"></i>\n          <span class=\"link-text\">Messages</span>\n          <!-- <span class=\"badge badge-pill badge-success\">5</span> -->\n          <span class=\"nav-alert bg-success\"></span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link\">\n          <i class=\"fa fa-user-o\"></i>\n          <span class=\"link-text\">Profile</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"btn nav-link\">\n          <i class=\"fa fa-gears\"></i>\n          <span class=\"link-text\">Setting</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(appService) {
        this.appService = appService;
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleSidebarPin = function () {
        this.appService.toggleSidebarPin();
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        this.appService.toggleSidebar();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Created by : Liam Gordon McCabe-->\r\n<!-- Student number: 27455211-->\r\n<aside class=\"sidebar shadow\">\r\n  <div class=\"sidebar-profile d-flex flex-column justify-content-center pt-5 pb-3\">\r\n<!--    <div class=\"picture-wrapper mb-3\">-->\r\n<!--      <div class=\"logo-container m-auto\">-->\r\n<!--        <img src=\"../../../assets/images/atns_logo.png\" class=\"img-fluid\" alt=\"\">-->\r\n<!--      </div>-->\r\n<!--    </div>-->\r\n    <div class=\"profile-details text-center pb-4\">\r\n      <p class=\"mb-0 text-uppercase name\">{{this.username}}</p>\r\n      <small class=\"text-uppercase role\">{{this.roles}}</small>\r\n    </div>\r\n  </div>\r\n  <nav class=\"sidebar-menu pt-3 pb-3\">\r\n    <ul>\r\n      <li class=\"active\">\r\n        <a  routerLink=\"/home/createRFC\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-plus-circle \"></i>\r\n          <span>Initiate CCR</span>\r\n          <span class=\"badge badge-danger rounded-0 ml-auto text-light\">New</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <a  routerLink=\"/home/myRFCS\" routerLinkActive=\"active\" >\r\n          <i class=\"fa fa-list\"></i>\r\n          <span>My CCR'S</span>\r\n        </a>\r\n      </li>\r\n        <!--<a href=\"#\" routerLink=\"/maps\">-->\r\n          <!--<i class=\"fa fa-globe\"></i>-->\r\n          <!--<span>Maps</span>-->\r\n        <!--</a>-->\r\n      <!--</li>-->\r\n      <!--<li>-->\r\n        <!--<a href=\"#\" routerLink=\"/notifications\">-->\r\n          <!--<i class=\"fa fa-bell-o\"></i>-->\r\n          <!--<span>Notifications</span>-->\r\n        <!--</a>-->\r\n      <!--</li>-->\r\n    </ul>\r\n  </nav>\r\n  <nav class=\"sidebar-menu pt-3 pb-3\">\r\n    <ul>\r\n      <li class=\"active\">\r\n        <a  routerLink=\"/home/currentrfcs\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-eye\"></i>\r\n          <span>CCR's Dashboard</span>\r\n          <!--<span class=\"badge badge-danger rounded-0 ml-auto text-light\">New</span>-->\r\n        </a>\r\n      </li>\r\n<!--      <li class=\"active\">-->\r\n<!--        <a  routerLink=\"/home/rfcsignoff\" routerLinkActive=\"active\">-->\r\n<!--          <i class=\"fa fa-leaf\"></i>-->\r\n<!--          <span>CCR Sign Off</span>-->\r\n<!--        </a>-->\r\n<!--      </li>-->\r\n      <li class=\"active\">\r\n        <a routerLink=\"/home/adminDashboard\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-diamond\"></i>\r\n          <span>Admin Dashboard</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(cookieService) {
        this.cookieService = cookieService;
        this.roles = '';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var jwt = this.cookieService.get('jwt');
        var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(jwt);
        this.username = decodedToken.data.username;
        if (decodedToken.data.roles.length === 0) {
            this.roles = decodedToken.data.roles;
        }
        else {
            for (var i = 0; i < decodedToken.data.roles.length; i++) {
                if (i === decodedToken.data.roles.length - 1) {
                    this.roles += decodedToken.data.roles[i];
                }
                else {
                    this.roles += decodedToken.data.roles[i] + '/';
                }
            }
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_oath_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/oath.service */ "./src/app/services/oath.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/





var AuthGuard = /** @class */ (function () {
    function AuthGuard(oath, router, user) {
        this.oath = oath;
        this.router = router;
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.oath.isLoggedIn) {
            return true;
        }
        return this.user.isLoggedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.status) {
                _this.oath.setLoggedIn(true);
                return true;
            }
            else {
                _this.router.navigate(['login']);
                return false;
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_oath_service__WEBPACK_IMPORTED_MODULE_2__["OathService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/route.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/route.guard.ts ***!
  \***************************************/
/*! exports provided: RouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuard", function() { return RouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_route_authorisation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/route-authorisation.service */ "./src/app/services/route-authorisation.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/



var RouteGuard = /** @class */ (function () {
    function RouteGuard(routeAuthorisationService) {
        this.routeAuthorisationService = routeAuthorisationService;
    }
    RouteGuard.prototype.canActivate = function (next, state) {
        var allowedRoles = next.data.allowedRoles;
        var isAuthorized = this.routeAuthorisationService.isAuthorized(allowedRoles);
        if (!isAuthorized) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Unauthorised', 'Please contact your administrator', 'error');
        }
        return isAuthorized;
    };
    RouteGuard.prototype.canActivateChild = function (childRoute, state) {
        var allowedPermission = childRoute.data.allowedPermission;
        var isAuthorized = this.routeAuthorisationService.isAuthorized(allowedPermission);
        if (!isAuthorized) {
            // if not authorized, show access denied message
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Unauthorised', 'Please contact your administrator', 'error');
        }
        return isAuthorized;
    };
    RouteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_route_authorisation_service__WEBPACK_IMPORTED_MODULE_1__["RouteAuthorisationService"]])
    ], RouteGuard);
    return RouteGuard;
}());



/***/ }),

/***/ "./src/app/models/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/models/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/registration/registration.component */ "./src/app/pages/registration/registration.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_my_rfcs_my_rfcs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/my-rfcs/my-rfcs.component */ "./src/app/pages/my-rfcs/my-rfcs.component.ts");
/* harmony import */ var _pages_phase1_phase1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/phase1/phase1.component */ "./src/app/pages/phase1/phase1.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_current_rfcs_current_rfcs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/current-rfcs/current-rfcs.component */ "./src/app/pages/current-rfcs/current-rfcs.component.ts");
/* harmony import */ var _pages_rfcsignoff_rfcsignoff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/rfcsignoff/rfcsignoff.component */ "./src/app/pages/rfcsignoff/rfcsignoff.component.ts");
/* harmony import */ var _pages_phase2_phase2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/phase2/phase2.component */ "./src/app/pages/phase2/phase2.component.ts");
/* harmony import */ var _guards_route_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../guards/route.guard */ "./src/app/guards/route.guard.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_phase3_phase3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/phase3/phase3.component */ "./src/app/pages/phase3/phase3.component.ts");
/* harmony import */ var _pages_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/admin-dashboard/admin-dashboard.component */ "./src/app/pages/admin-dashboard/admin-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/














var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
    { path: 'phase1', component: _pages_phase2_phase2_component__WEBPACK_IMPORTED_MODULE_9__["Phase2Component"] },
    { path: 'phase3', component: _pages_phase3_phase3_component__WEBPACK_IMPORTED_MODULE_12__["Phase3Component"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        canActivateChild: [_guards_route_guard__WEBPACK_IMPORTED_MODULE_10__["RouteGuard"]],
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'createRFC', component: _pages_phase1_phase1_component__WEBPACK_IMPORTED_MODULE_5__["Phase1Component"], data: { allowedPermission: '1' }, runGuardsAndResolvers: 'always' },
            { path: 'myRFCS', component: _pages_my_rfcs_my_rfcs_component__WEBPACK_IMPORTED_MODULE_4__["MyRFCSComponent"], data: { allowedPermission: '2' }, runGuardsAndResolvers: 'always' },
            { path: 'rfcsignoff', component: _pages_rfcsignoff_rfcsignoff_component__WEBPACK_IMPORTED_MODULE_8__["RFCsignoffComponent"], data: { allowedPermission: '4' }, runGuardsAndResolvers: 'always' },
            { path: 'currentrfcs', component: _pages_current_rfcs_current_rfcs_component__WEBPACK_IMPORTED_MODULE_7__["CurrentRFCSComponent"], data: { allowedPermission: '3' }, runGuardsAndResolvers: 'always',
                children: [
                    { path: 'phase2', component: _pages_phase2_phase2_component__WEBPACK_IMPORTED_MODULE_9__["Phase2Component"], data: { allowedPermission: '4' }, runGuardsAndResolvers: 'always' },
                    { path: 'phase3', component: _pages_phase3_phase3_component__WEBPACK_IMPORTED_MODULE_12__["Phase3Component"], data: { allowedPermission: '5' }, runGuardsAndResolvers: 'always' },
                ] },
            // change permission level for admin dashboard to higher security level
            { path: 'adminDashboard', component: _pages_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["AdminDashboardComponent"], data: { allowedPermission: '5' }, runGuardsAndResolvers: 'always' }
        ] },
    { path: '**', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'phase3', component: _pages_phase3_phase3_component__WEBPACK_IMPORTED_MODULE_12__["Phase3Component"] },
    { path: 'CurrentRFCsComponent', component: _pages_current_rfcs_current_rfcs_component__WEBPACK_IMPORTED_MODULE_7__["CurrentRFCSComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/admin-dashboard/admin-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin-dashboard/admin-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin-dashboard/admin-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-dashboard/admin-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Created By Blaine Viljoen-->\r\n<div *ngIf=\"!this.showSpecialist && !this.edit && !this.displayCCR && !this.showEditDocs\">\r\n    <button class=\"btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" (click)=\"this.redirectSQL()\">Run SQL</button>\r\n</div><br>\r\n  <div class=\"row\" *ngIf=\"!this.showSpecialist && !this.edit && !this.displayCCR && !this.showEditDocs\" >\r\n      <div class=\"col mb-4\">\r\n          <h2 class=\"px-3 text-secondary\">Initiated requests:</h2><br>\r\n          <div *ngFor=\"let rfc of initiatedRFC; index as i\">\r\n              <div class=\"card h-10\" style=\"height: 28vh\">\r\n                  <div class=\"card-body\">\r\n                      <h2 class=\"px-3 pt-1 text-primary card-title\" style=\"cursor: pointer;\" (click)=\"this.showCCR(i)\">CCR ID: {{rfc.ID}}</h2>\r\n                      <p class=\"card-text\"> Request: {{rfc.requested_change}}</p>\r\n                      <p class=\"card-text\"> Reason: {{rfc.description}}</p>\r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                      <button class=\"mx-3 mt-1 btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" id=\"reassignSpec\" (click)=\"revealSpecialist(i)\">Reassign Specialist</button>\r\n                      <button class=\"mx-3 mt-1 btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" id=\"editCCR\" (click)=\"this.editCCR(i, 'Phase1')\">Edit CCR</button>\r\n                  </div>\r\n              </div> <br>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n          <h2 class=\"px-3 text-secondary\">CCR's in Phase 2:</h2><br>\r\n          <div *ngFor=\"let rfc of phase2RFCs; index as i\">\r\n              <div class=\"card h-10\" *ngIf=\"this.phase2RFCs[i].ID === -1\" style=\"height: 28vh\">\r\n                  <div class=\"card-body\">\r\n                      <h2 class=\"px-3 pt-1 text-primary card-title\" style=\"cursor: pointer;\" (click)=\"this.showCCR(i)\">CCR ID: {{rfc.ID}}</h2>\r\n                      <p class=\"card-text\"> Phase 2 not yet processed</p>\r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"card h-10\" *ngIf=\"this.phase2RFCs[i].ID !== -1\" style=\"height: 28vh\">\r\n                  <div class=\"card-body\">\r\n                      <h2 class=\"px-3 pt-1 text-primary card-title\" style=\"cursor: pointer;\" (click)=\"this.showCCR(i)\">CCR ID: {{rfc.ID}}</h2>\r\n                      <p class=\"card-text\"> Phase 1 ID: {{rfc.phase1_ID}}</p>\r\n                      <p class=\"card-text\"> Specialist ID: {{rfc.spec_ID}}</p>\r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                      <button class=\"mx-3 mt-1 btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" (click)=\"revealSpecialist(this.phase2RFCs[i])\">Reassign Specialist</button>\r\n                      <button class=\"mx-3 mt-1 btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" (click)=\"this.editCCR(i, 'Phase2')\">Edit CCR</button>\r\n                      <button class=\"mx-3 mt-1 btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" (click)=\"this.editDocs(i)\">Edit Documents</button>\r\n                  </div>\r\n              </div> <br>\r\n\r\n          </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-sm-4\">\r\n          <h2 class=\"px-3 text-secondary\">CCR's in Phase 3:</h2><br>\r\n          <div *ngFor=\"let rfc of this.phase3RFCS; index as i\">\r\n              <div class=\"card h-10\" *ngIf=\"this.phase3RFCS[i].ID === -1\" style=\"height: 28vh\">\r\n                  <div class=\"card-body\">\r\n                      <h2 class=\"px-3 pt-1 text-primary card-title\" style=\"cursor: pointer;\" (click)=\"this.showCCR(i)\">CCR ID: {{rfc.ID}}</h2>\r\n                      <p class=\"card-text\"> Phase 3 has not yet been processed</p>\r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"card h-10\" *ngIf=\"this.phase3RFCS[i].ID !== -1\" style=\"height: 28vh\">\r\n                  <div class=\"card-body\">\r\n                      <h2 class=\"px-3 pt-1 text-primary card-title\" style=\"cursor: pointer;\" (click)=\"this.showCCR(i)\">CCR ID: {{rfc.ID}}</h2>\r\n                      <p class=\"card-text\"> CCR_ID: {{rfc.CCR_ID}}</p>\r\n                  </div>\r\n                  <div class=\"card-footer\">\r\n                      <button class=\"mx-3 mt-1 btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" (click)=\"revealSpecialist(i)\">Reassign Specialist</button>\r\n                      <button class=\"mx-3 mt-1 btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" (click)=\"this.editCCR(i, 'Phase3')\">Edit CCR</button>\r\n                      <button class=\"mx-3 mt-1 btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" (click)=\"this.editDocs(i)\">Edit Documents</button>\r\n                  </div>\r\n              </div> <br>\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n<div class=\"shadow card bg-light mx-auto\" *ngIf=\"this.displayCCR\">\r\n    <h1 class=\"px-3 text-primary\">CCR:</h1>\r\n    <div class=\"card-body\">\r\n        <h2 class=\"px-3 text-secondary\">Phase 1: </h2><br>\r\n        <p class=\"px-3\">\r\n            ID: {{this.initiatedRFC[this.selectedIndex].ID}}<br>\r\n            User: {{this.selectedUser}}<br>\r\n            Request: {{this.initiatedRFC[this.selectedIndex].requested_change}}<br>\r\n            Description: {{this.initiatedRFC[this.selectedIndex].description}}<br>\r\n            Start Time: {{this.initiatedRFC[this.selectedIndex].start_time}}<br>\r\n        </p><br>\r\n        <h2 class=\"px-3 text-secondary\" *ngIf=\"this.phase2RFCs[this.selectedIndex].ID !== -1\">Phase 2:</h2>\r\n        <p class=\"px-3\" *ngIf=\"this.phase2RFCs[this.selectedIndex].ID !== -1\">\r\n            Phase 2 ID: {{this.phase2RFCs[this.selectedIndex].ID}}<br>\r\n            Specialist: {{this.specialist}}<br>\r\n            EOS: {{this.selectedEOS}}<br>\r\n            TCB ID: {{this.phase2RFCs[this.selectedIndex].tcb_crf_ID}}<br>\r\n            Request Priority: {{this.selectedPriority}}<br>\r\n            Change Period: {{this.selectedPeriod}}<br>\r\n            Impact on: {{this.selectedRisk}}<br>\r\n            Nature of Change: {{this.selectedChange}}<br>\r\n            Start Date: {{this.phase2RFCs[this.selectedIndex].startDate}}<br>\r\n            Temporary Start Date: {{this.temporaryStartDate}}<br>\r\n            Temporary End Date: {{this.temporaryEndDate}}<br>\r\n            Change on Hardware: {{this.changeHW}}<br>\r\n            Change on Software: {{this.changeSW}}<br>\r\n            Change on Firmware: {{this.changeFW}}<br>\r\n            Configuration description: {{this.phase2RFCs[this.selectedIndex].configurationDescr}}<br>\r\n            Impact on Operations: {{this.impactOps}}<br>\r\n            Impact on Clients: {{this.impactCli}}<br>\r\n            Impact on Tech: {{this.impactTech}}<br>\r\n            Report Raised with Contractor: {{this.reportRaised}}<br>\r\n            Pre-Test Success: {{this.preTest}}<br>\r\n            Reason unsuccessful: {{this.reasonUnsucc}}<br>\r\n            Specialist Comments: {{this.specialistComm}}<br>\r\n            Proposed Implementation Date: {{this.phase2RFCs[this.selectedIndex].proposed_implementation_date}}\r\n        </p><br>\r\n        <h2 class=\"px-3 text-secondary\" *ngIf=\"this.phase3RFCS[this.selectedIndex].ID !== -1\">Phase 3:</h2>\r\n        <p class=\"px-3\" *ngIf=\"this.phase3RFCS[this.selectedIndex].ID !== -1\">\r\n           <label>ID: {{this.phase3RFCS[this.selectedIndex].ID}}</label><br>\r\n            <label>CCR ID: {{this.phase3RFCS[this.selectedIndex].CCR_ID}}</label><br>\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].implementation_successful === '1'\">Implementation: Successful</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].implementation_successful === '1'\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].implementation_successful === '1'\">TCB Start Date: {{this.phase3RFCS[this.selectedIndex].start_tcb_evaluation_date}}</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].implementation_successful === '1'\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].implementation_successful === '1'\">TCB Start Date: {{this.phase3RFCS[this.selectedIndex].end_tcb_evaluation_date}}</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].implementation_successful === '1'\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].implementation_successful === '0'\">Implementation: Unsuccessful</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].implementation_successful === '0'\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].aborted_regressed !== null\">Status: {{this.phase3RFCS[this.selectedIndex].aborted_regressed}}</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].aborted_regressed !== null\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].regression_scheduled === '1'\">Regression scheduled date: {{this.phase3RFCS[this.selectedIndex].scheduled_regression_date}}</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].regression_scheduled === '1'\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '1'\">Evaluation Status: Success</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '1'\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '1' && this.phase3RFCS[this.selectedIndex].close_out_confirmed === '1'\">Confirmed/Rejected: Confirmed</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '1' && this.phase3RFCS[this.selectedIndex].close_out_confirmed === '1'\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '1' && this.phase3RFCS[this.selectedIndex].close_out_confirmed === '0'\">Confirmed/Rejected: Rejected</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '1' && this.phase3RFCS[this.selectedIndex].close_out_confirmed === '0'\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '0' && this.phase3RFCS[this.selectedIndex].aborted_regressed === null\">Evaluation Status: Failed</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '0' && this.phase3RFCS[this.selectedIndex].aborted_regressed === null\">\r\n            <label *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '0' && this.phase3RFCS[this.selectedIndex].aborted_regressed === null\">Reason: {{this.phase3RFCS[this.selectedIndex].evaluation_failure_reason}}</label><br *ngIf=\"this.phase3RFCS[this.selectedIndex].evaluation_success === '0' && this.phase3RFCS[this.selectedIndex].aborted_regressed === null\">\r\n        </p>\r\n        <button class=\"btn btn-outline-info btn-rounded w-40 waves-effect z-depth-0\" (click)=\"this.hideCCR()\">Back</button>\r\n    </div>\r\n</div>\r\n\r\n    <div *ngIf=\"this.showSpecialist\">\r\n        <div class=\"shadow card bg-light mx-auto\">\r\n            <div class=\"card-body\">\r\n                <h2 class=\"px-3 pt-1 text-primary card-title\">Select the new specialist</h2>\r\n                <select class=\"px-3 pt-2 card-text rounded w-100 form-control\" name=\"selectedSpecialist\" id=\"selectedSpecialist\" (click)=\"this.selectedSpecialist($event)\"\r\n                >\r\n                    <option *ngFor=\"let specialist of this.specialists, index as i\" value=\"{{specialist[0]}}\">{{specialist[2]}} ({{specialist[1]}})</option>\r\n                </select><br>\r\n\r\n                <button class=\"btn btn-outline-info btn-rounded w-40  waves-effect z-depth-0\" (click)=\"this.setSpecialist()\">Reassign Specialist</button><button class=\"ml-2 btn btn-outline-info btn-rounded w-40 waves-effect z-depth-0\" (click)=\"this.hideSpecialist()\">Back</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n<div class=\"form-group\" *ngIf=\"this.edit\" style=\"background-color: #ffffff;\">\r\n    <app-create-rfcs *ngIf=\"this.selectedPhase === 'Phase1'\"></app-create-rfcs><br>\r\n    <app-phase2 *ngIf=\"this.selectedPhase === 'Phase2'\"></app-phase2><br>\r\n    <app-phase3 *ngIf=\"this.selectedPhase === 'Phase3'\"></app-phase3><br>\r\n    <button *ngIf=\"this.edit\" class=\"mb-2 ml-2 btn btn-outline-info btn-rounded w-40 waves-effect z-depth-0\" (click)=\"this.back()\">Back</button><br>\r\n</div>\r\n\r\n<div class=\"form-group\" *ngIf=\"this.showEditDocs\">\r\n    <h2>Phase 2 Documents:</h2><br>\r\n    <h3>Upload explanation documents to system:</h3><br>\r\n    <div class=\"px-3\">\r\n        <ngx-file-drop multiple=\"true\" dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event, '2')\"\r\n                       (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n            <ng-template  ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n                Please drag and drop your additional files here\r\n                <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n            </ng-template>\r\n        </ngx-file-drop>\r\n        <div class=\"upload-table px-3\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Name:</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody class=\"upload-name-style\">\r\n                <tr *ngFor=\"let item of phase2Upload, index as i\">\r\n                    <td><strong>{{ item.name }}</strong></td>\r\n                    <td class=\"px-3\" (click)=\"removeFile(i, '2')\" style=\"cursor: pointer;\">&#10005;</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n            <button class=\"px-3 btn btn-outline-primary btn-rounded w-40 waves-effect z-depth-0\" [disabled]=\"this.phase2Upload.length === -1\" (click)=\"this.upload('2')\">Upload</button><br>\r\n        </div>\r\n    </div><br>\r\n    <h3>Files already on system:</h3>\r\n    <label *ngIf=\"this.phase2Docs.length === -1\">None</label><br>\r\n    <div *ngFor=\"let doc of phase2Docs, index as i\">\r\n        <a class=\"px-3 text-primary\" (click)=\"this.openLink(i, '2')\" style=\"cursor: pointer\">{{doc.document_name}}</a><button (click)=\"this.deleteDoc(i, '2')\" class=\"px-3 btn btn-outline-danger btn-rounded w-40  my-4 waves-effect z-depth-0\">Delete Document</button>\r\n    </div><br>\r\n    <h2>Phase 3 Documents:</h2><br>\r\n    <h3>Upload documents to system:</h3><br>\r\n    <div class=\"px-3\">\r\n        <ngx-file-drop multiple=\"true\" dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event, '3')\"\r\n                       (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n            <ng-template  ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n                Please drag and drop your additional files here\r\n                <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n            </ng-template>\r\n        </ngx-file-drop>\r\n        <div class=\"upload-table px-3\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Name:</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody class=\"upload-name-style\">\r\n                <tr *ngFor=\"let item of phase3Upload, index as i\">\r\n                    <td><strong>{{ item.name }}</strong></td>\r\n                    <td class=\"px-3\" (click)=\"removeFile(i, '3')\" style=\"cursor: pointer;\">&#10005;</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n            <button class=\"px-3 btn btn-outline-primary btn-rounded w-40 waves-effect z-depth-0\" [disabled]=\"this.phase3Upload.length === -1\" (click)=\"this.upload('3')\">Upload</button><br>\r\n        </div>\r\n    </div><br>\r\n    <h3>Files already on system:</h3>\r\n    <label *ngIf=\"this.phase3Docs.length === -1\">None</label><br>\r\n    <div *ngFor=\"let doc of phase3Docs, index as i\">\r\n        <a class=\"px-3 text-primary\" (click)=\"this.openLink(i, '3')\" style=\"cursor: pointer\">{{doc.document_name}}</a><button (click)=\"this.deleteDoc(i, '3')\" class=\"px-3 btn btn-outline-danger btn-rounded w-40  my-4 waves-effect z-depth-0\">Delete Document</button>\r\n    </div><br>\r\n    <button class=\"px-3 mb-2 ml-2 btn btn-outline-info btn-rounded w-40 waves-effect z-depth-0\" (click)=\"this.hideDocs()\">Back</button>\r\n</div>\r\n\r\n\r\n<!--Created By Blaine Viljoen-->\r\n"

/***/ }),

/***/ "./src/app/pages/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_adminDashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/adminDashboard.service */ "./src/app/services/adminDashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_phase1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/phase1.service */ "./src/app/services/phase1.service.ts");
/* harmony import */ var _services_phase2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/phase2.service */ "./src/app/services/phase2.service.ts");
/* harmony import */ var _services_phase3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/phase3.service */ "./src/app/services/phase3.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(adminDashboardService, router, phase1, phase2, phase3) {
        this.adminDashboardService = adminDashboardService;
        this.router = router;
        this.phase1 = phase1;
        this.phase2 = phase2;
        this.phase3 = phase3;
        this.selectedIndex = 0;
        this.initiatedRFC = [];
        this.phase2RFCs = [];
        this.phase3RFCS = [];
        this.sites = [];
        this.users = [];
        this.impactRisks = [];
        this.eos = [];
        this.priority = [];
        this.changePeriods = [];
        this.natureChange = [];
        this.phase2Docs = [];
        this.phase3Docs = [];
        this.displayCCR = false;
        this.phase2Upload = [];
        this.phase3Upload = [];
        this.showSpecialist = false;
        this.showEditDocs = false;
        this.edit = false;
        this.selectedPhase = '';
        this.temporaryEndDate = 'none';
        this.changeHW = 'none';
        this.changeSW = 'none';
        this.changeFW = 'none';
        this.impactOps = 'none';
        this.impactCli = 'none';
        this.impactTech = 'none';
        this.reasonUnsucc = 'none';
        this.reportRaised = 'No';
        this.preTest = 'No';
        this.specialists = ['Liam McCabe'];
        this.specialist = '';
        this.specialistComm = 'none';
    }
    AdminDashboardComponent.prototype.redirectSQL = function () {
        var url = 'http://localhost/phpmyadmin/db_sql.php?db=test';
        window.open(url, '_blank');
    };
    AdminDashboardComponent.prototype.fileOver = function (event) {
    };
    AdminDashboardComponent.prototype.fileLeave = function (event) {
    };
    AdminDashboardComponent.prototype.removeFile = function (index, phase) {
        if (phase === '2') {
            this.phase2Upload.splice(index, 1);
        }
        else {
            this.phase3Upload.splice(index, 1);
        }
    };
    AdminDashboardComponent.prototype.dropped = function (files, phase) {
        var _this = this;
        var filesNgx = [];
        filesNgx.push(files);
        if (phase === '2') {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var droppedFile = files_1[_i];
                // Is it a file?
                if (droppedFile.fileEntry.isFile) {
                    var fileEntry = droppedFile.fileEntry;
                    fileEntry.file(function (file) {
                        _this.phase2Upload.push(file);
                    });
                }
                else {
                    // It was a directory (empty directories are added, otherwise only files)
                    var fileEntry = droppedFile.fileEntry;
                }
            }
        }
        else {
            for (var _a = 0, files_2 = files; _a < files_2.length; _a++) {
                var droppedFile = files_2[_a];
                // Is it a file?
                if (droppedFile.fileEntry.isFile) {
                    var fileEntry = droppedFile.fileEntry;
                    fileEntry.file(function (file) {
                        _this.phase3Upload.push(file);
                    });
                }
                else {
                    // It was a directory (empty directories are added, otherwise only files)
                    var fileEntry = droppedFile.fileEntry;
                }
            }
        }
    };
    AdminDashboardComponent.prototype.showCCR = function (index) {
        this.displayCCR = true;
        this.selectedIndex = index;
        this.specialist = '';
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].ID === this.initiatedRFC[index].user_ID) {
                this.selectedUser = this.users[i].name;
            }
        }
        if (this.phase2RFCs[index].ID !== -1) {
            if (this.phase2RFCs[index].temporaryStartDate !== null) {
                this.temporaryStartDate = this.phase2RFCs[index].temporaryStartDate;
            }
            if (this.phase2RFCs[index].preTestSuccess !== '0') {
                this.preTest = 'Yes';
            }
            if (this.phase2RFCs[index].reportRaisedContractor !== '0') {
                this.reportRaised = 'Yes';
            }
            if (this.phase2RFCs[index].temporaryEndDate !== null) {
                this.temporaryEndDate = this.phase2RFCs[index].temporaryEndDate;
            }
            if (this.phase2RFCs[index].changeTypeHW !== '0') {
                this.changeHW = 'Yes';
            }
            if (this.phase2RFCs[index].changeTypeSW !== '0') {
                this.changeSW = 'Yes';
            }
            if (this.phase2RFCs[index].changeTypeFW !== '0') {
                this.changeFW = 'Yes';
            }
            if (this.phase2RFCs[index].impactOnOperations !== null) {
                this.impactOps = this.phase2RFCs[index].impactOnOperations;
            }
            if (this.phase2RFCs[index].impactOnClients !== null) {
                this.impactCli = this.phase2RFCs[index].impactOnClients;
            }
            if (this.phase2RFCs[index].impactonTech !== null) {
                this.impactTech = this.phase2RFCs[index].impactonTech;
            }
            if (this.phase2RFCs[index].reasonUnsuccesTest !== null) {
                this.reasonUnsucc = this.phase2RFCs[index].reasonUnsuccesTest;
            }
            if (this.phase2RFCs[index].specialist_comment !== null) {
                this.specialistComm = this.phase2RFCs[index].specialist_comment;
            }
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].ID === this.phase2RFCs[index].spec_ID) {
                    this.specialist = this.users[i].name;
                }
            }
            for (var i = 0; i < this.eos.length; i++) {
                if (this.eos[i].ID === this.phase2RFCs[index].eos_ID) {
                    this.selectedEOS = this.eos[i].description;
                }
            }
            for (var i = 0; i < this.priority.length; i++) {
                if (this.priority[i].ID === this.phase2RFCs[index].requestPriority_ID) {
                    this.selectedPriority = this.priority[i].text;
                }
            }
            for (var i = 0; i < this.changePeriods.length; i++) {
                if (this.changePeriods[i].ID === this.phase2RFCs[index].changePeriod_ID) {
                    this.selectedPeriod = this.changePeriods[i].text;
                }
            }
            for (var i = 0; i < this.impactRisks.length; i++) {
                if (this.impactRisks[i].ID === this.phase2RFCs[index].impactRisks_ID) {
                    this.selectedRisk = this.impactRisks[i].text;
                }
            }
            for (var i = 0; i < this.natureChange.length; i++) {
                if (this.natureChange[i].ID === this.phase2RFCs[index].natureChange_ID) {
                    this.selectedChange = this.natureChange[i].text;
                }
            }
        }
        if (this.phase3RFCS[index].ID !== -1) {
        }
    };
    AdminDashboardComponent.prototype.openLink = function (index, phase) {
        var url = '';
        if (phase === '2') {
            url = 'http://localhost/ATNSCCR_PHP/backend/api2/uploads/' + this.phase2Docs[index].link;
        }
        else {
            url = 'http://localhost/ATNSCCR_PHP/backend/api2/uploads/' + this.phase3Docs[index].link;
        }
        window.open(url, '_blank');
    };
    AdminDashboardComponent.prototype.editDocs = function (index) {
        var _this = this;
        if (this.phase2RFCs[index].ID !== -1) {
            this.adminDashboardService.getPhase2Docs(this.phase2RFCs[index].ID).toPromise().then((function (data) {
                if (data !== null) {
                    _this.phase2Docs = data[0];
                }
            }));
        }
        if (this.phase3RFCS[index].ID !== -1) {
            this.adminDashboardService.getPhase3Docs(this.phase3RFCS[index].ID).toPromise().then(function (data) {
                if (data !== null) {
                    _this.phase3Docs = data[0];
                }
            });
        }
        this.showEditDocs = true;
        this.selectedIndex = index;
    };
    AdminDashboardComponent.prototype.deleteDoc = function (index, phase) {
        var _this = this;
        if (phase === '2') {
            var obj = { deleteSelection: 'phase2', document: this.phase2Docs[index] };
            this.adminDashboardService.deleteDoc(obj).toPromise().then(function (data) {
                if (data.success) {
                    _this.phase2Docs.splice(index, 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Deleted',
                        text: 'Your file has been deleted',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Error',
                        text: 'There was a problem deleting your file',
                        type: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
            this.adminDashboardService.getPhase2Docs(this.phase2RFCs[index].ID).toPromise().then((function (data) {
                if (data !== null) {
                    _this.phase2Docs = data[0];
                }
            }));
        }
        else {
            var obj = { deleteSelection: 'phase3', document: this.phase3Docs[index] };
            this.adminDashboardService.deleteDoc(obj).toPromise().then(function (data) {
                if (data.success) {
                    _this.phase3Docs.splice(index, 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Deleted',
                        text: 'Your file has been deleted',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Error',
                        text: 'There was a problem deleting your file',
                        type: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
            this.adminDashboardService.getPhase3Docs(this.phase3RFCS[index].ID).toPromise().then(function (data) {
                if (data !== null) {
                    _this.phase3Docs = data[0];
                }
            });
        }
    };
    AdminDashboardComponent.prototype.upload = function (phase) {
        var _this = this;
        if (phase === '2') {
            var formData = new FormData();
            for (var i = 0; i < this.phase2Upload.length; i++) {
                formData.append('file[]', this.phase2Upload[i], this.phase2Upload[i].name);
            }
            formData.append('passedID', this.phase2RFCs[this.selectedIndex].ID);
            this.phase2.upload(formData).subscribe(function (check) {
                if (check.success) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Received',
                        text: 'Your files have been received',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.adminDashboardService.getPhase2Docs(_this.phase2RFCs[_this.selectedIndex].ID).toPromise().then((function (data) {
                        if (data !== null) {
                            _this.phase2Docs = data[0];
                        }
                    }));
                    _this.phase2Upload = [];
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Files not uploaded',
                        text: check.message,
                        type: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        }
        else {
            var formData = new FormData();
            for (var i = 0; i < this.phase3Upload.length; i++) {
                formData.append('file[]', this.phase3Upload[i], this.phase3Upload[i].name);
            }
            formData.append('passedID', this.phase3RFCS[this.selectedIndex].ID);
            this.phase3.upload(formData).subscribe(function (data1) {
                if (data1.success) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Received',
                        text: 'Your files have been received',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.adminDashboardService.getPhase3Docs(_this.phase3RFCS[_this.selectedIndex].ID).toPromise().then(function (data) {
                        if (data !== null) {
                            _this.phase3Docs = data[0];
                        }
                    });
                    _this.phase3Upload = [];
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Files not uploaded',
                        text: data1.message,
                        type: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        }
    };
    AdminDashboardComponent.prototype.hideDocs = function () {
        this.showEditDocs = false;
        this.phase3Upload = [];
        this.phase2Upload = [];
    };
    AdminDashboardComponent.prototype.hideCCR = function () {
        this.displayCCR = false;
    };
    AdminDashboardComponent.prototype.selectedSpecialist = function (event) {
        this.specialist = event.target.value;
    };
    AdminDashboardComponent.prototype.revealSpecialist = function (i) {
        if (this.phase2RFCs[i].ID !== -1) {
            this.showSpecialist = true;
            this.selectedCCR = this.phase2RFCs[i].ID;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Failure', 'A specialist has not yet processed this CCR', 'error');
        }
    };
    AdminDashboardComponent.prototype.hideSpecialist = function () {
        this.showSpecialist = false;
    };
    AdminDashboardComponent.prototype.setSpecialist = function () {
        this.showSpecialist = false;
        this.adminDashboardService.setNewSpecialist(this.selectedCCR, this.specialist).subscribe(function (data) {
            if (data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Success', data.message, 'success');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Failure', data.message, 'error');
            }
        });
    };
    AdminDashboardComponent.prototype.editCCR = function (index, phase) {
        this.selectedPhase = phase;
        this.selectedCCR = this.initiatedRFC[index];
        this.edit = true;
        var siteID = 0;
        if (this.selectedPhase === 'Phase1') {
            for (var i = 0; i < this.sites.length; i++) {
                if (this.initiatedRFC[i].user_ID === this.sites[i].user_ID) {
                    siteID = this.sites[i].site_ID;
                }
            }
            this.phase1.setobj(this.initiatedRFC[index], siteID);
        }
        else if (this.selectedPhase === 'Phase2') {
            var user = '';
            for (var i = 0; i < this.users.length; i++) {
                if (this.initiatedRFC[index].user_ID === this.users[i].ID) {
                    user = this.users[i].name;
                }
            }
            for (var i = 0; i < this.sites.length; i++) {
                if (this.initiatedRFC[i].user_ID === this.sites[i].user_ID) {
                    siteID = this.sites[i].site_ID;
                }
            }
            this.phase2.setObj(this.phase2RFCs[index], this.initiatedRFC[index], user);
        }
        else if (this.selectedPhase === 'Phase3') {
            this.phase3.setObj(this.phase3RFCS[index]);
        }
    };
    AdminDashboardComponent.prototype.back = function () {
        this.selectedPhase = '';
        this.edit = false;
        this.phase1.setobj(null, 0);
        this.phase2.setObj(null, null, null);
        this.phase3.setObj(null);
        this.setUp();
    };
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminDashboardService.getCSRFToken().subscribe(function (data) {
            _this.Token = data.tokenValue;
        });
        this.adminDashboardService.getSpecialistData().subscribe(function (data) {
            _this.specialists = data[0];
        });
        this.setUp();
    };
    AdminDashboardComponent.prototype.setUp = function () {
        var _this = this;
        this.adminDashboardService.getPageData().toPromise().then(function (data) {
            _this.initiatedRFC = data[0];
            _this.phase2RFCs = data[1];
            _this.phase3RFCS = data[2];
            _this.sites = data[3];
            _this.users = data[4];
            _this.impactRisks = data[5];
            _this.eos = data[6];
            _this.priority = data[7];
            _this.changePeriods = data[8];
            _this.natureChange = data[9];
            for (var i = 0; i < _this.initiatedRFC.length; i++) {
                if (_this.phase2RFCs.length !== _this.initiatedRFC.length) {
                    _this.phase2RFCs.unshift({ ID: -1, phase1_ID: -1 });
                }
                if (_this.phase3RFCS.length !== _this.initiatedRFC.length) {
                    _this.phase3RFCS.unshift({ ID: -1, phase1_ID: -1 });
                }
            }
            for (var i = 0; i < _this.initiatedRFC.length; i++) {
                for (var x = 0; x < _this.phase2RFCs.length; x++) {
                    if (_this.initiatedRFC[i].ID === _this.phase2RFCs[x].phase1_ID) {
                        _this.phase2RFCs.splice(i, 0, _this.phase2RFCs.splice(x, 1)[0]);
                    }
                }
            }
            for (var i = 0; i < _this.initiatedRFC.length; i++) {
                for (var x = 0; x < _this.phase3RFCS.length; x++) {
                    if (_this.phase2RFCs[i].ID === _this.phase3RFCS[x].CCR_ID) {
                        _this.phase3RFCS.splice(i, 0, _this.phase3RFCS.splice(x, 1)[0]);
                    }
                }
            }
        });
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/pages/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/pages/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_adminDashboard_service__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_phase1_service__WEBPACK_IMPORTED_MODULE_3__["Phase1Service"], _services_phase2_service__WEBPACK_IMPORTED_MODULE_4__["Phase2Service"], _services_phase3_service__WEBPACK_IMPORTED_MODULE_5__["Phase3Service"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());

// Created by Blaine Viljoen


/***/ }),

/***/ "./src/app/pages/current-rfcs/current-rfcs.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/current-rfcs/current-rfcs.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/current-rfcs/current-rfcs.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/current-rfcs/current-rfcs.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Features -->\r\n<div *ngIf=\"!this.displayPhase3 && !this.displayPhase2\">\r\n    <div class=\"row text-center\">\r\n        <div class=\"col mb-4\">\r\n            <h2 class=\"px-3 text-secondary\">Initiated requests:</h2><br>\r\n        </div>\r\n        <div class=\"col mb-4\">\r\n            <h2 class=\"px-3 text-secondary\">CCR's in Phase 2:</h2>\r\n        </div>\r\n        <div class=\"col mb-4\">\r\n            <h2 class=\"px-3 text-secondary\">CCR's in Phase 3:</h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-center\" *ngFor=\"let ccr of myCCRs\" >\r\n        <div class=\"col mb-4\">\r\n            <div class=\"card h-100\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{ccr[0][0].ID}}</h4>\r\n                    <label>CCR Initiated: </label>\r\n                    <p class=\"card-text\"> {{ccr[0][0].start_time}}</p>\r\n                    <label>User ID</label>\r\n                    <p class=\"card-text\">{{ccr[0][0].user_ID}}</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <button class=\"btn btn-primary\" *ngIf=\"!ccr[1][0]\" (click)=\"configureCCR(ccr[0][0])\">Configure CCR</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col mb-4\">\r\n            <div class=\"card h-100\" *ngIf=\"ccr[1][0]\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{ccr[1][0].ID}}</h4>\r\n                    <p class=\"card-text\">TCB CRF ID: {{ccr[1][0].tcb_crf_ID}}</p>\r\n                    <p class=\"card-text\">Started: {{ccr[1][0].startDate}}</p>\r\n                </div>\r\n                <div class=\"card-footer\"  *ngIf=\" !ccr[2][0]\">\r\n                    <button class=\"btn btn-primary\" (click)=\"implementCCR(ccr)\">Implement CCR</button>\r\n                </div>\r\n                <div class=\"card-footer\"  *ngIf=\"ccr[2][0]\">\r\n<!--                    <button class=\"btn btn-primary\" *ngIf=\"ccr[2][0]\" (click)=\"implementCCR(ccr)\">Implement CCR</button>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col mb-4\">\r\n            <div class=\"card h-100\" *ngIf=\"ccr[2][0]\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">{{ccr[2][0].ID}}</h4>\r\n                    <p class=\"card-text\" *ngIf=\"ccr[2][0].start_tcb_evaluation_date !== '0000-00-00'\">\r\n                        <label>TCB evaluation start date: </label>\r\n                        {{ccr[2][0].start_tcb_evaluation_date}}\r\n                    </p>\r\n                    <p class=\"card-text\" *ngIf=\"ccr[2][0].close_out_confirmed === '1'\">This CCR has been closed out </p>\r\n                    <p class=\"card-text\" *ngIf=\"ccr[2][0].close_out_confirmed === '0'\">This CCR has not been closed out </p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <button class=\"btn btn-primary\" *ngIf=\"ccr[2][0].close_out_confirmed === '0'\" (click)=\"implementCCR(ccr)\">Implement CCR</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n    <app-phase2 *ngIf=\"this.displayPhase2\"></app-phase2><br>\r\n    <app-phase3 *ngIf=\"this.displayPhase3\"></app-phase3><br>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/current-rfcs/current-rfcs.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/current-rfcs/current-rfcs.component.ts ***!
  \**************************************************************/
/*! exports provided: CurrentRFCSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentRFCSComponent", function() { return CurrentRFCSComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_current_ccrs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/current-ccrs.service */ "./src/app/services/current-ccrs.service.ts");
/* harmony import */ var _services_phase2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/phase2.service */ "./src/app/services/phase2.service.ts");
/* harmony import */ var _services_phase3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/phase3.service */ "./src/app/services/phase3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Created by Blaine Viljoen




var CurrentRFCSComponent = /** @class */ (function () {
    function CurrentRFCSComponent(currentccrsService, phase2service, phase3service) {
        this.currentccrsService = currentccrsService;
        this.phase2service = phase2service;
        this.phase3service = phase3service;
    }
    CurrentRFCSComponent.prototype.configureCCR = function (ccr) {
        this.phase2service.setObj(null, ccr, null);
        this.displayPhase2 = true;
    };
    CurrentRFCSComponent.prototype.implementCCR = function (ccr) {
        this.phase3service.setphases(ccr);
        this.displayPhase3 = true;
    };
    CurrentRFCSComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentccrsService.getMyCCRs().subscribe(function (data) {
            _this.myCCRs = data;
            console.log(_this.myCCRs);
        });
    };
    CurrentRFCSComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-rfcs',
            template: __webpack_require__(/*! ./current-rfcs.component.html */ "./src/app/pages/current-rfcs/current-rfcs.component.html"),
            styles: [__webpack_require__(/*! ./current-rfcs.component.css */ "./src/app/pages/current-rfcs/current-rfcs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_current_ccrs_service__WEBPACK_IMPORTED_MODULE_1__["CurrentCcrsService"], _services_phase2_service__WEBPACK_IMPORTED_MODULE_2__["Phase2Service"], _services_phase3_service__WEBPACK_IMPORTED_MODULE_3__["Phase3Service"]])
    ], CurrentRFCSComponent);
    return CurrentRFCSComponent;
}());



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forgot-password works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/pages/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/pages/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Created by : Liam Gordon McCabe-->\n<!-- Student number: 27455211-->\n\n<div class=\"wrapper default-theme\" [ngClass]=\"getClasses()\">\n  <!--  <app-login></app-login>-->\n  <app-navbar></app-navbar>\n  <main>\n    <app-sidebar></app-sidebar>\n    <div class=\"pages container-fluid pb-4 pl-4 pr-4 \">\n      <router-outlet></router-outlet>\n      <hr>\n    </div>\n    <div class=\"overlay\" (click)=\"toggleSidebar()\"></div>\n  </main>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    HomeComponent.prototype.getClasses = function () {
        var classes = {
            'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
            'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
        };
        return classes;
    };
    HomeComponent.prototype.toggleSidebar = function () {
        this.appService.toggleSidebar();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed)).subscribe(function () {
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Created by : Liam Gordon McCabe-->\n<!-- Student number: 27455211-->\n<div class=\"card mx-auto\" style=\"width: 45rem;\">\n\n  <h5 class=\"card-header info-color white-text text-center py-4\">\n    <strong>Sign in</strong>\n  </h5>\n\n  <div class=\"card-body px-lg-5 pt-0\">\n    <form class=\"md-form\" style=\"color: #757575;\">\n      <label for=\"username\">User Name</label>\n      <input type=\"email\" id=\"username\"  name=\"username\" class=\"form-control\" [(ngModel)]=\"user\" (input)=\"setUsername(user)\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"pass\"  (input)=\"setPassword(pass)\">\n      <div class=\"d-flex align-items-center justify-content-between\">\n        <div>\n          <a href=\"\">Forgot password?</a>\n        </div>\n      </div>\n\n      <button class=\"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0\" type=\"submit\"  (click)=\"onLogin($event)\">Sign in</button>\n\n      <div class=\"text-center\">\n        <p>Not a member?\n          <a href=\"#\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n        </p>\n\n      </div>\n      <input type=\"hidden\"  value=\"{{this.Token}}\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_oath_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/oath.service */ "./src/app/services/oath.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/

 // Sweet Alerts import



var LoginComponent = /** @class */ (function () {
    function LoginComponent(OAuthService, router, cookieService) {
        this.OAuthService = OAuthService;
        this.router = router;
        this.cookieService = cookieService;
        this.user = '';
        this.pass = '';
        this.OAuth = {
            username: undefined,
            password: undefined
        };
        this.Token = null;
    }
    LoginComponent.prototype.setUsername = function (user) {
        this.user = user;
    };
    LoginComponent.prototype.setPassword = function (pass) {
        this.pass = pass;
    };
    LoginComponent.prototype.onLogin = function (event) {
        var _this = this;
        var target = event.target;
        this.OAuth.username = this.user;
        this.OAuth.password = this.pass;
        this.OAuthService.getUserDetails(this.OAuth.username, this.OAuth.password, this.Token).subscribe(function (data) {
            if (data.success) {
                _this.OAuthService.setLoggedIn(true);
                _this.cookieService.set('jwt', data.jwt);
                _this.router.navigate(['home']);
                // swal('Logged In' , data.message , 'success' );
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    type: 'success',
                    title: 'Logged In',
                    text: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                _this.OAuthService.getCSRFToken().subscribe(function (data1) {
                    _this.Token = data1.tokenValue;
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()('Failure', data.message, 'error');
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.OAuthService.getCSRFToken().subscribe(function (data) {
            _this.Token = data.tokenValue;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_oath_service__WEBPACK_IMPORTED_MODULE_2__["OathService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-rfcs/my-rfcs.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/my-rfcs/my-rfcs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Created by Blaine Viljoen(28023374)-->\r\n\r\n<form>\r\n  <div *ngFor=\"let rfc of rfcs; index as i\">\r\n    <div class=\"shadow card bg-light mx-auto\" (click)=\"onClick(i)\" style=\"cursor: pointer;\">\r\n      <div class=\"form group\">\r\n        <h2 class=\"px-3 pt-1 text-primary\">CCR ID: {{rfc[0]}}</h2><br>\r\n        <h3 class=\"px-3 text-secondary\">Request: {{rfc[1]}}</h3>\r\n        <h3 class=\"px-3 text-secondary\">Reason: {{rfc[2]}}</h3>\r\n        <h3 class=\"px-3 text-secondary\">Files:</h3>\r\n        <div *ngFor=\"let link of links\">\r\n          <a class=\"px-3\" href=\"{{link}}\">{{link}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n\r\n  <h3 id=\"test\" class=\"pt-3 px-3 text-primary\"></h3>\r\n</form>\r\n\r\n<!--Created by Blaine Viljoen(28023374)-->\r\n"

/***/ }),

/***/ "./src/app/pages/my-rfcs/my-rfcs.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/my-rfcs/my-rfcs.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/my-rfcs/my-rfcs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/my-rfcs/my-rfcs.component.ts ***!
  \****************************************************/
/*! exports provided: MyRFCSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRFCSComponent", function() { return MyRFCSComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_MyRfcs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/MyRfcs.service */ "./src/app/services/MyRfcs.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Created by Blaine Viljoen




var MyRFCSComponent = /** @class */ (function () {
    function MyRFCSComponent(myRfcsService, cookieService) {
        this.myRfcsService = myRfcsService;
        this.cookieService = cookieService;
        this.links = [];
        this.Token = null;
        this.rfcs = [
            { id: 1, request: 'something', reason: 'Cause I said so ...' },
            { id: 2, request: 'something else', reason: 'Same as the last one ...' },
            { id: 3, request: 'one last thing', reason: 'Just do it ...' }
        ];
    }
    MyRFCSComponent.prototype.onClick = function (index) {
        document.getElementById('test').innerHTML = 'You selected the card with id: ' + this.rfcs[index][0];
    };
    MyRFCSComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jwt = this.cookieService.get('jwt');
        var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(jwt);
        this.userID = decodedToken.data.id;
        this.myRfcsService.getCSRFToken().subscribe(function (data) {
            _this.Token = data.tokenValue;
        });
        this.myRfcsService.getPageData(this.userID.toString()).subscribe(function (data) {
            _this.rfcs = data[0];
        });
        this.myRfcsService.getFiles().subscribe(function (data) {
            _this.links = data[0];
        });
    };
    MyRFCSComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-rfcs',
            template: __webpack_require__(/*! ./my-rfcs.component.html */ "./src/app/pages/my-rfcs/my-rfcs.component.html"),
            styles: [__webpack_require__(/*! ./my-rfcs.component.scss */ "./src/app/pages/my-rfcs/my-rfcs.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_MyRfcs_service__WEBPACK_IMPORTED_MODULE_1__["MyRfcsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], MyRFCSComponent);
    return MyRFCSComponent;
}());

// Created by Blaine Viljoen


/***/ }),

/***/ "./src/app/pages/phase1/phase1.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/phase1/phase1.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/phase1/phase1.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/phase1/phase1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Created by : Liam Gordon McCabe-->\r\n<!-- Student number: 27455211-->\r\n  <form class=\"card mx-auto secondary-color\">\r\n    <div class=\"form-group px-3 pt-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"> <label for= \"site\">Select your site</label></div>\r\n        <div class=\"col\">\r\n          <select ngbPopover=\"Select from the drop down list The site you want to make your request within\" triggers=\"mouseenter:mouseleave\" placement=\"bottom\" popoverTitle=\"SELECT SITE\"\r\n                  class=\"rounded w-100 form-control\"\r\n                  name=\"site\"\r\n                  id=\"site\"\r\n                  (change)=\"onSelectSite($event)\" >\r\n            <option id=\"default\" selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n            <option *ngFor=\"let site of usersSites\"  [value]=\"site[0]\" [selected]=\"this.RFC.site_ID == site[0]\" >{{site[1]}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group px-3 pt-3\" *ngIf=\"this.displayNotifyManager\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"> <label>Would you like to notify a manager?</label></div>\r\n        <div class=\"col\">\r\n          <Label class=\"radio-inline px-3\">\r\n            <input type=\"radio\"\r\n                   name=\"notifyManager\"\r\n                   value=\"yes\"\r\n                   (click)=\"onSelectNotifyManager($event)\">\r\n            Yes\r\n          </Label>\r\n          <Label class=\"radio-inline px-3\">\r\n            <input type=\"radio\"\r\n                   name=\"notifyManager\"\r\n                   value=\"no\"\r\n                   (click)=\"onSelectNotifyManager($event)\" >\r\n            No\r\n          </Label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group px-3 pt-3\" *ngIf=\"this.displayNoManagers\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"> <label for= \"managerSelect\">How many Managers?</label></div>\r\n        <div class=\"col\">\r\n          <select ngbPopover=\"Select from the drop down list The site you want to make your request within\" triggers=\"mouseenter:mouseleave\" placement=\"bottom\" popoverTitle=\"SELECT SITE\"\r\n                  class=\"rounded w-100 form-control\"\r\n                  name=\"managerSelect\"\r\n                  id=\"managerSelect\"\r\n                  (change)=\"onSelectNoManagers($event)\" >\r\n            <option  selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n            <option *ngFor=\"let noManager of noManagers\"  [value]=\"noManager\"  >{{noManager}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group px-3 pt-3\"*ngIf=\"this.displayManagerSelect1\" >\r\n      <div class=\"row\">\r\n        <div class=\"col\"> <label for= \"manager1\">Select a Manager to notify</label></div>\r\n        <div class=\"col\">\r\n          <select ngbPopover=\"Select from the drop down list The site you want to make your request within\" triggers=\"mouseenter:mouseleave\" placement=\"bottom\" popoverTitle=\"SELECT SITE\"\r\n                  class=\"rounded w-100 form-control\"\r\n                  name=\"manager1\"\r\n                  id=\"manager1\"\r\n                  (change)=\"onSelectManager1($event)\" >\r\n            <option  selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n            <option *ngFor=\"let manager of managers\"  [value]=\"manager[0]\"  >{{manager[1] + ' ' + manager[2]}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group px-3 pt-3\" *ngIf=\"this.displayManagerSelect2\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"> <label for= \"manager2\">Select a Manager to notify</label></div>\r\n        <div class=\"col\">\r\n          <select ngbPopover=\"Select from the drop down list The site you want to make your request within\" triggers=\"mouseenter:mouseleave\" placement=\"bottom\" popoverTitle=\"SELECT SITE\"\r\n                  class=\"rounded w-100 form-control\"\r\n                  name=\"manager2\"\r\n                  id=\"manager2\"\r\n                  (change)=\"onSelectManager2($event)\" >\r\n            <option  selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n            <option *ngFor=\"let manager of managers\"  [value]=\"manager[0]\"  >{{manager[1] + ' ' + manager[2]}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group px-3 pt-3\" *ngIf=\"this.displayManagerSelect3\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"> <label for= \"manager3\">Select a Manager to notify</label></div>\r\n        <div class=\"col\">\r\n          <select ngbPopover=\"Select from the drop down list The site you want to make your request within\" triggers=\"mouseenter:mouseleave\" placement=\"bottom\" popoverTitle=\"SELECT SITE\"\r\n                  class=\"rounded w-100 form-control\"\r\n                  name=\"manager3\"\r\n                  id=\"manager3\"\r\n                  (change)=\"onSelectManager3($event)\" >\r\n            <option  selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n            <option *ngFor=\"let manager of managers\"  [value]=\"manager[0]\"  >{{manager[1] + ' ' + manager[2]}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group px-3 pt-3\" *ngIf=\"this.displayRequestDescription\">\r\n      <label for= \"requestedChange\">Change Request Description</label>\r\n      <textarea rows=\"8\"\r\n                class=\"form-control rounded\"\r\n                type=\"text\"\r\n                name=\"requestedChange\"\r\n                id=\"requestedChange\"\r\n                maxlength=\"255\"\r\n                (input)=\"requestedChange()\"\r\n                [(ngModel)]=\"RFC.requestDescription\">\r\n      </textarea>\r\n    </div>\r\n    <div class=\"form-group px-3\" *ngIf=\"this.displayReasonForRequest\">\r\n      <label for=\"description\">Reason For Request</label>\r\n      <textarea rows=\"8\"\r\n                class=\"form-control rounded\"\r\n                type=\"text\"\r\n                name=\"description\"\r\n                id=\"description\"\r\n                maxlength=\"255\"\r\n                (input)=\"description()\"\r\n                [(ngModel)]=\"RFC.reasonForRequest\"\r\n      ></textarea>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"row px-3\">\r\n      <div class=\"col\"></div>\r\n      <div class=\"col\">\r\n        <button\r\n                type=\"cancel\"\r\n                id=\"cancel\"\r\n                class=\"btn btn-outline-danger btn-rounded w-100 mx-auto   my-4 waves-effect z-depth-0\" (click)=\"onCancel()\"\r\n        >Cancel</button>\r\n      </div>\r\n      <div class=\"col\"></div>\r\n      <div class=\"col\">\r\n        <button\r\n                type=\"submit\"\r\n                id=\"submit\"\r\n                class=\"btn btn-outline-info btn-rounded w-100 mx-auto my-4 waves-effect z-depth-0 disabled\" [disabled]=\"!this.enableSubmitButton\" (click)=\"onSubmit()\"\r\n        >Submit</button>\r\n      </div>\r\n      <div class=\"col\"></div>\r\n    </div>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/pages/phase1/phase1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/phase1/phase1.component.ts ***!
  \**************************************************/
/*! exports provided: Phase1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase1Component", function() { return Phase1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_phase1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/phase1.service */ "./src/app/services/phase1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/




var Phase1Component = /** @class */ (function () {
    function Phase1Component(phase1Service, router) {
        this.phase1Service = phase1Service;
        this.router = router;
        this.localOBJ = null;
        this.noManagers = [1, 2, 3];
        this.RFC = {
            dateRequested: undefined,
            requestDescription: undefined,
            reasonForRequest: undefined,
            CSRF_token: undefined,
            site_ID: undefined
        };
    }
    Phase1Component.prototype.onSelectSite = function ($event) {
        this.RFC.site_ID = $event.target.value;
        console.log($event.target.value);
        localStorage.setItem('site', $event.target.value);
        this.displayNotifyManager = true;
    };
    Phase1Component.prototype.onSelectNotifyManager = function ($event) {
        switch ($event.target.value) {
            case 'yes':
                this.displayNoManagers = true;
                break;
            case 'no':
                this.displayRequestDescription = true;
        }
    };
    Phase1Component.prototype.onSelectNoManagers = function ($event) {
        switch ($event.target.value) {
            case '1':
                this.displayManagerSelect1 = true;
                this.displayManagerSelect2 = false;
                this.displayManagerSelect3 = false;
                break;
            case '2':
                this.displayManagerSelect1 = true;
                this.displayManagerSelect2 = true;
                this.displayManagerSelect3 = false;
                break;
            case '3':
                this.displayManagerSelect1 = true;
                this.displayManagerSelect2 = true;
                this.displayManagerSelect3 = true;
                break;
        }
    };
    Phase1Component.prototype.onSelectManager1 = function ($event) {
        this.displayRequestDescription = true;
    };
    Phase1Component.prototype.onSelectManager2 = function ($event) {
        this.displayRequestDescription = true;
    };
    Phase1Component.prototype.onSelectManager3 = function ($event) {
        this.displayRequestDescription = true;
    };
    Phase1Component.prototype.requestedChange = function () {
        this.displayReasonForRequest = true;
        localStorage.setItem('request', this.RFC.requestDescription);
    };
    Phase1Component.prototype.description = function () {
        localStorage.setItem('description', this.RFC.reasonForRequest);
        var submitButton = document.getElementById('submit');
        if (this.RFC.requestDescription !== undefined && this.RFC.reasonForRequest !== undefined && this.RFC.site_ID !== undefined) {
            submitButton.classList.remove('disabled');
            this.enableSubmitButton = true;
        }
    };
    Phase1Component.prototype.onCancel = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: 'You will lose this data',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                localStorage.removeItem('request');
                localStorage.removeItem('description');
                localStorage.removeItem('site');
                _this.router.navigate(['home/myRFCS']);
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Cancelled',
                    text: 'Your may continue to make changes',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    Phase1Component.prototype.onSubmit = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: 'You won\'t be able make changes to your submission',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                if (_this.localOBJ !== null) {
                    _this.phase1Service.updateRequest(_this.RFC, _this.localOBJ.ID).subscribe(function (data) {
                        if (data.success) {
                            _this.localOBJ = null;
                            localStorage.removeItem('request');
                            localStorage.removeItem('description');
                            localStorage.removeItem('site');
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Success', data.message, 'success');
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Failure', data.message, 'error');
                        }
                    });
                }
                else {
                    _this.phase1Service.submitRequest(_this.RFC).subscribe(function (data) {
                        if (data.success) {
                            localStorage.removeItem('request');
                            localStorage.removeItem('description');
                            localStorage.removeItem('site');
                            _this.router.navigate(['home']);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Success', data.message, 'success');
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Failure', data.message, 'error');
                            if (data.message === 'Session expired') {
                                _this.router.navigate(['login']);
                            }
                        }
                    });
                }
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Cancelled',
                    text: 'Your may continue to make changes',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    Phase1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.phase1Service.getCSRFToken().subscribe(function (data) {
            _this.RFC.CSRF_token = data.tokenValue;
        });
        this.phase1Service.getPageData().subscribe(function (data) {
            _this.usersSites = data[0];
            _this.managers = data[1];
        });
        this.localOBJ = this.phase1Service.getobj();
        if (this.localOBJ !== null) {
            localStorage.setItem('request', this.localOBJ.requested_change);
            localStorage.setItem('description', this.localOBJ.description);
            localStorage.setItem('site', this.phase1Service.getSite().toString());
            this.enableSubmitButton = true;
            var submitButton = document.getElementById('submit');
            submitButton.classList.remove('disabled');
            document.getElementById('cancel').classList.add('invisible');
        }
        else {
            this.RFC.requestDescription = localStorage.getItem('request');
            this.RFC.reasonForRequest = localStorage.getItem('description');
            this.RFC.site_ID = localStorage.getItem('site');
            if (this.RFC.site_ID !== null || undefined) {
                this.displayNotifyManager = true;
            }
            if (this.RFC.requestDescription !== null || undefined) {
                this.displayRequestDescription = true;
            }
            if (this.RFC.reasonForRequest !== null || undefined) {
                this.displayReasonForRequest = true;
                this.enableSubmitButton = true;
            }
        }
    };
    Phase1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-rfcs',
            template: __webpack_require__(/*! ./phase1.component.html */ "./src/app/pages/phase1/phase1.component.html"),
            styles: [__webpack_require__(/*! ./phase1.component.css */ "./src/app/pages/phase1/phase1.component.css")]
        }),
        __metadata("design:paramtypes", [_services_phase1_service__WEBPACK_IMPORTED_MODULE_1__["Phase1Service"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Phase1Component);
    return Phase1Component;
}());



/***/ }),

/***/ "./src/app/pages/phase2/phase2.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/phase2/phase2.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import\r\n.special {\r\n    font-weight: bold !important;\r\n    color: #fff !important;\r\n    background: #bc0000 !important;\r\n    text-transform: uppercase;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/phase2/phase2.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/phase2/phase2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Created by : Liam Gordon McCabe-->\r\n<!-- Student number: 27455211-->\r\n<form>\r\n    <div class=\"card secondary-color\">\r\n        <h3 class=\"px-3 text-primary\">Request for Change</h3>\r\n        <div>\r\n            <label class=\"px-3 d-inline-block\">Name of Initiator: {{this.user}}</label>\r\n            <p class=\" px-3 d-inline-block\"></p>\r\n            <label class=\"px-3 d-inline-block\">Date Requested: {{this.RFC.dateRequested}}</label>\r\n            <p class=\"px-3 d-inline-block\"></p>\r\n        </div>\r\n        <label class=\"px-3 \">Requested Change Description: </label>\r\n        <p class=\"px-3\">{{this.RFC.requestDescription}}</p>\r\n        <label class=\"px-3\">Reason for request: </label>\r\n        <p class=\"px-3\">{{this.RFC.reasonForRequest}}</p>\r\n    </div>\r\n    <div id=\"phase2\" style=\"\" class=\"shadow card bg-light mx-auto\">\r\n        <div class=\"form-group\">\r\n            <h3 class=\"px-3 text-primary\"> CCR specialist phase 1</h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\" for=\"priority\">Request Priority</label>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <select ngbPopover=\"Select from the drop down list whether the change request is an EMERGENCY or NON-EMERGENCY (NORMAL).\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"CHANGE REQUEST PRIORITY\"\r\n                            class=\"rounded w-100 form-control\"\r\n                            name=\"priority\"\r\n                            id=\"priority\"\r\n                            (change)=\"onSelectPriority($event)\" >\r\n                        <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                        <option *ngFor=\"let priority of availablePriorities\"  [value]=\"priority[0]\" [selected]=\"this.phase2.requestPriority === priority[0]\">{{priority[1]}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <div *ngIf=\"this.displayPredictedRisks\">\r\n                        <label class=\"px-3\"  for=\"predictedImpact\"> Predicted Risk/s </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <div *ngIf=\"this.displayPredictedRisks\">\r\n                        <select ngbPopover=\"Select the appropriate option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"PREDICTED RISK\"\r\n                                class=\"rounded w-100 form-control\"\r\n                                name=\"predictedImpact\"\r\n                                id=\"predictedImpact\"\r\n                                (change)=\"onSelectImpact($event)\" >\r\n                            <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                            <option *ngFor=\"let impacts of availableImpacts\" [selected]=\"this.phase2.predictedImpact === impacts[0]\"  [value]=\"impacts[0]\" >{{impacts[1]}}</option>\r\n                        </select>\r\n<!--                        <ngx-select-dropdown-->\r\n<!--                                ngbPopover=\"Select the appropriate option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"PREDICTED RISK\"-->\r\n<!--                                id=\"predictedImpact\"-->\r\n<!--                                name=\"predictedImpact\"-->\r\n<!--                                (change)=\"onSelectImpact($event)\"-->\r\n<!--                                [multiple]=\"true\"-->\r\n<!--                                [(ngModel)]=\"this.phase2.predictedImpact\"-->\r\n<!--                                [options]=\"availableImpacts\">-->\r\n<!--                        </ngx-select-dropdown>-->\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm \"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"this.displayChangePeriod\">\r\n            <div class=\"row\" >\r\n                <div class=\"col-sm\">\r\n                    <div *ngIf=\"this.displayChangePeriod\">\r\n                        <label class=\"px-3\" for=\"changePeriod\" >Change Period</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <div *ngIf=\"this.displayChangePeriod\">\r\n                        <select ngbPopover=\"Specify whether the requested change will be permanent or just temporary by selecting an option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"CHANGE PERIOD\"\r\n                                class=\"rounded w-100 form-control\"\r\n                                name=\"changePeriod\"\r\n                                id=\"changePeriod\"\r\n                                (change)=\"onSelectChangePeriod($event)\">\r\n                            <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                            <option *ngFor=\"let period of availablePeriods\"  [value]=\"period[0]\" [selected]=\"this.phase2.changePeriod === period[0]\">{{period[1]}}</option>\r\n                        </select>\r\n                     </div>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <div  *ngIf=\"this.displaySelectTemporaryAmountOfDays\">\r\n                        <label class=\"px-3\" for=\"changePeriod\" >Temporary period number of days</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <div  *ngIf=\"displaySelectTemporaryAmountOfDays\">\r\n                        <select ngbPopover=\"Select the appropriate option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"PREDICTED RISK\"\r\n                                class=\"rounded w-100 form-control\"\r\n                                name=\"temporaryNoDays\"\r\n                                id=\"temporaryNoDays\"\r\n                                (change)=\"onSelectNumberOfTemporaryDays($event)\" >\r\n                            <option selected=\"selected\" disabled=\"disabled\">Select no. of days</option>\r\n                            <option  *ngFor=\"let day of availableNumberOfTemporaryDays\" [selected]=\"this.phase2.temporaryPeriodNumberOfDays ===  day\" value=\"{{day}}\">{{day}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm\"></div>\r\n            </div>\r\n            <div class=\"row pt-3\" *ngIf=\"displayTemporaryDateSelection\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\" for=\"temporaryStartPeriod\" >Temporary period start date:</label>\r\n                </div>\r\n                <div class=\"col-sm \">\r\n                    <input class=\"rounded w-100 form-control\"\r\n                           type=\"text\"\r\n                           id=\"temporaryStartPeriod\"\r\n                           name=\"temporaryStartPeriod\"\r\n                           autocomplete=\"off\"\r\n                           bsDatepicker\r\n                           [bsConfig]=\"datepickerConfig\"\r\n                           [(ngModel)]=\"this.phase2.temporaryPeriodStartDate\"\r\n                           (ngModelChange)=\"onSelectTemporaryStartDate($event)\"\r\n                           >\r\n                </div>\r\n                <div class=\"col-sm \"> <label class=\"px-3\" for=\"temporaryEndPeriod\" >Temporary period end date:</label></div>\r\n                <div class=\"col-sm \">\r\n                    <input  class=\"rounded w-100 form-control\"\r\n                            type=\"text\"\r\n                            id=\"temporaryEndPeriod\"\r\n                            name=\"temporaryEndPeriod\"\r\n                            autocomplete=\"off\"\r\n                            bsDatepicker\r\n                            [bsConfig]=\"datepickerConfig\"\r\n                            [(ngModel)]=\"this.phase2.temporaryPeriodEndDate\"\r\n                            disabled\r\n                            readonly>\r\n                </div>\r\n                <div class=\"col-sm \"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"this.displayNatureOfChange\">\r\n            <div class=\"row\" *ngIf=\"this.displayNatureOfChange\">\r\n                <div class=\"col-sm\">\r\n                    <div *ngIf=\"this.displayNatureOfChange\">\r\n                        <label class=\"px-3\" for=\"natureOfChange\">Nature of the change</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <div *ngIf=\"this.displayNatureOfChange\">\r\n                        <select popoverTitle=\"SELECT NATURE OF CHANGE\" ngbPopover=\"Select an option from the drop down list. National = Change affects both Northern and Southern regions. Regional = Either Northern or Southern is affected, but not both. Local = any ATCC or TCU or RT\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                                class=\"rounded w-100 form-control\"\r\n                                name=\"natureOfChange\"\r\n                                id=\"natureOfChange\"\r\n                                (change)=\"onSelectNatureOfChange($event)\"\r\n                                [(ngModel)]=\"this.phase2.natureOfChange\">\r\n                            <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                            <option *ngFor=\"let change of availableNatureOfChange\"  [value]=\"change[0]\" [selected]=\"this.phase2.natureOfChange === change[0]\">{{change[1]}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <div *ngIf=\"this.displayEOSystem\">\r\n                        <label class=\"px-3\"  for=\"eosSystem\">EOS system</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <div *ngIf=\"this.displayEOSystem\">\r\n                        <select popoverTitle=\"SELECT EOS SYSTEM\" ngbPopover=\"Please select from the drop down list the Essential Operational System (EOS) to which the Trusted Computing Base (TCB) change will be applied.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                                class=\"w-100 rounded form-control\"\r\n                                name=\"eosSystem\"\r\n                                id=\"eosSystem\"\r\n                                (change)=\"onSelectEosSystem($event)\" >\r\n                            <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                            <option *ngFor=\"let eos of availableEosSystems\"  [value]=\"eos[0]\" [selected]=\"this.phase2.eosSystem === eos[0]\" >{{eos[1]}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm \"></div>\r\n            </div>\r\n        </div>\r\n<!--</div>-->\r\n<!--    <div class=\"card\">-->\r\n        <div class=\"form-group\" *ngIf=\"this.displayTCB_CRF_ID\">\r\n            <div class=\"row\" *ngIf=\"this.displayTCB_CRF_ID\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\" for=\"tcbID\">TCB-CRF ID:</label>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <input popoverTitle=\"CHANGE REQUEST IDENTIFICATION\" ngbPopover=\"The TCB-CRF ID is an unique number relative to an EOS system issued by the TCB-CRF Administrator for every change request submitted for approval and implementation.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                           class=\"rounded form-control\"\r\n                           id=\"tcbID\"\r\n                           name=\"tcbID\"\r\n                           type=\"text\"\r\n                           disabled\r\n                           [(ngModel)]=\"this.phase2.TCB_CRF_ID\"  >\r\n                </div>\r\n                <div class=\"col-sm\"></div>\r\n                <div class=\"col-sm\"></div>\r\n                <div class=\"col-sm\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"this.displayConfigurationItems\">\r\n            <div *ngIf=\"this.displayConfigurationItems\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm\">\r\n                        <label class=\"px-3\" for=\"configurationItems\">Configuration Items: </label>\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                </div>\r\n                <div class=\"px-3\">\r\n                    <input  popoverTitle=\"ENTER ALL CONFIGURATION ITEMS\" ngbPopover=\"TECH: Enter any sub system or system component that will be subject to the change e.g. EXTRA HDD, SW VERS., RADAR FEED, DATASET- ANY CHANGE TO THE TCB NEEDS TO BE APPROVED. OPS: Enter short description of the request.  Maximum 250 characters allowed\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                            maxlength=\"250\"\r\n                            class=\"rounded w-75 form-control\"\r\n                            id=\"configurationItems\"\r\n                            name=\"configurationItems\"\r\n                            type=\"text\"\r\n                            (input)=\"this.displayChangeType = true\"\r\n                            [(ngModel)]=\"this.phase2.configurationItems\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div *ngIf=\"this.displayChangeType\">\r\n                        <label class=\"px-3\">Change Type: </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\"\r\n                     popoverTitle=\"CHANGE TYPE\" ngbPopover=\"Select the type of change. Hardware (HW), Software (SW) or Firmware (FW). One or more of these options must be ticked if affected by the change.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                >\r\n                    <div *ngIf=\"this.displayChangeType\">\r\n                        <label class=\"checkbox-inline px-3\">\r\n                            <input type=\"checkbox\"\r\n                                   value=\"HW\"\r\n                                   (click)=\"onSelectChangeTypeHW($event)\" [checked]=\"this.phase2.change.hardware\">\r\n                            Hardware\r\n                        </label>\r\n                        <label class=\"checkbox-inline px-3\">\r\n                            <input type=\"checkbox\"\r\n                                   value=\"SW\"\r\n                                   (click)=\"onSelectChangeTypeSW($event)\" [checked]=\"this.phase2.change.software\">\r\n                            Software\r\n                        </label>\r\n                        <label class=\"checkbox-inline px-3\">\r\n                            <input type=\"checkbox\"\r\n                                   value=\"FW\"\r\n                                   (click)=\"onSelectChangeTypeFW($event)\" [checked]=\"this.phase2.change.firmware\">\r\n                            Firmware\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div *ngIf=\"this.displayAdditionalAttachedDocuments\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <label class=\"px-3 \">Additional attached Documents: </label>\r\n                    </div>\r\n                    <div class=\"col\"\r\n                     popoverTitle=\"ADDITIONAL DOCUMENTS ATTACHED\" ngbPopover=\"Tick the box next to the appropriate answer whether additional documents are attached for Phase-1. Normally there should be documents attached explaining why the change is requested and what pre-testing and evaluation has been done. \" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                    >\r\n                        <Label class=\"radio-inline px-3\">\r\n                            <input type=\"radio\"\r\n                                   name=\"additionalDocs\"\r\n                                   value=\"yes\"\r\n                                   (click)=\"onSelectAdditionalDocuments($event)\">\r\n                            Yes\r\n                        </Label>\r\n                        <Label class=\"radio-inline px-3\">\r\n                            <input type=\"radio\"\r\n                                   name=\"additionalDocs\"\r\n                                   value=\"no\"\r\n                                   (click)=\"onSelectAdditionalDocuments($event)\" >\r\n                            No\r\n                        </Label>\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"this.phase2.additionalDocuments === true\">\r\n            <div class=\"row pb-3\">\r\n                <div class=\"col\">\r\n                    <label class=\"px-3\" for=\"numberOfPages\">Number of Pages (Documents): </label>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <input class=\"px-3 form-control rounded\"\r\n                           disabled=\"true\"\r\n                           type=\"number\"\r\n                           name=\"numberOfPages\"\r\n                           id=\"numberOfPages\"\r\n                           [(ngModel)]=\"this.filesForUpload.length\">\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n            <div class=\"px-3\">\r\n                <ngx-file-drop multiple=\"true\" dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\r\n                               (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n                    <ng-template  ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n                        Please drag and drop your additional files here\r\n                        <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n                    </ng-template>\r\n                </ngx-file-drop>\r\n                <div class=\"upload-table px-3\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>Name:</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody class=\"upload-name-style\">\r\n                        <tr *ngFor=\"let item of filesForUpload, index as i\">\r\n                            <td><strong>{{ item.name }}</strong></td>\r\n                            <td class=\"px-3\" (click)=\"removeFile(i)\" style=\"cursor: pointer;\">&#10005;</td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"this.displayEstimatedImpact\">\r\n            <label class=\"px-3\">Estimated Impact: </label>\r\n            <div class=\"px-3\">\r\n                <div *ngIf=\"this.displayEstimatedImpactOps\">\r\n                    <label for=\"operationsImpact\" class=\"\">Operations: </label>\r\n                    <br>\r\n                    <input popoverTitle=\"IMPACT=FUNCTIONAL/PROCEDURAL/etc\" ngbPopover=\"Operations: e.g. NORM mode will be down, Redundency lost, No new FPLs, Operator Handbooks\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                           class=\"w-75 rounded form-control\"\r\n                           type=\"text\"\r\n                           id=\"operationsImpact\"\r\n                           name=\"operationsImpact\"\r\n                           (input)=\"estimatedImpact($event)\"\r\n                           [(ngModel)]=\"this.phase2.estimatedImpacts.operations\">\r\n                </div>\r\n                <div *ngIf=\"this.displayEstimatedImpactClients\">\r\n                    <label for=\"clientsImpact\" class=\"\">Clients: </label>\r\n                    <br>\r\n                    <input popoverTitle=\"IMPACT=FUNCTIONAL/PROCEDURAL/etc\" ngbPopover=\"Clients: External and Internal - loss of service such as slot information, procedural changes, etc.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                           class=\" w-75 rounded form-control\"\r\n                           type=\"text\"\r\n                           id=\"clientsImpact\"\r\n                           name=\"clientsImpact\"\r\n                           (input)=\"estimatedImpact($event)\"\r\n                           [(ngModel)]=\"this.phase2.estimatedImpacts.clients\">\r\n                </div>\r\n                <div *ngIf=\"this.displayEstimatedImpactTech\">\r\n                    <label for=\"technicalImpact\" class=\"\">Technical: </label>\r\n                    <br>\r\n                    <input popoverTitle=\"IMPACT=FUNCTIONAL/PROCEDURAL/etc\" ngbPopover=\"Technical: Node Down, LAN switch down, Documents\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                           class=\" w-75 rounded form-control\"\r\n                           type=\"text\"\r\n                           id=\"technicalImpact\"\r\n                           name=\"technicalImpact\"\r\n                           (input)=\"estimatedImpact($event)\"\r\n                           [(ngModel)]=\"this.phase2.estimatedImpacts.technical\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"this.displayProblemReportRaised && this.displayEstimatedImpact\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label class=\"px-3\">Problem Report raised with Contractor?</label>\r\n                </div>\r\n                <div class=\"col\"\r\n                     popoverTitle=\"PROBLEM REPORT RAISED?\" ngbPopover=\"Specify yes or no whether a problem request or report has been raised with the contractor by selecting the appropriate check box with a left-mouse-button click.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                >\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"reportRaised\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectReportRaised($event)\" [checked]=\"this.phase2.problemReportRaised\">\r\n                        Yes\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"reportRaised\"\r\n                               value=\"no\"\r\n                               (click)=\"onSelectReportRaised($event)\" [checked]=\"!this.phase2.problemReportRaised\">\r\n                        No\r\n                    </Label>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n            <div *ngIf=\"this.phase2.problemReportRaised\" >\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <label for=\"problemReportRef\" class=\"px-3\">Problem Report Reference Number: </label>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input popoverTitle=\"PROBLEM REPORT REFERENCE\" ngbPopover=\"Enter the problem report reference number here. The problem report refers to a report that was sent to the contractor to improve a functionality or solve a problem on the system. Can be a PR, ECR, PCR, CR, etc.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                               class=\"w-100 rounded form-control\"\r\n                               type=\"text\"\r\n                               name=\"problemReportRef\"\r\n                               id=\"problemReportRef\"\r\n                               (input)=\"onInputProblemReportRef()\"\r\n                               [(ngModel)]=\"this.phase2.problemReportRef\">\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"this.displayChangePreTested\">\r\n            <div *ngIf=\"this.displayChangePreTested\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <label class=\"px-3\">Change successfully pre-tested ?</label>\r\n                    </div>\r\n                    <div class=\"col\"\r\n                         popoverTitle=\"CHANGE SUCCESSFULLY PRE-TESTED ?\" ngbPopover=\"Specify whether pre-tests or validations concerning the change were successful by selecting a check box accordingly with the left-mouse button.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                    >\r\n                        <Label class=\"radio-inline px-3\">\r\n                            <input type=\"radio\"\r\n                                   name=\"preTested\"\r\n                                   value=\"yes\"\r\n                                   (click)=\"onSelectPreTested($event)\" [checked]=\"this.phase2.changeSuccessfullyTested === 'yes'\">\r\n                            Yes\r\n                        </Label>\r\n                        <Label class=\"radio-inline px-3\">\r\n                            <input type=\"radio\"\r\n                                   name=\"preTested\"\r\n                                   value=\"no\"\r\n                                   (click)=\"onSelectPreTested($event)\" [checked]=\"this.phase2.changeSuccessfullyTested === 'no'\">\r\n                            No\r\n                        </Label>\r\n                        <Label class=\"radio-inline px-3\">\r\n                            <input type=\"radio\"\r\n                                   name=\"preTested\"\r\n                                   value=\"na\"\r\n                                   (click)=\"onSelectPreTested($event)\" [checked]=\"this.phase2.changeSuccessfullyTested === 'na'\">\r\n                            N/A\r\n                        </Label>\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                </div>\r\n                <div class=\"px-3\" *ngIf=\"this.displayChangeNotSuccessfullyTestedReason\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <label for=\"changeNotSuccessfullyTestedReason\" class=\"\">Reason for unsuccessful test: </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <input popoverTitle=\"Reason for unsuccessful testing\" ngbPopover=\"If the tests were unsuccessful please provide the reason here\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                                   class=\"w-75 rounded form-control\"\r\n                                   type=\"text\"\r\n                                   id=\"changeNotSuccessfullyTestedReason\"\r\n                                   name=\"changeNotSuccessfullyTestedReason\"\r\n                                   (input)=\"onUnsuccessfulTestReason()\"\r\n                                   [(ngModel)]=\"this.phase2.changeNotSuccessfullyTestedReason\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n<!--        <div class=\"form-group\">-->\r\n<!--            <div class=\"row\">-->\r\n<!--                <div class=\"col\">-->\r\n<!--                    <label class=\"px-3\">Request submitted to all concerned parties ?</label>-->\r\n<!--                </div>-->\r\n<!--                <div class=\"col\">-->\r\n<!--                    <Label class=\"radio-inline px-3\"><input type=\"radio\" name=\"submittedToAll\" value=\"yes\"  (click)=\"onSelectSubmittedToAllConcerned($event)\">Yes</Label>-->\r\n<!--                    <Label class=\"radio-inline px-3\"><input type=\"radio\" name=\"submittedToAll\" value=\"no\"   (click)=\"onSelectSubmittedToAllConcerned($event)\" >No</Label>-->\r\n<!--                </div>-->\r\n<!--                <div class=\"col\"></div>-->\r\n<!--            </div>-->\r\n\r\n<!--            <div  class=\"px-3\" *ngIf=\"!this.phase2.submittedToAllParties\">-->\r\n<!--                <div class=\"row\">-->\r\n<!--                    <div class=\"col\">-->\r\n<!--                        <label class=\"\">Reason why not submitted to all concerned parties?</label>-->\r\n<!--                    </div>-->\r\n<!--                </div>-->\r\n<!--                <div class=\"row\">-->\r\n<!--                    <div class=\"col\">-->\r\n<!--                        <input class=\" w-75 rounded form-control\" type=\"text\" name=\"requestNotSubmittedToAllParties\" [(ngModel)]=\"this.phase2.notSubmittedToAllPartiesReason\">-->\r\n<!--                    </div>-->\r\n<!--                </div>-->\r\n<!--            </div>-->\r\n<!--        </div>-->\r\n\r\n        <div class=\"form-group\" *ngIf=\"this.displaySpecialistComments\">\r\n            <div class=\"px-3\" >\r\n                <div class=\"row\" *ngIf=\"this.displaySpecialistComments\">\r\n                    <div class=\"col\">\r\n                        <label for=\"specialistComments\" >Specialist comments</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"this.displaySpecialistComments\">\r\n                    <div class=\"col\">\r\n                        <input\r\n                                class=\"px-3 w-75 rounded form-control\"\r\n                                type=\"text\"\r\n                                name=\"specialistComments\"\r\n                                id=\"specialistComments\"\r\n                                (input)=\"onInputSpecialistComment()\"\r\n                                [(ngModel)]=\"this.phase2.specialistComment\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\"  *ngIf=\"this.displaySpecialistComments && !this.displaySelectTemporaryAmountOfDays\" >\r\n            <div class=\"py-3\">\r\n                <div class=\"row\" >\r\n                    <div class=\"col\">\r\n                        <label class=\"px-3\" for=\"proposedDate\">Proposed Implementation Date: </label>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input class=\" px-3 rounded w-75 form-control\"\r\n                               type=\"text\"\r\n                               id=\"proposedDate\"\r\n                               name=\"proposedDate\"\r\n                               autocomplete=\"off\"\r\n                               bsDatepicker\r\n                               [bsConfig]=\"datepickerConfig\"\r\n                               (click)=\"onSelectProposedImplementationDate()\"\r\n                               [(ngModel)]=\"this.phase2.proposedImplementationDate\"  >\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"this.displayRecommendOrOppose || this.emergencySelected\">\r\n            <div class=\"row\" >\r\n                <div class=\"col\">\r\n                    <label class=\"px-3\" for=\"recommend/oppose\">Recommend Or Oppose change:</label>\r\n                </div>\r\n                <div class=\"col\">\r\n\r\n                    <select class=\"px-3 rounded w-75 form-control\"\r\n                            id=\"recommend/oppose\"\r\n                            name=\"recommend/oppose\"\r\n                            (change)=\"onSelectRecommendOrOppose($event)\" >\r\n                        <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                        <option [disabled]=\"this.phase2.changeSuccessfullyTested === 'no'\" value=\"Recommend\" >Recommend</option>\r\n                        <option [disabled]=\"this.phase2.changeSuccessfullyTested === 'no'\" value=\"Oppose\">Oppose</option>\r\n                        <<option value=\"re-test\">Re-Test</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div  class=\"row px-3\">\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\">\r\n                    <button class=\"btn btn-outline-danger btn-rounded w-100  my-4 waves-effect z-depth-0\"\r\n                            id=\"cancel\"\r\n                            (click)=\"onCancel()\"> Cancel\r\n                    </button>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\" >\r\n                    <button [disabled]=\"!this.activateSubmitButton\"\r\n                            class=\"btn btn-outline-info btn-rounded w-100 my-4  waves-effect z-depth-0 disabled\"\r\n                            id=\"submit\"\r\n                            (click)=\"onSubmit()\"> Submit\r\n                    </button>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/phase2/phase2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/phase2/phase2.component.ts ***!
  \**************************************************/
/*! exports provided: Phase2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase2Component", function() { return Phase2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_phase2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/phase2.service */ "./src/app/services/phase2.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/




var Phase2Component = /** @class */ (function () {
    function Phase2Component(phase2service, router) {
        this.phase2service = phase2service;
        this.router = router;
        this.localObj = null;
        this.formData = new FormData();
        this.files = [];
        this.filesForUpload = [];
        this.availableNumberOfTemporaryDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        this.availablePriorities = ['EMERGENCY', 'Urgent', 'Safety', 'Improvement', 'Other'];
        this.availablePeriods = ['Permanent', 'Temporary', 'Trial'];
        this.availableImpacts = ['CLIENTS', 'OPERATIONS', 'TECHNICAL'];
        this.availableNatureOfChange = ['National', 'Local', 'Regional'];
        this.availableEosSystems = ['AFTN', 'AMHS', 'ANAIS', 'A-SMGCS', 'ATIS', 'AWOS', 'CAD', 'CAMU', 'DAID', 'DATIS', 'DIESEL BACKUP',
            'DITTEL', 'DME', 'FRS', 'FWD RELAY', 'ILS', 'IVSAT', 'MLAT', 'NDB', 'OTN', 'OTN', 'RADAR', 'SATELLITE', 'SMR', 'SQUIB', 'TERNS',
            'TITAN', 'TOPSKY', 'UPS', 'VCCS', 'VHF', 'VOR', 'VPN'];
        this.RFC = {
            dateRequested: undefined,
            requestDescription: undefined,
            reasonForRequest: undefined,
            CSRF_token: undefined,
            site_ID: undefined
        };
        this.phase2 = {
            CCR_ID: undefined,
            TCB_CRF_ID: undefined,
            requestPriority: undefined,
            predictedImpact: undefined,
            changePeriod: undefined,
            temporaryPeriodStartDate: undefined,
            temporaryPeriodNumberOfDays: undefined,
            temporaryPeriodEndDate: undefined,
            natureOfChange: undefined,
            eosSystem: undefined,
            configurationItems: undefined,
            change: {
                hardware: false,
                software: false,
                firmware: false
            },
            additionalDocuments: false,
            documentIds: undefined,
            numberOfPages: undefined,
            estimatedImpacts: {
                operations: undefined,
                clients: undefined,
                technical: undefined
            },
            problemReportRaised: false,
            problemReportRef: undefined,
            changeSuccessfullyTested: undefined,
            changeNotSuccessfullyTestedReason: undefined,
            specialistComment: undefined,
            proposedImplementationDate: undefined,
            recommend_oppose: undefined,
            CSRF_token: undefined
        };
        var minDate = new Date();
        this.datepickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { dateInputFormat: 'YYYY-MM-DD' }, { showWeekNumbers: false }, { minDate: minDate });
    }
    Phase2Component.prototype.onSelectPriority = function ($event) {
        var prioritySelect = document.getElementById('priority');
        if ($event.target.value === '1') {
            prioritySelect.classList.add('text-danger');
            this.emergencySelected = true;
            this.displaySpecialistComments = true;
            this.displayPredictedRisks = false;
            this.displayPredictedRisks = false;
            this.displayChangePeriod = false;
            this.displayNatureOfChange = false;
            this.displayEOSystem = false;
            this.displayTCB_CRF_ID = false;
            this.displayConfigurationItems = false;
            this.displayChangeType = false;
            this.displayTemporaryDateSelection = false;
            this.displayAdditionalAttachedDocuments = false;
            this.displayEstimatedImpact = false;
            this.displayEstimatedImpactOps = false;
            this.displayEstimatedImpactClients = false;
            this.displayEstimatedImpactTech = false;
            this.displayProblemReportRaised = false;
            this.displayChangePreTested = false;
            this.displayChangeNotSuccessfullyTestedReason = false;
            this.displayProposedImplementationDate = false;
        }
        else if (prioritySelect.classList.contains('text-danger') && $event.target.value !== 'Emergency') {
            this.displayPredictedRisks = true;
            this.displaySpecialistComments = false;
            this.emergencySelected = false;
            prioritySelect.classList.remove('text-danger');
        }
        else {
            this.displayPredictedRisks = true;
            this.displaySpecialistComments = false;
            this.emergencySelected = false;
        }
        this.phase2.requestPriority = $event.target.value;
    };
    Phase2Component.prototype.onSelectChangePeriod = function ($event) {
        switch ($event.target.value) {
            case '1':
                this.displayNatureOfChange = true;
                this.displaySelectTemporaryAmountOfDays = false;
                break;
            case '2':
                this.displaySelectTemporaryAmountOfDays = true;
                this.displayNatureOfChange = false;
                break;
            case '3':
                this.displayNatureOfChange = false;
                this.displaySelectTemporaryAmountOfDays = true;
                break;
        }
        this.phase2.changePeriod = $event.target.value;
    };
    Phase2Component.prototype.onSelectNumberOfTemporaryDays = function ($event) {
        this.phase2.temporaryPeriodNumberOfDays = $event.target.value;
        this.displayTemporaryDateSelection = true;
    };
    Phase2Component.prototype.onSelectTemporaryStartDate = function ($event) {
        var maxDate = new Date();
        maxDate.setDate($event.getDate() + parseInt('' + this.phase2.temporaryPeriodNumberOfDays, 10));
        this.phase2.temporaryPeriodEndDate = maxDate;
        this.displayNatureOfChange = true;
    };
    Phase2Component.prototype.onSelectImpact = function ($event) {
        this.phase2.predictedImpact = $event.target.value;
        if (this.phase2.predictedImpact !== undefined) {
            this.displayChangePeriod = true;
            switch (this.phase2.predictedImpact) {
                case '1':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = true;
                    this.displayEstimatedImpactTech = false;
                    this.displayEstimatedImpactOps = false;
                    this.phase2.estimatedImpacts.technical = undefined;
                    this.phase2.estimatedImpacts.operations = undefined;
                    break;
                case '2':
                    this.displayProblemReportRaised = true;
                    this.displayEstimatedImpactClients = false;
                    this.displayEstimatedImpactTech = false;
                    this.displayEstimatedImpactOps = false;
                    this.phase2.estimatedImpacts.clients = undefined;
                    this.phase2.estimatedImpacts.technical = undefined;
                    this.phase2.estimatedImpacts.operations = undefined;
                    break;
                case '3':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = false;
                    this.displayEstimatedImpactTech = false;
                    this.displayEstimatedImpactOps = true;
                    this.phase2.estimatedImpacts.clients = undefined;
                    this.phase2.estimatedImpacts.technical = undefined;
                    break;
                case '4':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = true;
                    this.displayEstimatedImpactTech = false;
                    this.displayEstimatedImpactOps = true;
                    this.phase2.estimatedImpacts.technical = undefined;
                    break;
                case '5':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = false;
                    this.displayEstimatedImpactTech = true;
                    this.displayEstimatedImpactOps = true;
                    this.phase2.estimatedImpacts.clients = undefined;
                    break;
                case '6':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = true;
                    this.displayEstimatedImpactTech = true;
                    this.displayEstimatedImpactOps = true;
                    break;
                case '7':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = true;
                    this.displayEstimatedImpactTech = true;
                    this.displayEstimatedImpactOps = false;
                    this.phase2.estimatedImpacts.operations = undefined;
                    break;
                case '8':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = false;
                    this.displayEstimatedImpactTech = true;
                    this.displayEstimatedImpactOps = false;
                    this.phase2.estimatedImpacts.clients = undefined;
                    this.phase2.estimatedImpacts.operations = undefined;
                    break;
            }
        }
        else {
            this.displayChangePeriod = false;
        }
    };
    Phase2Component.prototype.onSelectNatureOfChange = function ($event) {
        if (this.phase2.natureOfChange !== undefined) {
            this.displayEOSystem = true;
        }
        else {
            this.displayEOSystem = false;
        }
    };
    Phase2Component.prototype.onSelectEosSystem = function ($event) {
        var _this = this;
        this.phase2.eosSystem = $event.target.value;
        this.phase2service.getEOSTCBNumber(this.phase2.eosSystem).subscribe(function (data) {
            var tcb = parseInt(data.latest_TCB_number, 10);
            tcb += 1;
            for (var _i = 0, _a = _this.availableEosSystems; _i < _a.length; _i++) {
                var eos = _a[_i];
                if (eos[0] === $event.target.value) {
                    _this.phase2.TCB_CRF_ID = eos[1] + tcb;
                }
            }
        });
        // database reference to eos tcb number + 1
        this.displayTCB_CRF_ID = true;
        this.displayConfigurationItems = true;
    };
    Phase2Component.prototype.onSelectChangeTypeHW = function (e) {
        if (e.target.checked) {
            this.phase2.change.hardware = true;
        }
        else {
            this.phase2.change.hardware = false;
        }
        if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware) {
            this.displayAdditionalAttachedDocuments = true;
        }
        else {
            this.displayAdditionalAttachedDocuments = false;
        }
    };
    Phase2Component.prototype.onSelectChangeTypeSW = function (e) {
        if (e.target.checked) {
            this.phase2.change.software = true;
        }
        else {
            this.phase2.change.software = false;
        }
        if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware) {
            this.displayAdditionalAttachedDocuments = true;
        }
        else {
            this.displayAdditionalAttachedDocuments = false;
        }
    };
    Phase2Component.prototype.onSelectChangeTypeFW = function (e) {
        if (e.target.checked) {
            this.phase2.change.firmware = true;
        }
        else {
            this.phase2.change.firmware = false;
        }
        if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware) {
            this.displayAdditionalAttachedDocuments = true;
        }
        else {
            this.displayAdditionalAttachedDocuments = false;
        }
    };
    Phase2Component.prototype.onSelectAdditionalDocuments = function (e) {
        if (e.target.value === 'yes') {
            this.phase2.additionalDocuments = true;
            this.displayEstimatedImpact = false;
        }
        else if (e.target.value === 'no') {
            // this.files = [];
            this.phase2.additionalDocuments = false;
            this.phase2.numberOfPages = undefined;
            this.displayEstimatedImpact = true;
        }
    };
    // first file uploader start
    Phase2Component.prototype.dropped = function (files) {
        var _this = this;
        this.displayEstimatedImpact = true;
        // this.files = files;
        this.files.push(files);
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    _this.filesForUpload.push(file);
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
            }
        }
    };
    Phase2Component.prototype.fileOver = function (event) {
    };
    Phase2Component.prototype.populateForm = function () {
        for (var i = 0; i < this.filesForUpload.length; i++) {
            this.formData.append('file[]', this.filesForUpload[i], this.filesForUpload[i].name);
        }
    };
    Phase2Component.prototype.removeFile = function (index) {
        this.filesForUpload.splice(index, 1);
    };
    Phase2Component.prototype.fileLeave = function (event) {
    };
    // first file uploader end
    Phase2Component.prototype.estimatedImpact = function ($event) {
        if (this.phase2.estimatedImpacts.technical !== undefined ||
            this.phase2.estimatedImpacts.clients !== undefined ||
            this.phase2.estimatedImpacts.operations !== undefined) {
            this.displayProblemReportRaised = true;
        }
        else {
            this.displayProblemReportRaised = false;
        }
    };
    Phase2Component.prototype.onSelectReportRaised = function (e) {
        if (e.target.value === 'yes') {
            this.displayChangePreTested = false;
            this.phase2.problemReportRaised = true;
        }
        else if (e.target.value === 'no') {
            this.displayChangePreTested = true;
            this.phase2.problemReportRef = undefined;
            this.phase2.problemReportRaised = false;
        }
    };
    Phase2Component.prototype.onInputProblemReportRef = function () {
        this.displayChangePreTested = true;
    };
    Phase2Component.prototype.onSelectPreTested = function (e) {
        if (e.target.value === 'yes') {
            this.phase2.changeSuccessfullyTested = 'yes';
            this.displayChangeNotSuccessfullyTestedReason = false;
            this.displaySpecialistComments = true;
            this.phase2.changeNotSuccessfullyTestedReason = undefined;
            if (this.displaySelectTemporaryAmountOfDays) {
                this.displayRecommendOrOppose = true;
            }
        }
        else if (e.target.value === 'no') {
            this.phase2.changeNotSuccessfullyTestedReason = undefined;
            this.phase2.changeSuccessfullyTested = 'no';
            this.displayChangeNotSuccessfullyTestedReason = true;
            this.displaySpecialistComments = false;
            this.displayRecommendOrOppose = false;
        }
        else if (e.target.value === 'na') {
            this.phase2.changeSuccessfullyTested = 'na';
            this.displayChangeNotSuccessfullyTestedReason = false;
            this.displaySpecialistComments = true;
            this.phase2.changeNotSuccessfullyTestedReason = undefined;
            if (this.displaySelectTemporaryAmountOfDays) {
                this.displayRecommendOrOppose = true;
            }
        }
    };
    Phase2Component.prototype.onUnsuccessfulTestReason = function () {
        this.displaySpecialistComments = true;
        if (this.displaySelectTemporaryAmountOfDays) {
            this.displayRecommendOrOppose = true;
        }
    };
    Phase2Component.prototype.onInputSpecialistComment = function () {
        this.displayProposedImplementationDate = true;
    };
    Phase2Component.prototype.onSelectProposedImplementationDate = function () {
        this.displayRecommendOrOppose = true;
    };
    Phase2Component.prototype.onSelectRecommendOrOppose = function ($event) {
        this.phase2.recommend_oppose = $event.target.value;
        var submitButton = document.getElementById('submit');
        submitButton.classList.remove('disabled');
        this.activateSubmitButton = true;
    };
    Phase2Component.prototype.onCancel = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: 'Are you sure?',
            text: 'You will lose all progress on this form',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this.router.navigate(['home']);
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    title: 'Cancelled',
                    text: 'Your may continue to make changes',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    Phase2Component.prototype.onSubmit = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: 'Are you sure?',
            text: 'You won\'t be able make changes to your submission',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                if (_this.localObj !== null) {
                    _this.phase2service.updatePhase2(_this.phase2, _this.localObj.ID).subscribe(function (data) {
                        if (data.success) {
                            if (_this.phase2.additionalDocuments) {
                                _this.populateForm();
                                _this.formData.append('passedID', _this.localObj.ID);
                                _this.phase2service.upload(_this.formData).subscribe(function (data1) {
                                    if (data1.success) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                                            title: 'Updated',
                                            text: 'Phase 3 successfully updated',
                                            type: 'success',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                    else {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                                            title: 'Failure',
                                            text: data.message,
                                            type: 'error',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
                else {
                    _this.phase2service.submitPhase2(_this.phase2).subscribe(function (data1) {
                        if (data1.success) {
                            if (_this.phase2.additionalDocuments === true) {
                                _this.populateForm();
                                _this.phase2service.upload(_this.formData).subscribe(function (data) {
                                    if (data.success) {
                                        _this.phase2.documentIds = data.generatedName;
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                                            title: 'Received',
                                            text: 'Your files have been received',
                                            type: 'success',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                    else {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                                            title: 'Files not uploaded',
                                            text: data.message,
                                            type: 'error',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                });
                            }
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                                title: 'Failed',
                                text: data1.message,
                                type: 'error',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                                title: 'Received',
                                text: 'Thank you for your Upload all relevant personal have been updated',
                                type: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            _this.router.navigate(['home']);
                        }
                    });
                }
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    title: 'Cancelled',
                    text: 'Your may continue to make changes',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    Phase2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.phase2service.getCSRFToken().subscribe(function (data) {
            _this.phase2.CSRF_token = data.tokenValue;
        });
        this.phase2service.getPageData().subscribe(function (data) {
            _this.availablePriorities = data[0];
            _this.availableImpacts = data[1];
            _this.availablePeriods = data[2];
            _this.availableNatureOfChange = data[3];
            _this.availableEosSystems = data[4];
        });
        this.phase1 = this.phase2service.getPhase1();
        if (this.user == null) {
            this.phase2service.getUserByID(this.phase1.user_ID).subscribe(function (data) {
                _this.user = data.firstName + ' ' + data.lastName;
            });
        }
        this.localObj = this.phase2service.getObj();
        if (this.phase1 != null) {
            this.RFC.requestDescription = this.phase1.requested_change;
            this.RFC.reasonForRequest = this.phase1.description;
            this.RFC.dateRequested = this.phase1.start_time;
            this.phase2.CCR_ID = this.phase1.ID;
            this.user = this.phase2service.getUser();
        }
        if (this.localObj !== null) {
            this.phase2.TCB_CRF_ID = this.localObj.tcb_crf_id;
            this.phase2.requestPriority = this.localObj.requestPriority_ID;
            if (this.phase2.requestPriority === '1') {
                document.getElementById('priority').classList.add('text-danger');
                this.emergencySelected = true;
                this.displaySpecialistComments = true;
                this.displayPredictedRisks = false;
                this.displayPredictedRisks = false;
                this.displayChangePeriod = false;
                this.displayNatureOfChange = false;
                this.displayEOSystem = false;
                this.displayTCB_CRF_ID = false;
                this.displayConfigurationItems = false;
                this.displayChangeType = false;
                this.displayTemporaryDateSelection = false;
                this.displayAdditionalAttachedDocuments = false;
                this.displayEstimatedImpact = false;
                this.displayEstimatedImpactOps = false;
                this.displayEstimatedImpactClients = false;
                this.displayEstimatedImpactTech = false;
                this.displayProblemReportRaised = false;
                this.displayChangePreTested = false;
                this.displayChangeNotSuccessfullyTestedReason = false;
                this.displayProposedImplementationDate = false;
            }
            else if (document.getElementById('priority').classList.contains('text-danger') && this.phase2.requestPriority !== 'Emergency') {
                this.displayPredictedRisks = true;
                this.displaySpecialistComments = false;
                this.emergencySelected = false;
                document.getElementById('priority').classList.remove('text-danger');
            }
            else {
                this.displayPredictedRisks = true;
                this.displaySpecialistComments = false;
                this.emergencySelected = false;
            }
            this.phase2.predictedImpact = this.localObj.impactRisks_ID;
            if (this.phase2.predictedImpact !== undefined) {
                this.displayChangePeriod = true;
                switch (this.phase2.predictedImpact) {
                    case '1':
                        this.displayProblemReportRaised = false;
                        this.displayEstimatedImpactClients = true;
                        this.displayEstimatedImpactTech = false;
                        this.displayEstimatedImpactOps = false;
                        this.phase2.estimatedImpacts.technical = undefined;
                        this.phase2.estimatedImpacts.operations = undefined;
                        break;
                    case '2':
                        this.displayProblemReportRaised = true;
                        this.displayEstimatedImpactClients = false;
                        this.displayEstimatedImpactTech = false;
                        this.displayEstimatedImpactOps = false;
                        this.phase2.estimatedImpacts.clients = undefined;
                        this.phase2.estimatedImpacts.technical = undefined;
                        this.phase2.estimatedImpacts.operations = undefined;
                        break;
                    case '3':
                        this.displayProblemReportRaised = false;
                        this.displayEstimatedImpactClients = false;
                        this.displayEstimatedImpactTech = false;
                        this.displayEstimatedImpactOps = true;
                        this.phase2.estimatedImpacts.clients = undefined;
                        this.phase2.estimatedImpacts.technical = undefined;
                        break;
                    case '4':
                        this.displayProblemReportRaised = false;
                        this.displayEstimatedImpactClients = true;
                        this.displayEstimatedImpactTech = false;
                        this.displayEstimatedImpactOps = true;
                        this.phase2.estimatedImpacts.technical = undefined;
                        break;
                    case '5':
                        this.displayProblemReportRaised = false;
                        this.displayEstimatedImpactClients = false;
                        this.displayEstimatedImpactTech = true;
                        this.displayEstimatedImpactOps = true;
                        this.phase2.estimatedImpacts.clients = undefined;
                        break;
                    case '6':
                        this.displayProblemReportRaised = false;
                        this.displayEstimatedImpactClients = true;
                        this.displayEstimatedImpactTech = true;
                        this.displayEstimatedImpactOps = true;
                        break;
                    case '7':
                        this.displayProblemReportRaised = false;
                        this.displayEstimatedImpactClients = true;
                        this.displayEstimatedImpactTech = true;
                        this.displayEstimatedImpactOps = false;
                        this.phase2.estimatedImpacts.operations = undefined;
                        break;
                    case '8':
                        this.displayProblemReportRaised = false;
                        this.displayEstimatedImpactClients = false;
                        this.displayEstimatedImpactTech = true;
                        this.displayEstimatedImpactOps = false;
                        this.phase2.estimatedImpacts.clients = undefined;
                        this.phase2.estimatedImpacts.operations = undefined;
                        break;
                }
            }
            this.phase2.changePeriod = this.localObj.changePeriod_ID;
            switch (this.phase2.changePeriod) {
                case '1':
                    this.displayNatureOfChange = true;
                    this.displaySelectTemporaryAmountOfDays = false;
                    break;
                case '2':
                    this.displaySelectTemporaryAmountOfDays = true;
                    this.displayNatureOfChange = false;
                    break;
                case '3':
                    this.displayNatureOfChange = false;
                    this.displaySelectTemporaryAmountOfDays = true;
                    break;
            }
            if (this.localObj.temporaryStartDate !== null && this.localObj.temporaryEndDate !== null && this.localObj.temporaryNoOfDays !== null) {
                this.phase2.temporaryPeriodStartDate = this.localObj.temporaryStartDate;
                this.phase2.temporaryPeriodEndDate = this.localObj.temporaryEndDate;
                this.phase2.temporaryPeriodNumberOfDays = parseInt(this.localObj.temporaryNoOfDays, 10);
                console.log(this.localObj.temporaryNoOfDays);
                this.displayTemporaryDateSelection = true;
                this.displayNatureOfChange = true;
            }
            this.phase2.natureOfChange = this.localObj.natureChange_ID;
            if (this.phase2.natureOfChange !== undefined) {
                this.displayEOSystem = true;
            }
            else {
                this.displayEOSystem = false;
            }
            this.phase2.eosSystem = this.localObj.eos_ID;
            this.phase2.TCB_CRF_ID = this.localObj.tcb_crf_ID;
            this.displayTCB_CRF_ID = true;
            this.displayConfigurationItems = true;
            this.phase2.configurationItems = this.localObj.configurationDescr;
            if (this.localObj.changeTypeHW === '1') {
                this.displayChangeType = true;
                this.phase2.change.hardware = true;
            }
            else {
                this.phase2.change.hardware = false;
            }
            if (this.localObj.changeTypeSW === '1') {
                this.displayChangeType = true;
                this.phase2.change.software = true;
            }
            else {
                this.phase2.change.software = false;
            }
            if (this.localObj.changeTypeFW === '1') {
                this.displayChangeType = true;
                this.phase2.change.firmware = true;
            }
            else {
                this.phase2.change.firmware = false;
            }
            if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware) {
                this.displayAdditionalAttachedDocuments = true;
            }
            else {
                this.displayAdditionalAttachedDocuments = false;
            }
            if (this.localObj.impactRisks_ID !== '2') {
                this.displayEstimatedImpact = true;
            }
            if (this.localObj.impactOnClients !== null) {
                this.displayEstimatedImpact = true;
                this.phase2.estimatedImpacts.clients = this.localObj.impactOnClients;
            }
            if (this.localObj.impactOnOperations !== null) {
                this.displayEstimatedImpact = true;
                this.phase2.estimatedImpacts.operations = this.localObj.impactOnOperations;
            }
            if (this.localObj.impactonTech !== null) {
                this.displayEstimatedImpact = true;
                this.phase2.estimatedImpacts.technical = this.localObj.impactonTech;
            }
            if (this.phase2.estimatedImpacts.technical !== undefined ||
                this.phase2.estimatedImpacts.clients !== undefined ||
                this.phase2.estimatedImpacts.operations !== undefined) {
                this.displayProblemReportRaised = true;
            }
            else {
                this.displayProblemReportRaised = false;
            }
            if (this.localObj.reportRaisedContractor === '1') {
                this.phase2.problemReportRaised = true;
            }
            else {
                this.phase2.problemReportRaised = false;
            }
            if (this.phase2.problemReportRaised) {
                this.displayChangePreTested = false;
            }
            else if (!this.phase2.problemReportRaised) {
                this.displayChangePreTested = true;
                this.phase2.problemReportRef = undefined;
            }
            if (this.localObj.preTestSuccess) {
                this.phase2.changeSuccessfullyTested = 'yes';
            }
            else if (this.localObj.preTestSuccess) {
                this.phase2.changeSuccessfullyTested = 'no';
            }
            else {
                this.phase2.changeSuccessfullyTested = 'na';
            }
            if (this.phase2.changeSuccessfullyTested === 'yes') {
                this.displayChangeNotSuccessfullyTestedReason = false;
                this.displaySpecialistComments = true;
                this.phase2.changeNotSuccessfullyTestedReason = undefined;
                if (this.displaySelectTemporaryAmountOfDays) {
                    this.displayRecommendOrOppose = true;
                }
            }
            else if (this.phase2.changeSuccessfullyTested === 'no') {
                this.phase2.changeNotSuccessfullyTestedReason = this.localObj.reasonUnsucesTest;
                this.displayChangeNotSuccessfullyTestedReason = true;
                this.displaySpecialistComments = false;
                this.displayRecommendOrOppose = false;
            }
            else if (this.phase2.changeSuccessfullyTested === 'na') {
                this.displayChangeNotSuccessfullyTestedReason = false;
                this.displaySpecialistComments = true;
                this.phase2.changeNotSuccessfullyTestedReason = undefined;
                if (this.displaySelectTemporaryAmountOfDays) {
                    this.displayRecommendOrOppose = true;
                }
            }
            this.activateSubmitButton = true;
            var submitButton = document.getElementById('submit');
            submitButton.classList.remove('disabled');
            document.getElementById('cancel').classList.add('invisible');
        }
    };
    Phase2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phase2',
            template: __webpack_require__(/*! ./phase2.component.html */ "./src/app/pages/phase2/phase2.component.html"),
            styles: [__webpack_require__(/*! ./phase2.component.css */ "./src/app/pages/phase2/phase2.component.css")]
        }),
        __metadata("design:paramtypes", [_services_phase2_service__WEBPACK_IMPORTED_MODULE_3__["Phase2Service"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Phase2Component);
    return Phase2Component;
}());



/***/ }),

/***/ "./src/app/pages/phase3/phase3.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/phase3/phase3.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#drop-area {\r\n    border: 2px dashed #ccc;\r\n    border-radius: 20px;\r\n    width: 480px;\r\n    font-family: sans-serif;\r\n    margin: 100px auto;\r\n    padding: 20px;\r\n}\r\n#drop-area.highlight {\r\n    border-color: purple;\r\n}\r\np {\r\n    margin-top: 0;\r\n}\r\n.my-form {\r\n    margin-bottom: 10px;\r\n}\r\n#gallery {\r\n    margin-top: 10px;\r\n}\r\n#gallery img {\r\n    width: 150px;\r\n    margin-bottom: 10px;\r\n    margin-right: 10px;\r\n    vertical-align: middle;\r\n}\r\n.button {\r\n    display: inline-block;\r\n    padding: 10px;\r\n    background: #ccc;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n}\r\n.button:hover {\r\n    background: #ddd;\r\n}\r\n#fileElem {\r\n    display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/phase3/phase3.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/phase3/phase3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Created by Blaine Viljoen(28023374)-->\r\n\r\n<form>\r\n    <div class=\"card secondary-color\">\r\n        <h3 class=\"px-3 text-primary\">Request for Change</h3>\r\n        <div>\r\n            <label class=\"px-3 d-inline-block\">Name of Initiator: {{this.user}}</label>\r\n            <p class=\" px-3 d-inline-block\"></p>\r\n            <label class=\"px-3 d-inline-block\">Date Requested: {{this.phase3Service.phaseData[0][0].start_time}}</label>\r\n            <p class=\"px-3 d-inline-block\"></p>\r\n        </div>\r\n        <label class=\"px-3 \">Requested Change Description: </label>\r\n        <p class=\"px-3\">{{this.phase3Service.phaseData[0][0].requested_change}}</p>\r\n        <label class=\"px-3\">Reason for request: </label>\r\n        <p class=\"px-3\">{{this.phase3Service.phaseData[0][0].description}}</p>\r\n    </div>\r\n        <div id=\"phase2\" style=\"\" class=\"shadow card bg-light mx-auto\">\r\n            <div class=\"form-group\">\r\n                <h3 class=\"px-3 text-primary\">Configuration Data</h3>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm\">\r\n                        <label class=\"px-3\" for=\"priority\">Request Priority</label>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <select ngbPopover=\"Select from the drop down list whether the change request is an EMERGENCY or NON-EMERGENCY (NORMAL).\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"CHANGE REQUEST PRIORITY\"\r\n                                class=\"rounded w-100 form-control\"\r\n                                name=\"priority\"\r\n                                id=\"priority\"\r\n                                disabled>\r\n                            <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                            <option *ngFor=\"let priority of availablePriorities\"  [value]=\"priority[0]\" [selected]=\"this.phase2.requestPriority === priority[0]\">{{priority[1]}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <div>\r\n                            <label class=\"px-3\"  for=\"predictedImpact\"> Predicted Risk/s </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <div>\r\n                            <select ngbPopover=\"Select the appropriate option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"PREDICTED RISK\"\r\n                                    class=\"rounded w-100 form-control\"\r\n                                    name=\"predictedImpact\"\r\n                                    id=\"predictedImpact\"\r\n                                    disabled >\r\n                                <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                                <option *ngFor=\"let impacts of availableImpacts\" [selected]=\"this.phase2.predictedImpact === impacts[0]\"  [value]=\"impacts[0]\" >{{impacts[1]}}</option>\r\n                            </select>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm \"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"row\" >\r\n                    <div class=\"col-sm\">\r\n                        <div >\r\n                            <label class=\"px-3\" for=\"changePeriod\" >Change Period</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <div>\r\n                            <select ngbPopover=\"Specify whether the requested change will be permanent or just temporary by selecting an option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"CHANGE PERIOD\"\r\n                                    class=\"rounded w-100 form-control\"\r\n                                    name=\"changePeriod\"\r\n                                    id=\"changePeriod\"\r\n                                    disabled>\r\n                                <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                                <option *ngFor=\"let period of availablePeriods\"  [value]=\"period[0]\" [selected]=\"this.phase2.changePeriod === period[0]\">{{period[1]}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <div >\r\n                            <label class=\"px-3\" for=\"changePeriod\" >Temporary period number of days</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <div >\r\n                            <select ngbPopover=\"Select the appropriate option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"PREDICTED RISK\"\r\n                                    class=\"rounded w-100 form-control\"\r\n                                    name=\"temporaryNoDays\"\r\n                                    id=\"temporaryNoDays\"\r\n                                    disabled >\r\n                                <option selected=\"selected\" disabled=\"disabled\">Select no. of days</option>\r\n                                <option  *ngFor=\"let day of availableNumberOfTemporaryDays\" [selected]=\"this.phase2.temporaryPeriodNumberOfDays ===  day\" value=\"{{day}}\">{{day}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm\"></div>\r\n                </div>\r\n                <div class=\"row pt-3\">\r\n                    <div class=\"col-sm\">\r\n                        <label class=\"px-3\" for=\"temporaryStartPeriod\" >Temporary period start date:</label>\r\n                    </div>\r\n                    <div class=\"col-sm \">\r\n                        <input class=\"rounded w-100 form-control\"\r\n                               type=\"text\"\r\n                               id=\"temporaryStartPeriod\"\r\n                               name=\"temporaryStartPeriod\"\r\n                               autocomplete=\"off\"\r\n                               bsDatepicker\r\n                               [bsConfig]=\"datepickerConfig\"\r\n                               [(ngModel)]=\"this.phase2.temporaryPeriodStartDate\"\r\n                               disabled\r\n                        >\r\n                    </div>\r\n                    <div class=\"col-sm \"> <label class=\"px-3\" for=\"temporaryEndPeriod\" >Temporary period end date:</label></div>\r\n                    <div class=\"col-sm \">\r\n                        <input  class=\"rounded w-100 form-control\"\r\n                                type=\"text\"\r\n                                id=\"temporaryEndPeriod\"\r\n                                name=\"temporaryEndPeriod\"\r\n                                autocomplete=\"off\"\r\n                                bsDatepicker\r\n                                [bsConfig]=\"datepickerConfig\"\r\n                                [(ngModel)]=\"this.phase2.temporaryPeriodEndDate\"\r\n                                disabled\r\n                                readonly>\r\n                    </div>\r\n                    <div class=\"col-sm \"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" >\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm\">\r\n                        <div>\r\n                            <label class=\"px-3\" for=\"natureOfChange\">Nature of the change</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <div>\r\n                            <select popoverTitle=\"SELECT NATURE OF CHANGE\" ngbPopover=\"Select an option from the drop down list. National = Change affects both Northern and Southern regions. Regional = Either Northern or Southern is affected, but not both. Local = any ATCC or TCU or RT\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                                    class=\"rounded w-100 form-control\"\r\n                                    name=\"natureOfChange\"\r\n                                    id=\"natureOfChange\"\r\n                                    disabled\r\n                                    [(ngModel)]=\"this.phase2.natureOfChange\">\r\n                                <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                                <option *ngFor=\"let change of availableNatureOfChange\"  [value]=\"change[0]\" [selected]=\"this.phase2.natureOfChange === change[0]\">{{change[1]}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <div >\r\n                            <label class=\"px-3\"  for=\"eosSystem\">EOS system</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <div >\r\n                            <select popoverTitle=\"SELECT EOS SYSTEM\" ngbPopover=\"Please select from the drop down list the Essential Operational System (EOS) to which the Trusted Computing Base (TCB) change will be applied.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                                    class=\"w-100 rounded form-control\"\r\n                                    name=\"eosSystem\"\r\n                                    id=\"eosSystem\"\r\n                                    disabled >\r\n                                <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n                                <option *ngFor=\"let eos of availableEosSystems\"  [value]=\"eos[0]\" [selected]=\"this.phase2.eosSystem === eos[0]\" >{{eos[1]}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm \"></div>\r\n                </div>\r\n            </div>\r\n            <!--</div>-->\r\n            <!--    <div class=\"card\">-->\r\n            <div class=\"form-group\">\r\n                <div class=\"row\" >\r\n                    <div class=\"col-sm\">\r\n                        <label class=\"px-3\" for=\"tcbID\">TCB-CRF ID:</label>\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <input popoverTitle=\"CHANGE REQUEST IDENTIFICATION\" ngbPopover=\"The TCB-CRF ID is an unique number relative to an EOS system issued by the TCB-CRF Administrator for every change request submitted for approval and implementation.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                               class=\"rounded form-control\"\r\n                               id=\"tcbID\"\r\n                               name=\"tcbID\"\r\n                               type=\"text\"\r\n                               disabled\r\n                               [(ngModel)]=\"this.phase2.TCB_CRF_ID\"  >\r\n                    </div>\r\n                    <div class=\"col-sm\"></div>\r\n                    <div class=\"col-sm\"></div>\r\n                    <div class=\"col-sm\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" >\r\n                <div >\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm\">\r\n                            <label class=\"px-3\" for=\"configurationItems\">Configuration Items: </label>\r\n                        </div>\r\n                        <div class=\"col\"></div>\r\n                    </div>\r\n                    <div class=\"px-3\">\r\n                        <input  popoverTitle=\"ENTER ALL CONFIGURATION ITEMS\" ngbPopover=\"TECH: Enter any sub system or system component that will be subject to the change e.g. EXTRA HDD, SW VERS., RADAR FEED, DATASET- ANY CHANGE TO THE TCB NEEDS TO BE APPROVED. OPS: Enter short description of the request.  Maximum 250 characters allowed\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                                maxlength=\"250\"\r\n                                class=\"rounded w-75 form-control\"\r\n                                id=\"configurationItems\"\r\n                                name=\"configurationItems\"\r\n                                type=\"text\"\r\n                                disabled\r\n                                [(ngModel)]=\"this.phase2.configurationItems\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div >\r\n                            <label class=\"px-3\">Change Type: </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\"\r\n                         popoverTitle=\"CHANGE TYPE\" ngbPopover=\"Select the type of change. Hardware (HW), Software (SW) or Firmware (FW). One or more of these options must be ticked if affected by the change.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                    >\r\n                        <div>\r\n                            <label class=\"checkbox-inline px-3\">\r\n                                <input type=\"checkbox\"\r\n                                       value=\"HW\"\r\n                                       disabled\r\n                                       [checked]=\"this.phase2.change.hardware\">\r\n                                Hardware\r\n                            </label>\r\n                            <label class=\"checkbox-inline px-3\">\r\n                                <input type=\"checkbox\"\r\n                                       value=\"SW\"\r\n                                       disabled\r\n                                       [checked]=\"this.phase2.change.software\">\r\n                                Software\r\n                            </label>\r\n                            <label class=\"checkbox-inline px-3\">\r\n                                <input type=\"checkbox\"\r\n                                       value=\"FW\"\r\n                                       disabled\r\n                                       [checked]=\"this.phase2.change.firmware\">\r\n                                Firmware\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"row pb-3\">\r\n                    <div class=\"col\">\r\n                        <label class=\"px-3\" for=\"numberOfPages\">Number of Pages (Documents): </label>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input class=\"px-3 form-control rounded\"\r\n                               disabled=\"true\"\r\n                               type=\"number\"\r\n                               name=\"numberOfPages\"\r\n                               id=\"numberOfPages\"\r\n                               [(ngModel)]=\"this.filesForUpload.length\">\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                </div>\r\n                <div class=\"px-3\">\r\n                    <div class=\"upload-table px-3\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th>Name:</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody class=\"upload-name-style\">\r\n                            <tr *ngFor=\"let item of filesForUpload, index as i\">\r\n                                <td><strong>{{ item.name }}</strong></td>\r\n                                <td class=\"px-3\" (click)=\"removeFile(i)\" style=\"cursor: pointer;\">&#10005;</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" >\r\n                <label class=\"px-3\">Estimated Impact: </label>\r\n                <div class=\"px-3\">\r\n                    <div>\r\n                        <label for=\"operationsImpact\" class=\"\">Operations: </label>\r\n                        <br>\r\n                        <input popoverTitle=\"IMPACT=FUNCTIONAL/PROCEDURAL/etc\" ngbPopover=\"Operations: e.g. NORM mode will be down, Redundency lost, No new FPLs, Operator Handbooks\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                               class=\"w-75 rounded form-control\"\r\n                               type=\"text\"\r\n                               id=\"operationsImpact\"\r\n                               name=\"operationsImpact\"\r\n                               disabled\r\n                               [(ngModel)]=\"this.phase2.estimatedImpacts.operations\">\r\n                    </div>\r\n                    <div>\r\n                        <label for=\"clientsImpact\" class=\"\">Clients: </label>\r\n                        <br>\r\n                        <input popoverTitle=\"IMPACT=FUNCTIONAL/PROCEDURAL/etc\" ngbPopover=\"Clients: External and Internal - loss of service such as slot information, procedural changes, etc.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                               class=\" w-75 rounded form-control\"\r\n                               type=\"text\"\r\n                               id=\"clientsImpact\"\r\n                               name=\"clientsImpact\"\r\n                               disabled\r\n                               [(ngModel)]=\"this.phase2.estimatedImpacts.clients\">\r\n                    </div>\r\n                    <div>\r\n                        <label for=\"technicalImpact\" class=\"\">Technical: </label>\r\n                        <br>\r\n                        <input popoverTitle=\"IMPACT=FUNCTIONAL/PROCEDURAL/etc\" ngbPopover=\"Technical: Node Down, LAN switch down, Documents\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                               class=\" w-75 rounded form-control\"\r\n                               type=\"text\"\r\n                               id=\"technicalImpact\"\r\n                               name=\"technicalImpact\"\r\n                               disabled\r\n                               [(ngModel)]=\"this.phase2.estimatedImpacts.technical\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <label class=\"px-3\">Problem Report raised with Contractor?</label>\r\n                    </div>\r\n                    <div class=\"col\"\r\n                         popoverTitle=\"PROBLEM REPORT RAISED?\" ngbPopover=\"Specify yes or no whether a problem request or report has been raised with the contractor by selecting the appropriate check box with a left-mouse-button click.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                    >\r\n                        <Label class=\"radio-inline px-3\">\r\n                            <input type=\"radio\"\r\n                                   name=\"reportRaised\"\r\n                                   value=\"yes\"\r\n                                   disabled\r\n                                   [checked]=\"this.phase2.problemReportRaised\">\r\n                            Yes\r\n                        </Label>\r\n                        <Label class=\"radio-inline px-3\">\r\n                            <input type=\"radio\"\r\n                                   name=\"reportRaised\"\r\n                                   value=\"no\"\r\n                                   disabled\r\n                                   [checked]=\"!this.phase2.problemReportRaised\">\r\n                            No\r\n                        </Label>\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                </div>\r\n                <div >\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <label for=\"problemReportRef\" class=\"px-3\">Problem Report Reference Number: </label>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input popoverTitle=\"PROBLEM REPORT REFERENCE\" ngbPopover=\"Enter the problem report reference number here. The problem report refers to a report that was sent to the contractor to improve a functionality or solve a problem on the system. Can be a PR, ECR, PCR, CR, etc.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                                   class=\"w-100 rounded form-control\"\r\n                                   type=\"text\"\r\n                                   name=\"problemReportRef\"\r\n                                   id=\"problemReportRef\"\r\n                                   disabled\r\n                                   [(ngModel)]=\"this.phase2.problemReportRef\">\r\n                        </div>\r\n                        <div class=\"col\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" >\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <label class=\"px-3\">Change successfully pre-tested ?</label>\r\n                        </div>\r\n                        <div class=\"col\"\r\n                             popoverTitle=\"CHANGE SUCCESSFULLY PRE-TESTED ?\" ngbPopover=\"Specify whether pre-tests or validations concerning the change were successful by selecting a check box accordingly with the left-mouse button.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                        >\r\n                            <Label class=\"radio-inline px-3\">\r\n                                <input type=\"radio\"\r\n                                       name=\"preTested\"\r\n                                       value=\"yes\"\r\n                                       disabled\r\n                                       [checked]=\"this.phase2.changeSuccessfullyTested === 'yes'\">\r\n                                Yes\r\n                            </Label>\r\n                            <Label class=\"radio-inline px-3\">\r\n                                <input type=\"radio\"\r\n                                       name=\"preTested\"\r\n                                       value=\"no\"\r\n                                       disabled\r\n                                       [checked]=\"this.phase2.changeSuccessfullyTested === 'no'\">\r\n                                No\r\n                            </Label>\r\n                            <Label class=\"radio-inline px-3\">\r\n                                <input type=\"radio\"\r\n                                       name=\"preTested\"\r\n                                       value=\"na\"\r\n                                       disabled\r\n                                       [checked]=\"this.phase2.changeSuccessfullyTested === 'na'\">\r\n                                N/A\r\n                            </Label>\r\n                        </div>\r\n                        <div class=\"col\"></div>\r\n                    </div>\r\n                    <div class=\"px-3\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <label for=\"changeNotSuccessfullyTestedReason\" class=\"\">Reason for unsuccessful test: </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input popoverTitle=\"Reason for unsuccessful testing\" ngbPopover=\"If the tests were unsuccessful please provide the reason here\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\r\n                                       class=\"w-75 rounded form-control\"\r\n                                       type=\"text\"\r\n                                       id=\"changeNotSuccessfullyTestedReason\"\r\n                                       name=\"changeNotSuccessfullyTestedReason\"\r\n                                       disabled\r\n                                       [(ngModel)]=\"this.phase2.changeNotSuccessfullyTestedReason\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--        <div class=\"form-group\">-->\r\n            <!--            <div class=\"row\">-->\r\n            <!--                <div class=\"col\">-->\r\n            <!--                    <label class=\"px-3\">Request submitted to all concerned parties ?</label>-->\r\n            <!--                </div>-->\r\n            <!--                <div class=\"col\">-->\r\n            <!--                    <Label class=\"radio-inline px-3\"><input type=\"radio\" name=\"submittedToAll\" value=\"yes\"  (click)=\"onSelectSubmittedToAllConcerned($event)\">Yes</Label>-->\r\n            <!--                    <Label class=\"radio-inline px-3\"><input type=\"radio\" name=\"submittedToAll\" value=\"no\"   (click)=\"onSelectSubmittedToAllConcerned($event)\" >No</Label>-->\r\n            <!--                </div>-->\r\n            <!--                <div class=\"col\"></div>-->\r\n            <!--            </div>-->\r\n\r\n            <!--            <div  class=\"px-3\" *ngIf=\"!this.phase2.submittedToAllParties\">-->\r\n            <!--                <div class=\"row\">-->\r\n            <!--                    <div class=\"col\">-->\r\n            <!--                        <label class=\"\">Reason why not submitted to all concerned parties?</label>-->\r\n            <!--                    </div>-->\r\n            <!--                </div>-->\r\n            <!--                <div class=\"row\">-->\r\n            <!--                    <div class=\"col\">-->\r\n            <!--                        <input class=\" w-75 rounded form-control\" type=\"text\" name=\"requestNotSubmittedToAllParties\" [(ngModel)]=\"this.phase2.notSubmittedToAllPartiesReason\">-->\r\n            <!--                    </div>-->\r\n            <!--                </div>-->\r\n            <!--            </div>-->\r\n            <!--        </div>-->\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"px-3\" >\r\n                    <div class=\"row\" >\r\n                        <div class=\"col\">\r\n                            <label for=\"specialistComments\" >Specialist comments</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" >\r\n                        <div class=\"col\">\r\n                            <input\r\n                                    class=\"px-3 w-75 rounded form-control\"\r\n                                    type=\"text\"\r\n                                    name=\"specialistComments\"\r\n                                    id=\"specialistComments\"\r\n                                    disabled\r\n                                    [(ngModel)]=\"this.phase2.specialistComment\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\"  >\r\n                <div class=\"py-3\">\r\n                    <div class=\"row\" >\r\n                        <div class=\"col\">\r\n                            <label class=\"px-3\" for=\"proposedDate\">Proposed Implementation Date: </label>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <input class=\" px-3 rounded w-75 form-control\"\r\n                                   type=\"text\"\r\n                                   id=\"proposedDate\"\r\n                                   name=\"proposedDate\"\r\n                                   autocomplete=\"off\"\r\n                                   bsDatepicker\r\n                                   disabled\r\n                                   [bsConfig]=\"datepickerConfig\"\r\n                                   [(ngModel)]=\"this.phase2.proposedImplementationDate\"  >\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    <div class=\"shadow card bg-light mx-auto\">\r\n        <div class=\"form-group\">\r\n            <h3 class=\"pt-3 px-3 text-primary\">CCR Phase 3: Sign Off</h3>\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">Implementation successful?</label>\r\n                </div>\r\n                <div ngbPopover=\"Select 'Yes' or 'No' whether the change was successfully implemented or not. By left-mouse-button clicking on the appropriate check box the selection is made.\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST SUCCESSFUL IMPLEMENTATION\"\r\n                        class=\"col\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"implementationSuccess\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectImplementationSuccessful($event)\"\r\n                               [checked]=\"this.phase3.implementationSuccessful\"\r\n                        >\r\n                        Yes\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"implementationSuccess\"\r\n                               value=\"no\"\r\n                               (click)=\"onSelectImplementationSuccessful($event)\"\r\n                               [checked]=\"!this.phase3.implementationSuccessful\"\r\n                        >\r\n                        No\r\n                    </Label>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n            <div class=\"row pt-3 px-3\" *ngIf=\"!this.phase3.implementationSuccessful&&this.showImpChange\">\r\n                    <div class=\"col\">\r\n                        <label for=\"abortRegress\">Select Aborted or Regressed: </label>\r\n                    </div>\r\n                    <div class=\"col pl-3\">\r\n                        <ngx-select-dropdown\r\n                                ngbPopover=\"Select from the drop down list whether the change request has either been Aborted or Regressed.\"\r\n                                triggers=\"mouseenter:mouseleave\"\r\n                                placement=\"right\"\r\n                                popoverTitle=\"CHANGE REQUEST ABORT/REGRESS\"\r\n                                id=\"abortRegress\"\r\n                                name=\"abortRegress\"\r\n                                (change)=\"onSelectAbortRegress($event)\"\r\n                                [multiple]=\"false\"\r\n                                [(ngModel)]=\"this.phase3.abortRegress\"\r\n                                [options]=\"abortOrRegress\"\r\n                        ></ngx-select-dropdown>\r\n                    </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.abort||this.phase3.regress\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3 pt-2\" for=\"abortRegressReason\">Reason:</label>\r\n                </div>\r\n                <div ngbPopover=\"Please provide any relevant information as to why this change request was aborted/regressed.\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST ABORT/REGRESS REASON\"\r\n                        class=\"col-sm\">\r\n                    <textarea\r\n                            type=\"text\"\r\n                            id=\"abortRegressReason\"\r\n                            name=\"abortRegressReason\"\r\n                            class=\"px-3 rounded form-control\"\r\n                            rows=\"2\"\r\n                            [(ngModel)]=\"this.phase3.abortRegressReason\"\r\n                            (ngModelChange)=\"abortRegressReasonCheck()\">{{this.phase3.abortRegressReason}}</textarea>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.regress\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">Already Regressed?</label>\r\n                </div>\r\n                <div class=\"col\"\r\n                     ngbPopover=\"Please select if regression has already occurred\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST ALREADY REGRESSED?\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"alreadyRegressed\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectAlreadyRegressed($event)\"\r\n                               [checked]=\"this.phase3.alreadyRegressed\"\r\n                        >\r\n                        Yes\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"alreadyRegressed\"\r\n                               value=\"no\"\r\n                               (click)=\"onSelectAlreadyRegressed($event)\"\r\n                               [checked]=\"!this.phase3.alreadyRegressed\"\r\n                        >\r\n                        No\r\n                    </Label>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n            <div class=\"row pt-3\" *ngIf=\"!this.phase3.alreadyRegressed && this.showSched\">\r\n                <div class=\"col\">\r\n                    <label class=\"pl-3\" for=\"schedRegressDate\">Scheduled Regression Date: </label>\r\n                </div>\r\n                <div ngbPopover=\"If for some reason a regression was required after the change was implemented but could not take place for whatever reason, it will be required to schedule a regression as soon as possible. Please select a date for the regression of the change request.\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST REGRESSION DATE\"\r\n                     class=\"col\" >\r\n                    <input class=\"rounded w-100 form-control\"\r\n                           type=\"text\"\r\n                           id=\"schedRegressDate\"\r\n                           name=\"schedRegressDate\"\r\n                           autocomplete=\"off\"\r\n                           [bsConfig]=\"datepickerConfig\"\r\n                           [(ngModel)]=\"this.phase3.schedRegressionDate\"\r\n                           bsDatepicker\r\n                           (ngModelChange)=\"schedRegressCheck()\">\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.implementationSuccessful&&this.showImpChange\">\r\n                <div class=\"col-sm\">\r\n                    <div >\r\n                        <label class=\"px-3\" for=\"NoDays\" >TCB number of days</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm\">\r\n                    <div>\r\n                        <select ngbPopover=\"Select the appropriate option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"PREDICTED RISK\"\r\n                                class=\"rounded w-100 form-control\"\r\n                                name=\"NoDays\"\r\n                                id=\"NoDays\"\r\n                                (change)=\"onSelectTCBNumberOfDays($event)\" >\r\n                            <option selected=\"selected\" disabled=\"disabled\">Select no. of days</option>\r\n                            <option  *ngFor=\"let day of numberOfDays\" value=\"{{day}}\">{{day}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.implementationSuccessful&&this.showTCBdatepicker\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\" for=\"tcbEvalPeriod\" >TCB evaluation start date:</label>\r\n                </div>\r\n                <div ngbPopover=\"This field refers to an evaluation period required to validate the success of the change over a longer period of time. The TCBCP administrator must enter a start date and end date  not exceeding 31 days in total.\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST TCB EVALUATION PERIOD\"\r\n                     class=\"col-sm\" >\r\n                    <input class=\"rounded w-100 form-control\"\r\n                           type=\"text\"\r\n                           id=\"tcbEvalPeriod\"\r\n                           name=\"tcbEvalPeriod\"\r\n                           autocomplete=\"off\"\r\n                           bsDatepicker\r\n                           [bsConfig]=\"datepickerConfig\"\r\n                           [(ngModel)]=\"this.phase3.tcbEvalStart\"\r\n                           (ngModelChange)=\"onSelectTCBEval($event)\"\r\n                    >\r\n                </div>\r\n                <div class=\"col-sm \">\r\n                    <input  class=\"rounded w-100 form-control\"\r\n                            type=\"text\"\r\n                            id=\"TCBEndPeriod\"\r\n                            name=\"TCBEndPeriod\"\r\n                            autocomplete=\"off\"\r\n                            bsDatepicker\r\n                            [bsConfig]=\"datepickerConfig\"\r\n                            [(ngModel)]=\"this.phase3.tcbEvalEnd\"\r\n                            disabled\r\n                            readonly>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.implementationSuccessful&&this.showTCBdatepicker\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">Additional documents?</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"additionalDocs\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectAdditionalDocs($event)\"\r\n                        >\r\n                        Yes\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"additionalDocs\"\r\n                               value=\"no\"\r\n                               (click)=\"onSelectAdditionalDocs($event)\"\r\n                        >\r\n                        No\r\n                    </Label>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.additionalDocs\">\r\n                <div class=\"px-3 w-100\"\r\n                     ngbPopover=\"Please drag and drop or select any relevant files that need to uploaded and linked with this respective change request\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST ADDITIONAL DOCUMENTS\">\r\n                    <ngx-file-drop multiple=\"true\" dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\r\n                                   (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n                        <ng-template  ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n                            Please drag and drop your additional files here\r\n                            <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n                        </ng-template>\r\n                    </ngx-file-drop>\r\n                    <div class=\"upload-table px-3\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th>Name:</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody class=\"upload-name-style\">\r\n                            <tr *ngFor=\"let item of filesForUpload, index as i\">\r\n                                <td><strong>{{ item.name }}</strong></td>\r\n                                <td class=\"px-3\" (click)=\"removeFile(i)\" style=\"cursor: pointer;\">&#10005;</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.additionalDocs\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">All Items Updated?</label>\r\n                </div>\r\n                <div ngbPopover=\"At the end of the update period select whether all update items were updated by selecting the 'Yes' check box with the left-mouse-button. It is important to adhere to the update period to achieve finalisation of the TCB-CRF.\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST UPDATED ITEMS\"\r\n                     class=\"col\">\r\n                    <Label class=\"checkbox-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"itemsUpdated\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectItemsUpdated($event)\"\r\n                               [checked]=\"this.phase3.itemsUpdated\"\r\n                        >\r\n                        Yes\r\n                        <input type=\"radio\"\r\n                               name=\"itemsUpdated\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectItemsUpdated($event)\"\r\n                               [checked]=\"!this.phase3.itemsUpdated\"\r\n                        >\r\n                        No\r\n                    </Label>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.itemsUpdated\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">Evaluation successful?</label>\r\n                </div>\r\n                <div ngbPopover=\"Please confirm whether or not the change request validation was successful by selecting the corresponding 'Yes' or 'No' options.\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST SUCCESSFUL EVALUATION\"\r\n                        class=\"col\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"evalSuccess\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectEvalSuccess($event)\"\r\n                               [checked]=\"this.phase3.evalSuccess\"\r\n                        >\r\n                        Yes\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"evalSuccess\"\r\n                               value=\"no\"\r\n                               (click)=\"onSelectEvalSuccess($event)\"\r\n                               [checked]=\"!this.phase3.evalSuccess\"\r\n                        >\r\n                        No\r\n                    </Label>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.evalSuccess\">\r\n                <div class=\"col-sm\">\r\n                    <label  class=\"px-3\">Confirm Close-out:</label>\r\n                </div>\r\n                <div ngbPopover=\"Please confirm or reject the current change request by selecting the corresponding 'Confirm' or 'Reject' options.\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST CONFIRMATION\"\r\n                     class=\"col\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"confirmChoice\"\r\n                               value=\"Confirm\"\r\n                               (click)=\"onSelectConfirm($event)\"\r\n                               [checked]=\"this.phase3.ccrConfirmation\"\r\n                        >\r\n                        Confirm\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"confirmChoice\"\r\n                               value=\"Reject\"\r\n                               (click)=\"onSelectConfirm($event)\"\r\n                               [checked]=\"!this.phase3.ccrConfirmation\"\r\n                        >\r\n                        Reject\r\n                    </Label>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n            <div class=\"row pt-3 pr-3\" *ngIf=\"!this.phase3.evalSuccess&&this.showEvalChange\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3 pt-2\" for=\"evalFail\">Reason:</label>\r\n                </div>\r\n                <div ngbPopover=\"Please provide any relevant information as to why the evaluation of the change request was not successful.\"\r\n                     triggers=\"mouseenter:mouseleave\"\r\n                     placement=\"right\"\r\n                     popoverTitle=\"CHANGE REQUEST EVALUATION FAILURE REASON\"\r\n                     class=\"col-sm\">\r\n                    <textarea rows=\"2\"\r\n                              type=\"text\"\r\n                              id=\"evalFail\"\r\n                              name=\"evalFail\"\r\n                              class=\"form-control\"\r\n                              [(ngModel)]=\"this.phase3.evalFailure\"\r\n                              (ngModelChange)=\"evalReasonCheck()\">{{this.phase3.evalFailure}}</textarea>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div  class=\"row px-3\">\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\">\r\n                    <button class=\"btn btn-outline-danger btn-rounded w-100  my-4 waves-effect z-depth-0\" id=\"cancel\"\r\n                            (click)=\"onCancel()\"> Cancel\r\n                    </button>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\" >\r\n                    <button class=\"btn btn-outline-info btn-rounded w-100 my-4  waves-effect z-depth-0\"\r\n                            [disabled]=\"!this.disableSubmitButton\"\r\n                            id=\"submit\"\r\n                            (click)=\"onSubmit()\"> Submit\r\n                    </button>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</form>\r\n<!--Created by Blaine Viljoen(28023374)-->\r\n"

/***/ }),

/***/ "./src/app/pages/phase3/phase3.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/phase3/phase3.component.ts ***!
  \**************************************************/
/*! exports provided: Phase3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase3Component", function() { return Phase3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_phase3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/phase3.service */ "./src/app/services/phase3.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_phase2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/phase2.service */ "./src/app/services/phase2.service.ts");
// Created by Blaine Viljoen 28023374
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Phase3Component = /** @class */ (function () {
    function Phase3Component(phase3Service, phsae2service, router) {
        this.phase3Service = phase3Service;
        this.phsae2service = phsae2service;
        this.router = router;
        this.formData = new FormData();
        this.localObj = null;
        this.phase3ID = 2;
        this.files = [];
        this.filesForUpload = [];
        this.numberOfDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        this.availableNumberOfTemporaryDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        this.availablePriorities = ['EMERGENCY', 'Urgent', 'Safety', 'Improvement', 'Other'];
        this.availablePeriods = ['Permanent', 'Temporary', 'Trial'];
        this.availableImpacts = ['CLIENTS', 'OPERATIONS', 'TECHNICAL'];
        this.availableNatureOfChange = ['National', 'Local', 'Regional'];
        this.availableEosSystems = ['AFTN', 'AMHS', 'ANAIS', 'A-SMGCS', 'ATIS', 'AWOS', 'CAD', 'CAMU', 'DAID', 'DATIS', 'DIESEL BACKUP',
            'DITTEL', 'DME', 'FRS', 'FWD RELAY', 'ILS', 'IVSAT', 'MLAT', 'NDB', 'OTN', 'OTN', 'RADAR', 'SATELLITE', 'SMR', 'SQUIB', 'TERNS',
            'TITAN', 'TOPSKY', 'UPS', 'VCCS', 'VHF', 'VOR', 'VPN'];
        this.abortOrRegress = ['Abort', 'Regress'];
        this.phase2 = {
            CCR_ID: undefined,
            TCB_CRF_ID: undefined,
            requestPriority: undefined,
            predictedImpact: undefined,
            changePeriod: undefined,
            temporaryPeriodStartDate: undefined,
            temporaryPeriodNumberOfDays: undefined,
            temporaryPeriodEndDate: undefined,
            natureOfChange: undefined,
            eosSystem: undefined,
            configurationItems: undefined,
            change: {
                hardware: false,
                software: false,
                firmware: false
            },
            additionalDocuments: false,
            documentIds: undefined,
            numberOfPages: undefined,
            estimatedImpacts: {
                operations: undefined,
                clients: undefined,
                technical: undefined
            },
            problemReportRaised: false,
            problemReportRef: undefined,
            changeSuccessfullyTested: undefined,
            changeNotSuccessfullyTestedReason: undefined,
            specialistComment: undefined,
            proposedImplementationDate: undefined,
            recommend_oppose: undefined,
            CSRF_token: undefined
        };
        this.phase3 = {
            CCR_ID: undefined,
            schedRegressionDate: undefined,
            tcbEvalStart: undefined,
            tcbEvalEnd: undefined,
            implementationSuccessful: true,
            abort: false,
            regress: false,
            abortRegressReason: undefined,
            abortRegress: undefined,
            alreadyRegressed: true,
            additionalDocs: false,
            itemsUpdated: false,
            evalSuccess: false,
            ccrConfirmation: false,
            evalFailure: undefined,
            documentIds: undefined,
            CSRF_token: undefined
        };
        this.user = '';
        this.Token = null;
        this.datepickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { dateInputFormat: 'YYYY-MM-DD' }, { showWeekNumbers: false }, { minDate: new Date() });
    }
    Phase3Component.prototype.removeFile = function (index) {
        this.filesForUpload.splice(index, 1);
    };
    Phase3Component.prototype.onSelectTCBNumberOfDays = function ($event) {
        this.selectedNoDays = $event.target.value;
        this.showTCBdatepicker = true;
    };
    Phase3Component.prototype.onSelectTCBEval = function ($event) {
        var startDate = $event;
        var maxDate = new Date();
        maxDate.setDate($event.getDate() + parseInt('' + this.selectedNoDays, 10));
        this.phase3.tcbEvalStart = startDate;
        this.phase3.tcbEvalEnd = maxDate;
    };
    Phase3Component.prototype.onSelectAbortRegress = function ($event) {
        if (this.phase3.abortRegress !== undefined) {
            if (this.phase3.abortRegress.includes('Abort')) {
                this.phase3.abort = true;
                this.phase3.regress = false;
                this.phase3.abortRegressReason = undefined;
                this.phase3.alreadyRegressed = false;
                this.phase3.schedRegressionDate = undefined;
            }
            else if (this.phase3.abortRegress.includes('Regress')) {
                this.phase3.abort = false;
                this.phase3.regress = true;
                this.phase3.abortRegressReason = undefined;
            }
        }
    };
    Phase3Component.prototype.abortRegressReasonCheck = function () {
        if (this.phase3.abortRegressReason !== undefined && this.phase3.abortRegress.includes('Abort')) {
            var submitButton = document.getElementById('submit');
            submitButton.classList.remove('disabled');
            this.disableSubmitButton = true;
        }
        else if (this.phase3.abortRegressReason !== undefined && this.phase3.alreadyRegressed) {
            var submitButton = document.getElementById('submit');
            submitButton.classList.remove('disabled');
            this.disableSubmitButton = true;
        }
    };
    Phase3Component.prototype.schedRegressCheck = function () {
        if (this.phase3.schedRegressionDate !== undefined) {
            var submitButton = document.getElementById('submit');
            submitButton.classList.remove('disabled');
            this.disableSubmitButton = true;
        }
    };
    Phase3Component.prototype.onSelectImplementationSuccessful = function (e) {
        if (e.target.value === 'yes') {
            this.phase3.implementationSuccessful = true;
            this.displayImpSuccess = false;
            this.phase3.abort = false;
            this.phase3.regress = false;
            this.showImpChange = true;
            this.phase3.schedRegressionDate = undefined;
            this.phase3.abort = false;
            this.phase3.regress = false;
            this.phase3.abortRegressReason = undefined;
            this.phase3.abortRegress = undefined;
            this.phase3.alreadyRegressed = true;
        }
        else {
            this.phase3.implementationSuccessful = false;
            this.displayImpSuccess = true;
            this.showImpChange = true;
            this.showEvalChange = false;
            this.phase3.itemsUpdated = false;
            this.phase3.additionalDocs = false;
            this.phase3.tcbEvalStart = undefined;
            this.phase3.tcbEvalEnd = undefined;
            this.phase3.additionalDocs = false;
            this.phase3.itemsUpdated = false;
            this.phase3.evalSuccess = false;
            this.phase3.ccrConfirmation = false;
            this.phase3.evalFailure = undefined;
            this.showEvalChange = false;
        }
    };
    Phase3Component.prototype.onSelectAdditionalDocs = function (e) {
        if (e.target.value === 'yes') {
            this.phase3.additionalDocs = true;
        }
        else {
            this.phase3.additionalDocs = false;
            this.phase3.itemsUpdated = true;
        }
    };
    Phase3Component.prototype.onSelectAlreadyRegressed = function (e) {
        if (e.target.value === 'yes') {
            this.phase3.alreadyRegressed = true;
            this.showSched = false;
        }
        else {
            this.phase3.alreadyRegressed = false;
            this.showSched = true;
        }
    };
    Phase3Component.prototype.onSelectItemsUpdated = function (e) {
        if (e.target.value === 'yes') {
            this.phase3.itemsUpdated = true;
        }
    };
    Phase3Component.prototype.onSelectEvalSuccess = function (e) {
        if (e.target.value === 'yes') {
            this.phase3.evalSuccess = true;
            this.showEvalChange = true;
            this.phase3.evalFailure = undefined;
        }
        else {
            this.phase3.evalSuccess = false;
            this.showEvalChange = true;
            this.phase3.ccrConfirmation = false;
        }
    };
    Phase3Component.prototype.onSelectConfirm = function (e) {
        if (e.target.value === 'Confirm') {
            this.phase3.ccrConfirmation = true;
            var submitButton = document.getElementById('submit');
            submitButton.classList.remove('disabled');
            this.disableSubmitButton = true;
        }
        else {
            this.phase3.ccrConfirmation = false;
            var submitButton = document.getElementById('submit');
            submitButton.classList.remove('disabled');
            this.disableSubmitButton = true;
        }
    };
    Phase3Component.prototype.onCancel = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: "You will lose all progress on this form",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Cancelled',
                    text: 'Your may continue to make changes',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    Phase3Component.prototype.onSubmit = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: 'You won\'t be able make changes to your submission',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                if (_this.localObj !== null) {
                    _this.phase3Service.updatePhase3(_this.phase3, _this.localObj.ID).subscribe(function (data) {
                        if (data.success) {
                            if (_this.phase3.additionalDocs) {
                                _this.populateForm();
                                _this.formData.append('ID', _this.phase3ID.toString());
                                _this.phase3Service.upload(_this.formData).subscribe(function (data1) {
                                    if (data1.success) {
                                        _this.phase3.documentIds = data.generatedName;
                                        console.log(_this.phase3.documentIds);
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                            title: 'Updated',
                                            text: 'Phase 3 successfully updated',
                                            type: 'success',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                    else {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                            title: 'Failure',
                                            text: data.message,
                                            type: 'error',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
                else {
                    _this.phase3Service.submitPhase3(_this.phase3).subscribe(function (data) {
                        if (data.success) {
                            console.log('we have post');
                            if (_this.phase3.additionalDocs) {
                                _this.populateForm();
                                _this.formData.append('ID', _this.phase3ID.toString());
                                _this.phase3Service.upload(_this.formData).subscribe(function (data1) {
                                    if (data1.success) {
                                        _this.phase3.documentIds = data.generatedName;
                                        console.log(_this.phase3.documentIds);
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                            title: 'Submitted',
                                            text: 'Phase 2 configuration has been submitted',
                                            type: 'success',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                    else {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                            title: 'Failure',
                                            text: data.message,
                                            type: 'error',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Cancelled',
                    text: 'Your may continue to make changes',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    Phase3Component.prototype.evalReasonCheck = function () {
        if (this.phase3.evalFailure !== undefined) {
            var submitButton = document.getElementById('submit');
            submitButton.classList.remove('disabled');
            this.disableSubmitButton = true;
        }
    };
    Phase3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.phsae2service.getPageData().subscribe(function (data) {
            _this.availablePriorities = data[0];
            _this.availableImpacts = data[1];
            _this.availablePeriods = data[2];
            _this.availableNatureOfChange = data[3];
            _this.availableEosSystems = data[4];
        });
        this.phase2.CCR_ID = this.phase3Service.phaseData[1][0].phase1_ID;
        this.phase2.TCB_CRF_ID = this.phase3Service.phaseData[1][0].tcb_crf_ID;
        this.phase2.requestPriority = this.phase3Service.phaseData[1][0].requestPriority_ID;
        this.phase2.predictedImpact = this.phase3Service.phaseData[1][0].impactRisks_ID;
        this.phase2.changePeriod = this.phase3Service.phaseData[1][0].changePeriod_ID;
        this.phase2.temporaryPeriodStartDate = this.phase3Service.phaseData[1][0].temporaryStartDate;
        this.phase2.temporaryPeriodNumberOfDays = this.phase3Service.phaseData[1][0].temporaryNoOfDays;
        this.phase2.temporaryPeriodEndDate = this.phase3Service.phaseData[1][0].temporaryEndDate;
        this.phase2.natureOfChange = this.phase3Service.phaseData[1][0].natureChange_ID;
        this.phase2.eosSystem = this.phase3Service.phaseData[1][0].eos_ID;
        this.phase2.configurationItems = this.phase3Service.phaseData[1][0].configurationDescr;
        if (this.phase3Service.phaseData[1][0].changeTypeHW === '0') {
            this.phase2.change.hardware = false;
        }
        else {
            this.phase2.change.hardware = true;
        }
        if (this.phase3Service.phaseData[1][0].changeTypeSW === '0') {
            this.phase2.change.software = false;
        }
        else {
            this.phase2.change.software = true;
        }
        if (this.phase3Service.phaseData[1][0].changeTypeSW === '0') {
            this.phase2.change.firmware = false;
        }
        else {
            this.phase2.change.firmware = true;
        }
        this.phase2.estimatedImpacts.operations = this.phase3Service.phaseData[1][0].impactOnOperations;
        this.phase2.estimatedImpacts.clients = this.phase3Service.phaseData[1][0].impactOnClients;
        this.phase2.estimatedImpacts.technical = this.phase3Service.phaseData[1][0].impactOnTech;
        this.phase2.problemReportRaised = this.phase3Service.phaseData[1][0].reportRaisedContractor;
        this.phase2.problemReportRef = this.phase3Service.phaseData[1][0].contractor_report_ref;
        this.phase2.changeSuccessfullyTested = this.phase3Service.phaseData[1][0].pre_testSucces;
        this.phase2.changeNotSuccessfullyTestedReason = this.phase3Service.phaseData[1][0].reasonUnsuccesTest;
        this.phase2.specialistComment = this.phase3Service.phaseData[1][0].specialist_comment;
        this.phase2.proposedImplementationDate = this.phase3Service.phaseData[1][0].proposed_implementation_date;
        this.phase3.CCR_ID = this.phase3Service.phaseData[1][0].ID;
        this.disableSubmitButton = false;
        var submitButton = document.getElementById('submit');
        submitButton.classList.add('disabled');
        this.Token = this.phase3Service.getCSRFToken().subscribe(function (data) {
            _this.phase3.CSRF_token = data.tokenValue;
        });
        this.localObj = this.phase3Service.getObj();
        if (this.localObj !== null) {
            console.log(this.localObj);
            this.disableSubmitButton = true;
            submitButton.classList.remove('disabled');
            document.getElementById('cancel').classList.add('invisible');
            if (this.localObj.implementation_successful === '1') {
                this.phase3.implementationSuccessful = true;
                console.log(this.phase3.implementationSuccessful);
            }
            else {
                this.phase3.implementationSuccessful = false;
                console.log(this.phase3.implementationSuccessful);
            }
            if (this.phase3.implementationSuccessful) {
                this.displayImpSuccess = false;
                this.phase3.abort = false;
                this.phase3.regress = false;
                this.showImpChange = true;
                this.phase3.schedRegressionDate = undefined;
                this.phase3.abort = false;
                this.phase3.regress = false;
                this.phase3.abortRegressReason = undefined;
                this.phase3.abortRegress = undefined;
                this.phase3.alreadyRegressed = true;
                this.showTCBdatepicker = true;
            }
            else {
                this.displayImpSuccess = true;
                this.showImpChange = true;
                this.showEvalChange = false;
                this.phase3.itemsUpdated = false;
                this.phase3.additionalDocs = false;
                this.phase3.tcbEvalStart = undefined;
                this.phase3.tcbEvalEnd = undefined;
                this.phase3.additionalDocs = false;
                this.phase3.itemsUpdated = false;
                this.phase3.evalSuccess = false;
                this.phase3.ccrConfirmation = false;
                this.phase3.evalFailure = undefined;
                this.showEvalChange = false;
            }
            if (this.localObj.aborted_regressed !== null) {
                this.phase3.abortRegress = this.localObj.aborted_regressed;
                if (this.phase3.abortRegress !== undefined) {
                    if (this.phase3.abortRegress.includes('Abort')) {
                        this.phase3.abort = true;
                        this.phase3.regress = false;
                        this.phase3.abortRegressReason = undefined;
                        this.phase3.alreadyRegressed = false;
                        this.phase3.schedRegressionDate = undefined;
                    }
                    else if (this.phase3.abortRegress.includes('Regress')) {
                        this.phase3.abort = false;
                        this.phase3.regress = true;
                        this.phase3.abortRegressReason = undefined;
                        if (this.localObj.already_regressed === '1') {
                            this.phase3.alreadyRegressed = true;
                            this.showSched = false;
                        }
                        else {
                            this.phase3.alreadyRegressed = false;
                            this.showSched = true;
                            this.phase3.schedRegressionDate = this.localObj.scheduled_regression_date;
                        }
                    }
                }
                this.phase3.abortRegressReason = this.localObj.reason_if_abort_regressed;
            }
            if (this.localObj.aborted_regressed === null) {
                this.phase3.tcbEvalStart = this.localObj.start_tcb_evaluation_date;
                this.phase3.tcbEvalEnd = this.localObj.end_tcb_evaluation_date;
                console.log(this.phase3.tcbEvalStart);
                if (this.localObj.items_updated === '1') {
                    this.phase3.itemsUpdated = true;
                }
                if (this.localObj.evaluation_success === '1') {
                    this.phase3.evalSuccess = true;
                    this.showEvalChange = true;
                    this.phase3.evalFailure = undefined;
                    if (this.localObj.close_out_confirmed === '1') {
                        this.phase3.ccrConfirmation = true;
                    }
                    else {
                        this.phase3.ccrConfirmation = false;
                    }
                }
                else {
                    this.phase3.evalSuccess = false;
                    this.showEvalChange = true;
                    this.phase3.ccrConfirmation = false;
                    this.phase3.evalFailure = this.localObj.evaluation_failure_reason;
                }
            }
        }
    };
    Phase3Component.prototype.fileOver = function (event) {
    };
    Phase3Component.prototype.fileLeave = function (event) {
    };
    Phase3Component.prototype.dropped = function (files) {
        var _this = this;
        // this.files = files;
        this.files.push(files);
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    _this.filesForUpload.push(file);
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
            }
        }
    };
    Phase3Component.prototype.populateForm = function () {
        for (var i = 0; i < this.filesForUpload.length; i++) {
            this.formData.append('file[]', this.filesForUpload[i], this.filesForUpload[i].name);
        }
    };
    Phase3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phase3',
            template: __webpack_require__(/*! ./phase3.component.html */ "./src/app/pages/phase3/phase3.component.html"),
            styles: [__webpack_require__(/*! ./phase3.component.css */ "./src/app/pages/phase3/phase3.component.css")]
        }),
        __metadata("design:paramtypes", [_services_phase3_service__WEBPACK_IMPORTED_MODULE_2__["Phase3Service"], _services_phase2_service__WEBPACK_IMPORTED_MODULE_4__["Phase2Service"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Phase3Component);
    return Phase3Component;
}());

// Created by Blaine Viljoen 28023374


/***/ }),

/***/ "./src/app/pages/registration/registration.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\nhtml, body{\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 150%;\n  vertical-align: baseline;\n}\n\nbody {\n  line-height: 1;\n}\n\n/* Basic */\n\nbody {\n  height: 100%;\n}\n\nbody.is-loading * {\n  transition: none !important;\n  -webkit-animation: none !important;\n  animation: none !important;\n}\n\nbody, input, select, textarea {\n  color: #6e6e6e;\n  /*font-family: 'Source Sans Pro', sans-serif;*/\n  font-size: 16pt;\n  font-weight: 400;\n  line-height: 1.75em;\n  width: 100%;\n}\n\n/* Form */\n\nlabel {\n  /*display: block;*/\n  color: #5b5b5b;\n  font-size: 0.8em;\n  font-weight: 700;\n  letter-spacing: 0.125em;\n  line-height: 1.75em;\n  /*text-transform: uppercase;*/\n  margin: 0 0 0.5em 0;\n}\n\n.ng-valid[required].ng-touched, .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form), .ng-invalid:not(form).ng-touched {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.registrationForm .form-group input.true{\n  border-left: 5px solid #42A948;\n}\n\n.registrationForm .form-group input.false{\n  border-left: 5px solid #a94442;\n}\n\n@media screen and (max-width: 1030px){\n  .registrationForm {\n    margin-right: 2% !important;\n    margin-left: 2% !important;\n  }\n}\n\n/* 100% Image Width on Smaller Screens */\n\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n\n.registrationForm {\n  display: flex;\n  flex-direction: column;\n  /*margin-right: 25%;*/\n  /*margin-left:25%;*/\n}\n\n.registrationForm > * {\n  width: 100%;\n}\n\n/* Main */\n\n#main {\n  padding: 6em 0 5em 0;\n  position: relative;\n  z-index: 1;\n}\n\n#main:before {\n  background: rgba(224, 224, 224, 0.75);\n  content: '';\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 0;\n  width: 1px;\n  z-index: -1;\n}\n\n#main header.major,\n#main footer.major {\n  background: #ffffff;\n}\n\n@media screen and (max-width: 1680px) {\n\n  /* Basic */\n  body, input, select, textarea {\n    font-size: 14pt;\n  }\n}\n\n/* Normal */\n\n@media screen and (max-width: 1280px) {\n\n  /* Basic */\n  body, input, select, textarea {\n    font-size: 13pt;\n  }\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/registration/registration.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Created by : Liam Gordon McCabe-->\n<!-- Student number: 27455211-->\n<div class=\"card mx-auto\" style=\"width: 60rem;\">\n\n    <h5 class=\"card-header info-color white-text text-center py-4\">\n        <strong>Register</strong>\n    </h5>\n\n<div class=\"card-body px-lg-5 pt-3\">\n  <form class=\"registrationForm\" >\n\n    <div class=\"form-group\" style=\"color: #757575;\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"title\">Title</label>\n            </div>\n            <div class=\"col\">\n                <select\n                        ngbPopover=\"Select a title by selecting an option from the drop down list\"\n                        triggers=\"mouseenter:mouseleave\"\n                        placement=\"bottom-right\"\n                        popoverTitle=\"SELECT TITLE\"\n                        class=\"px-3 rounded form-control\"\n                        name=\"title\"\n                        id=\"title\"\n                        (change)=\"onSelectTitle($event)\"\n                        [(ngModel)]=\"this.User.title\"\n                >\n                    <option selected=\"selected\" disabled=\"disabled\">Select one</option>\n                    <option *ngFor=\"let title of availableTitles\"  [value]=\"title[0]\" >{{title[1]}}</option>\n                </select>\n            </div>\n            <div class=\"col\">\n                <label for=\"site\">Site</label>\n            </div>\n            <div class=\"col\">\n                <select\n                        ngbPopover=\"Select a site by selecting an option from the drop down list\"\n                        triggers=\"mouseenter:mouseleave\"\n                        placement=\"bottom-right\"\n                        popoverTitle=\"SELECT SITE\"\n                        class=\"px-3 rounded form-control\"\n                        [(ngModel)]=\"this.User.site\"\n                        name=\"site\"\n                        id=\"site\"\n                        (change)=\"onSelectTitle($event)\"\n                >\n                    <option selected=\"selected\" disabled=\"disabled\">Select one</option>\n                    <option *ngFor=\"let site of availableSites\" [value]=\"site[0]\">{{site[1]}}</option>\n                </select>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\" >\n      <label for=\"name\">Name</label>\n      <input\n              ngbPopover=\"Please enter your first name\"\n              triggers=\"mouseenter:mouseleave\"\n              placement=\"bottom-right\"\n              popoverTitle=\"INPUT FIRST NAME\"\n              required class=\"form-control\" [(ngModel)]=\"User.name\"\n              type=\"text\" name=\"name\" id=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"surname\">Surname</label>\n      <input\n              ngbPopover=\"Please enter your surname\"\n              triggers=\"mouseenter:mouseleave\"\n              placement=\"bottom-right\"\n              popoverTitle=\"INPUT SURNAME\"\n              required class=\"form-control\" [(ngModel)]=\"User.surname\"\n              type=\"text\" name=\"surname\" id=\"surname\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"employeeID\">Employee ID</label>\n      <input\n              ngbPopover=\"Please enter your employee ID\"\n              triggers=\"mouseenter:mouseleave\"\n              placement=\"bottom-right\"\n              popoverTitle=\"INPUT EMPLOYEE ID\"\n              class=\"form-control\" (input)=\"validateEmpId(User.employeeId)\"\n              [ngClass]=\"{'true': this.showEmpId, 'false':!this.showEmpId}\"\n              [(ngModel)]=\"User.employeeId\"\n              type=\"number\" name='EmployeeId' id=\"employeeID\" required>\n    </div>\n    <div class=\"form-group\">\n      <label>Contact Number</label>\n      <label *ngIf=\"this.showPhone == false\" style=\"color: red\">Invalid South African Number</label>\n      <label *ngIf=\"this.showPhone == true\" style=\"color: green\">Valid South African Number </label>\n      <input\n              ngbPopover=\"Please enter your phone number\"\n              triggers=\"mouseenter:mouseleave\"\n              placement=\"bottom-right\"\n              popoverTitle=\"INPUT PHONE NUMBER\"\n              (input)=\"validatePhoneNumber(this.User.contactNumber)\"\n              class=\"form-control\" [ngClass]=\"{'true': this.showPhone, 'false': !this.showPhone}\"\n              [(ngModel)]=\"this.User.contactNumber\"\n              type=\"text\"\n              name=\"contactNum\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <label *ngIf=\"this.showEmail == false\" style=\"color: red\">Invalid</label>\n      <label *ngIf=\"this.showEmail == true\" style=\"color: green\">Valid\n      </label>\n      <input\n              ngbPopover=\"Please enter the username of your email before the @\"\n              triggers=\"mouseenter:mouseleave\"\n              placement=\"bottom-right\"\n              popoverTitle=\"INPUT USERNAME\"\n              (input)=\"validateEmail(User.email)\" class=\"form-control\"\n             [ngClass]=\"{'true': this.showEmail, 'false': !this.showEmail}\"\n             id=\"username\" name=\"username\" [(ngModel)]= User.email type=\"email\"\n             required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input ngbPopover=\"Password must be at least 8 characters in length containing  1 Uppercase, 1 Lowercase and 1 special character\"\n             triggers=\"mouseenter:mouseleave\"\n             placement=\"bottom-right\"\n             popoverTitle=\"INPUT PASSWORD\"\n             (input)=\"validatePassword(password)\"\n             [ngClass]=\"{'true': this.showPassword, 'false': !this.showPassword}\"\n             class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" type=\"password\" required>\n      <password-strength-meter [password]=\"password\"\n                               class=\"form-control\" id=\"passwordStrengthMeter\" name=\"passwordStrengthMeter\" >\n      </password-strength-meter>\n      <label for=\"passwordCheck\">Confirm Password</label>\n      <input\n              ngbPopover=\"Re-Enter your password\"\n              triggers=\"mouseenter:mouseleave\"\n              placement=\"bottom-right\"\n              popoverTitle=\"INPUT PASSWORD AGAIN\"\n              (input)=\"confirmPassword(passwordCheck)\"\n             [ngClass]=\"{'true': this.showPasswordCheck, 'false': !this.showPasswordCheck}\"\n             class=\"form-control\" id=\"passwordCheck\" name=\"passwordCheck\" [(ngModel)]=\"passwordCheck\" type=\"password\">\n\n    </div>\n<!--    <div class=\"form-group\">-->\n<!--      <label for=\"permissionLevel\">Permission Level</label>-->\n<!--      <select title=\"Select your relevant Permission level\" required  (change)=\"onSelectPermission($event.target.value)\"-->\n<!--              name=\"permissionLevel\" id=\"permissionLevel\">-->\n<!--        <option *ngFor=\"let permission of availablePermissions\">{{permission}}</option>-->\n<!--      </select>-->\n<!--    </div>-->\n<!--    <div class=\"form-group\">-->\n<!--      <label for=\"region\">Region</label>-->\n<!--      <select title=\"Select your relevant region\" (change)=\"onSelectRegion($event.target.value)\" name=\"region\" id=\"region\">-->\n<!--        <option *ngFor=\"let region of availableRegions\">{{region}}</option>-->\n<!--      </select>-->\n<!--    </div>-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<label>Submit</label>-->\n      <!--<textarea rows=\"4\" class=\"form-control\" [(ngModel)]=\"email.description\"-->\n                <!--type=\"text\" name=\"enquiry\"></textarea>-->\n    <!--</div>-->\n\n    <br>\n          <div class=\"row\">\n              <div class=\"col\"></div>\n              <div class=\"col\">\n                  <button\n                          type=\"submit\"\n                          value=\"Register\"\n                          class=\"btn btn-outline-danger btn-rounded w-100  my-4  waves-effect z-depth-0\"\n                          (click)=\"onCancel()\"\n                  >Cancel</button>\n              </div>\n              <div class=\"col\"></div>\n              <div class=\"col\">\n                  <button\n                          type=\"submit\"\n                          value=\"Register\"\n                          id=\"submit\"\n                          class=\"btn btn-outline-info btn-rounded w-100 my-4  waves-effect z-depth-0 disabled\"\n                          [disabled]=\"!this.showRegisterButton\"\n                          (click)=\"onRegister()\"\n                  >Register</button>\n              </div>\n\n              <div class=\"col\"></div>\n          </div>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/registration/registration.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/registration.service */ "./src/app/services/registration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/

 // Router import
 // Sweet Alerts import

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, registration) {
        this.router = router;
        this.registration = registration;
        // Boolean values for input validation
        this.Token = null;
        // Login object created from interface
        this.User = {
            title: undefined,
            surname: undefined,
            name: undefined,
            employeeId: undefined,
            email: undefined,
            contactNumber: undefined,
            site: undefined,
            password: undefined,
        };
        this.availableTitles = ['Mr', 'Ms', 'Regional manager'];
        this.availablePermissions = ['Specialist', 'Manager', 'Employee']; // to be delegated to database
        this.availableRegions = ['Northern', 'Southern', 'Both']; // to be delegated to database
        this.availableSites = ['Site1', 'Site2', 'Site3']; // to be delegated to database
    }
    RegistrationComponent.prototype.onSelectTitle = function ($event) {
        if (!(this.User.title === undefined) &&
            !(this.User.site === undefined) &&
            !(this.User.email === undefined) &&
            !(this.User.employeeId === undefined) &&
            !(this.User.contactNumber === undefined) &&
            !(this.User.name === undefined) &&
            !(this.User.surname === undefined) &&
            !(this.password === undefined)) {
            this.showRegisterButton = true;
        }
    };
    RegistrationComponent.prototype.onSelectSite = function ($event) {
        if (!(this.User.title === undefined) &&
            !(this.User.site === undefined) &&
            !(this.User.email === undefined) &&
            !(this.User.employeeId === undefined) &&
            !(this.User.contactNumber === undefined) &&
            !(this.User.name === undefined) &&
            !(this.User.surname === undefined) &&
            !(this.password === undefined)) {
            this.showRegisterButton = true;
        }
    };
    // Validates email input
    RegistrationComponent.prototype.validateEmail = function (email) {
        // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var re = /[!@#$%^&*(),.?"'~`:;{}|<>_+=[ ]/g;
        if (re.test(String(email).toLowerCase()) === true) {
            this.showEmail = false;
        }
        else {
            this.showEmail = true;
        }
    };
    // Validates password on input
    RegistrationComponent.prototype.validatePassword = function (value) {
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.@#\$%\^&\*])(?=.{8,})/;
        if (re.test(String(value)) === true) {
            this.showPassword = true;
        }
        else {
            this.showPassword = false;
        }
    };
    // Validates phone number on input
    RegistrationComponent.prototype.validatePhoneNumber = function (phone) {
        var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (re.test(phone)) {
            this.showPhone = true;
        }
        else {
            this.showPhone = false;
        }
    };
    // Confirms the password is correctly chosen
    RegistrationComponent.prototype.confirmPassword = function (value) {
        if (this.password === value) {
            var registerButton = document.getElementById('submit');
            registerButton.classList.remove('disabled');
            this.showPasswordCheck = true;
            if (!(this.User.title === undefined) &&
                !(this.User.site === undefined) &&
                !(this.User.email === undefined) &&
                !(this.User.employeeId === undefined) &&
                !(this.User.contactNumber === undefined) &&
                !(this.User.name === undefined) &&
                !(this.User.surname === undefined) &&
                !(this.password === undefined) &&
                (this.showEmail === true) &&
                (this.showEmpId === true) &&
                (this.showPassword === true) &&
                (this.showPhone === true)) {
                this.showRegisterButton = true;
            }
        }
        else {
            this.showPasswordCheck = false;
            this.showRegisterButton = false;
        }
    };
    // Validates that employee ID is of 4 character length
    RegistrationComponent.prototype.validateEmpId = function (employeeId) {
        if (employeeId.toString().length === 4) {
            this.showEmpId = true;
        }
        else {
            this.showEmpId = false;
        }
    };
    RegistrationComponent.prototype.onCancel = function () {
        this.router.navigate(['login']);
    };
    // Called on register button click this is where the data is stored in the database and the password is hashed and stored in the login object
    RegistrationComponent.prototype.onRegister = function () {
        var _this = this;
        if (this.showRegisterButton === true) {
            // const hash = crypto.MD5(this.passwordCheck);
            this.User.password = this.passwordCheck;
            console.log(this.User);
            this.registration.registerUser(this.User, this.Token).subscribe(function (data) {
                if (data.success) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Success!', data.message, 'success');
                    _this.router.navigate(['login']);
                }
                else {
                    _this.registration.getCSRFToken().subscribe(function (data1) {
                        _this.Token = data1.tokenValue;
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Failure', data.message, 'error');
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Failure', 'Please complete the registration form', 'error');
        }
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registration.getCSRFToken().subscribe(function (data) {
            _this.Token = data.tokenValue;
        });
        this.registration.getPageData().subscribe(function (data) {
            _this.availableSites = data[0];
            _this.availableTitles = data[1];
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/pages/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/pages/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/pages/rfcsignoff/rfcsignoff.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/rfcsignoff/rfcsignoff.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/rfcsignoff/rfcsignoff.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/rfcsignoff/rfcsignoff.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  rfcsignoff works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/rfcsignoff/rfcsignoff.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/rfcsignoff/rfcsignoff.component.ts ***!
  \**********************************************************/
/*! exports provided: RFCsignoffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RFCsignoffComponent", function() { return RFCsignoffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RFCsignoffComponent = /** @class */ (function () {
    function RFCsignoffComponent() {
    }
    RFCsignoffComponent.prototype.ngOnInit = function () {
    };
    RFCsignoffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rfcsignoff',
            template: __webpack_require__(/*! ./rfcsignoff.component.html */ "./src/app/pages/rfcsignoff/rfcsignoff.component.html"),
            styles: [__webpack_require__(/*! ./rfcsignoff.component.css */ "./src/app/pages/rfcsignoff/rfcsignoff.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RFCsignoffComponent);
    return RFCsignoffComponent;
}());



/***/ }),

/***/ "./src/app/services/MyRfcs.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/MyRfcs.service.ts ***!
  \********************************************/
/*! exports provided: MyRfcsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRfcsService", function() { return MyRfcsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Created by Blaine Viljoen


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
var MyRfcsService = /** @class */ (function () {
    function MyRfcsService(http) {
        this.http = http;
    }
    MyRfcsService.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
    };
    MyRfcsService.prototype.getPageData = function (userIDInput) {
        var obj = {
            dataSelection: 'myRfcs',
            userID: userIDInput
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    MyRfcsService.prototype.getFiles = function () {
        var obj = {
            fileSelection: 'images'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/retrieveFiles.php', obj, httpOptions);
    };
    MyRfcsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MyRfcsService);
    return MyRfcsService;
}());

// Created by Blaine Viljoen


/***/ }),

/***/ "./src/app/services/adminDashboard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/adminDashboard.service.ts ***!
  \****************************************************/
/*! exports provided: AdminDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardService", function() { return AdminDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Created by Blaine Viljoen


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
var AdminDashboardService = /** @class */ (function () {
    function AdminDashboardService(http) {
        this.http = http;
    }
    AdminDashboardService.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
    };
    AdminDashboardService.prototype.getPhase2Docs = function (id) {
        var obj = {
            dataSelection: 'phase2Docs',
            ID: id
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    AdminDashboardService.prototype.getPhase3Docs = function (id) {
        var obj = {
            dataSelection: 'phase3Docs',
            ID: id
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    AdminDashboardService.prototype.getSpecialistData = function () {
        var obj = {
            dataSelection: 'specialist'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    AdminDashboardService.prototype.deleteDoc = function (obj) {
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/removeFiles.php', obj, httpOptions);
    };
    AdminDashboardService.prototype.getPageData = function () {
        var obj = {
            dataSelection: 'allCCR'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    AdminDashboardService.prototype.setNewSpecialist = function (id, specID) {
        var obj = {
            updateSelection: 'specialist',
            ID: id,
            specialist: specID
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
    };
    AdminDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminDashboardService);
    return AdminDashboardService;
}());

// Created by Blaine Viljoen


/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/

var AppService = /** @class */ (function () {
    function AppService() {
        this.isSidebarPinned = false;
        this.isSidebarToggeled = false;
    }
    AppService.prototype.toggleSidebar = function () {
        this.isSidebarToggeled = !this.isSidebarToggeled;
    };
    AppService.prototype.toggleSidebarPin = function () {
        this.isSidebarPinned = !this.isSidebarPinned;
    };
    AppService.prototype.getSidebarStat = function () {
        return {
            isSidebarPinned: this.isSidebarPinned,
            isSidebarToggeled: this.isSidebarToggeled
        };
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/ccr-http-interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/services/ccr-http-interceptor.ts ***!
  \**************************************************/
/*! exports provided: CcrHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcrHttpInterceptor", function() { return CcrHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/




var CcrHttpInterceptor = /** @class */ (function () {
    function CcrHttpInterceptor(cookieService) {
        this.cookieService = cookieService;
    }
    CcrHttpInterceptor.prototype.intercept = function (req, next) {
        var Authorization = this.cookieService.get('jwt');
        if (Authorization) {
            req = req.clone({ headers: req.headers.set('Authorization', Authorization) });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            // req.headers.append('Authorization', 'Bearer ' + Authorization);
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
            }
            return event;
        }));
    };
    CcrHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], CcrHttpInterceptor);
    return CcrHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/services/current-ccrs.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/current-ccrs.service.ts ***!
  \**************************************************/
/*! exports provided: CurrentCcrsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentCcrsService", function() { return CurrentCcrsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
var CurrentCcrsService = /** @class */ (function () {
    function CurrentCcrsService(http) {
        this.http = http;
    }
    CurrentCcrsService.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
    };
    CurrentCcrsService.prototype.getMyCCRs = function () {
        var obj = {
            dataSelection: 'currentRfcs'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    CurrentCcrsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CurrentCcrsService);
    return CurrentCcrsService;
}());



/***/ }),

/***/ "./src/app/services/oath.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/oath.service.ts ***!
  \******************************************/
/*! exports provided: OathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OathService", function() { return OathService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }),
};
var OathService = /** @class */ (function () {
    function OathService(http) {
        this.http = http;
        this.loggedInStatus = false;
    }
    Object.defineProperty(OathService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    OathService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
    };
    OathService.prototype.getUserDetails = function (username, password, CSRF_token) {
        var obj = {
            username: username,
            password: password,
            CSRF_token: CSRF_token
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/login.php', obj, httpOptions);
        ;
    };
    OathService.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
    };
    OathService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OathService);
    return OathService;
}());



/***/ }),

/***/ "./src/app/services/phase1.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/phase1.service.ts ***!
  \********************************************/
/*! exports provided: Phase1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase1Service", function() { return Phase1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
var Phase1Service = /** @class */ (function () {
    function Phase1Service(http) {
        this.http = http;
        this.obj = null;
        this.siteID = 0;
    }
    Phase1Service.prototype.submitRequest = function (phase1) {
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/initiateRequest.php', phase1, httpOptions);
    };
    Phase1Service.prototype.updateRequest = function (phase1, ccrID) {
        var obj = { phase1: phase1, updateSelection: 'phase1', ID: ccrID };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
    };
    Phase1Service.prototype.getPageData = function () {
        var obj = {
            dataSelection: 'initiateCCR'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    Phase1Service.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
    };
    Phase1Service.prototype.setobj = function (obj, siteID) {
        this.obj = obj;
        this.siteID = siteID;
    };
    Phase1Service.prototype.getobj = function () {
        return this.obj;
    };
    Phase1Service.prototype.getSite = function () {
        return this.siteID;
    };
    Phase1Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Phase1Service);
    return Phase1Service;
}());



/***/ }),

/***/ "./src/app/services/phase2.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/phase2.service.ts ***!
  \********************************************/
/*! exports provided: Phase2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase2Service", function() { return Phase2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
var Phase2Service = /** @class */ (function () {
    function Phase2Service(http) {
        this.http = http;
        this.obj = null;
        this.phase1 = null;
        this.user = null;
    }
    Phase2Service.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
    };
    Phase2Service.prototype.getPageData = function () {
        var obj = {
            dataSelection: 'phase2'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    Phase2Service.prototype.getEOSTCBNumber = function (eos_ID) {
        var obj = {
            dataSelection: 'eosTCB',
            eos_ID: eos_ID
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    Phase2Service.prototype.upload = function (formData) {
        formData.append('phase', 'phase2');
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/files.php', formData);
    };
    Phase2Service.prototype.submitPhase2 = function (phase2) {
        console.log(phase2);
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/specialistConfiguration.php', phase2, httpOptions);
    };
    Phase2Service.prototype.updatePhase2 = function (phase2, ccrID) {
        var obj = { phase2: phase2, updateSelection: 'phase2', ID: ccrID };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
    };
    Phase2Service.prototype.setObj = function (obj, phase1, user) {
        this.obj = obj;
        this.phase1 = phase1;
        this.user = user;
    };
    Phase2Service.prototype.getObj = function () {
        return this.obj;
    };
    Phase2Service.prototype.getPhase1 = function () {
        return this.phase1;
    };
    Phase2Service.prototype.getUser = function () {
        return this.user;
    };
    Phase2Service.prototype.getUserByID = function (user_ID) {
        var obj = {
            dataSelection: 'user',
            user_ID: user_ID
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    Phase2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Phase2Service);
    return Phase2Service;
}());



/***/ }),

/***/ "./src/app/services/phase3.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/phase3.service.ts ***!
  \********************************************/
/*! exports provided: Phase3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase3Service", function() { return Phase3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
var Phase3Service = /** @class */ (function () {
    function Phase3Service(http) {
        this.http = http;
        this.obj = null;
        this.phaseData = null;
    }
    Phase3Service.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
    };
    Phase3Service.prototype.upload = function (formData) {
        formData.append('phase', 'phase3');
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/files.php', formData);
    };
    Phase3Service.prototype.submitPhase3 = function (phase3) {
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/specialistImplementation.php', phase3, httpOptions);
    };
    Phase3Service.prototype.updatePhase3 = function (phase3, ccrID) {
        var obj = { phase3: phase3, updateSelection: 'phase3', ID: ccrID };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
    };
    Phase3Service.prototype.setObj = function (obj) {
        this.obj = obj;
    };
    Phase3Service.prototype.getObj = function () {
        return this.obj;
    };
    Phase3Service.prototype.setphases = function (phaseData) {
        this.phaseData = phaseData;
        console.log(this.phaseData);
    };
    Phase3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Phase3Service);
    return Phase3Service;
}());



/***/ }),

/***/ "./src/app/services/registration.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/registration.service.ts ***!
  \**************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.registerUser = function (user, token) {
        var obj = {
            title: user.title,
            surname: user.surname,
            name: user.name,
            employee_ID: user.employeeId,
            username: user.email,
            contactNum: user.contactNumber,
            site: user.site,
            password: user.password,
            CSRF_token: token
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/register.php', obj, httpOptions);
    };
    RegistrationService.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
    };
    RegistrationService.prototype.getPageData = function () {
        var obj = {
            dataSelection: 'registration'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    RegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/services/route-authorisation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/route-authorisation.service.ts ***!
  \*********************************************************/
/*! exports provided: RouteAuthorisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAuthorisationService", function() { return RouteAuthorisationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/



var RouteAuthorisationService = /** @class */ (function () {
    function RouteAuthorisationService(cookieService) {
        this.cookieService = cookieService;
    }
    RouteAuthorisationService.prototype.isAuthorized = function (allowedPermission) {
        // check if the list of allowed roles is empty, if empty, authorize the user to access the page
        if (allowedPermission == null || allowedPermission.length === 0) {
            return true;
        }
        // get token from cookie or state management
        var token = this.cookieService.get('jwt');
        // decode token to read the payload details
        var decodeToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        // check if it was decoded successfully, if not the token is not valid, deny access
        if (!decodeToken) {
            console.log('Invalid token');
            return false;
        }
        // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
        return decodeToken.data.permissions.includes(allowedPermission);
    };
    RouteAuthorisationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], RouteAuthorisationService);
    return RouteAuthorisationService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }),
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.isLoggedIn = function () {
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/isloggedin.php', httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gordo\PhpstormProjects\ATNSrfc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map