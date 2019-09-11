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

module.exports = "<!-- Created by : Liam Gordon McCabe-->\r\n<!-- Student number: 27455211-->\r\n<aside class=\"sidebar shadow\">\r\n  <div class=\"sidebar-profile d-flex flex-column justify-content-center pt-5 pb-3\">\r\n<!--    <div class=\"picture-wrapper mb-3\">-->\r\n<!--      <div class=\"logo-container m-auto\">-->\r\n<!--        <img src=\"../../../assets/images/atns_logo.png\" class=\"img-fluid\" alt=\"\">-->\r\n<!--      </div>-->\r\n<!--    </div>-->\r\n    <div class=\"profile-details text-center pb-4\">\r\n      <p class=\"mb-0 text-uppercase name\">{{this.username}}</p>\r\n      <small class=\"text-uppercase role\">{{this.roles}}</small>\r\n    </div>\r\n  </div>\r\n  <nav class=\"sidebar-menu pt-3 pb-3\">\r\n    <ul>\r\n      <li class=\"active\">\r\n        <a  routerLink=\"/home/createRFC\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-pencil\"></i>\r\n          <span>Initiate CCR</span>\r\n          <span class=\"badge badge-danger rounded-0 ml-auto text-light\">New</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <a  routerLink=\"/home/myRFCS\" routerLinkActive=\"active\" >\r\n          <i class=\"fa fa-archive\"></i>\r\n          <span>My CCR'S</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\" routerLink=\"/home/phase2\">\r\n          <i class=\"fa fa-table\"></i>\r\n          <span>Tables</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\" routerLink=\"/home/phase3\">\r\n          <i class=\"fa fa-align-center\"></i>\r\n          <span>Phase3</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <!--<a href=\"#\" routerLink=\"/maps\">-->\r\n          <!--<i class=\"fa fa-globe\"></i>-->\r\n          <!--<span>Maps</span>-->\r\n        <!--</a>-->\r\n      <!--</li>-->\r\n      <!--<li>-->\r\n        <!--<a href=\"#\" routerLink=\"/notifications\">-->\r\n          <!--<i class=\"fa fa-bell-o\"></i>-->\r\n          <!--<span>Notifications</span>-->\r\n        <!--</a>-->\r\n      <!--</li>-->\r\n    </ul>\r\n  </nav>\r\n  <nav class=\"sidebar-menu pt-3 pb-3\">\r\n    <ul>\r\n      <li class=\"active\">\r\n        <a  routerLink=\"/home/currentrfcs\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-eye\"></i>\r\n          <span>CCR's Dashboard</span>\r\n          <!--<span class=\"badge badge-danger rounded-0 ml-auto text-light\">New</span>-->\r\n        </a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <a  routerLink=\"/home/rfcsignoff\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-leaf\"></i>\r\n          <span>CCR Sign Off</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</aside>\r\n"

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
            { path: 'currentrfcs', component: _pages_current_rfcs_current_rfcs_component__WEBPACK_IMPORTED_MODULE_7__["CurrentRFCSComponent"], data: { allowedPermission: '3' }, runGuardsAndResolvers: 'always' },
            { path: 'phase2', component: _pages_phase2_phase2_component__WEBPACK_IMPORTED_MODULE_9__["Phase2Component"], data: { allowedPermission: '4' }, runGuardsAndResolvers: 'always' },
            { path: 'phase3', component: _pages_phase3_phase3_component__WEBPACK_IMPORTED_MODULE_12__["Phase3Component"], data: { allowedPermission: '5' }, runGuardsAndResolvers: 'always' }
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

module.exports = "<!--Created by Blaine Viljoen(28023374)-->\r\n\r\n<form>\r\n    <div *ngFor=\"let rfc of rfcs; index as i\">\r\n        <div class=\"shadow card bg-light mx-auto\" (click)=\"onClick(i)\" style=\"cursor: pointer;\">\r\n            <div class=\"form group\">\r\n                <h2 class=\"px-3 pt-1 text-primary\">CCR ID: {{rfc[0]}}</h2><br>\r\n                <h3 class=\"px-3 text-secondary\">Request: {{rfc[1]}}</h3>\r\n                <h3 class=\"px-3 text-secondary\">Reason: {{rfc[2]}}</h3>\r\n            </div>\r\n        </div>\r\n        <br>\r\n    </div>\r\n\r\n    <h3 id=\"test\" class=\"pt-3 px-3 text-primary\"></h3>\r\n</form>\r\n\r\n<!--Created by Blaine Viljoen(28023374)-->\r\n"

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
/* harmony import */ var _services_currentRfcs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/currentRfcs.service */ "./src/app/services/currentRfcs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentRFCSComponent = /** @class */ (function () {
    function CurrentRFCSComponent(currentRfcsService) {
        this.currentRfcsService = currentRfcsService;
        this.Token = null;
        this.rfcs = [
            { id: 1, request: 'something', reason: 'Cause I said so ...' },
            { id: 2, request: 'something else', reason: 'Same as the last one ...' },
            { id: 3, request: 'one last thing', reason: 'Just do it ...' }
        ];
    }
    CurrentRFCSComponent.prototype.onClick = function (index) {
        document.getElementById('test').innerHTML = 'You selected the card with id: ' + this.rfcs[index][0];
    };
    CurrentRFCSComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRfcsService.getCSRFToken().subscribe(function (data) {
            _this.Token = data.tokenValue;
        });
        this.currentRfcsService.getPageData().subscribe(function (data) {
            _this.rfcs = data[0];
            console.log(_this.rfcs);
        });
    };
    CurrentRFCSComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-rfcs',
            template: __webpack_require__(/*! ./current-rfcs.component.html */ "./src/app/pages/current-rfcs/current-rfcs.component.html"),
            styles: [__webpack_require__(/*! ./current-rfcs.component.css */ "./src/app/pages/current-rfcs/current-rfcs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_currentRfcs_service__WEBPACK_IMPORTED_MODULE_1__["CurrentRfcsService"]])
    ], CurrentRFCSComponent);
    return CurrentRFCSComponent;
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

module.exports = "<!-- Created by : Liam Gordon McCabe-->\n<!-- Student number: 27455211-->\n<div class=\"card mx-auto\" style=\"width: 45rem;\">\n\n  <h5 class=\"card-header info-color white-text text-center py-4\">\n    <strong>Sign in</strong>\n  </h5>\n\n  <div class=\"card-body px-lg-5 pt-0\">\n    <form class=\"md-form\" style=\"color: #757575;\">\n      <label for=\"username\">User Name</label>\n      <input type=\"email\" id=\"username\"  name=\"username\" class=\"form-control\" [(ngModel)]=\"user\" (input)=\"setUsername(user)\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"pass\"  (input)=\"setPassword(pass)\">\n      <div class=\"d-flex align-items-center justify-content-between\">\n        <div class=\"form-check\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"materialLoginFormRemember\" >\n          <label class=\"form-check-label\" for=\"materialLoginFormRemember\">Remember me</label>\n        </div>\n        <div>\n          <a href=\"\">Forgot password?</a>\n        </div>\n      </div>\n\n      <button class=\"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0\" type=\"submit\"  (click)=\"onLogin($event)\">Sign in</button>\n\n      <div class=\"text-center\">\n        <p>Not a member?\n          <a href=\"#\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n        </p>\n\n      </div>\n      <input type=\"hidden\"  value=\"{{this.Token}}\">\n    </form>\n  </div>\n</div>\n"

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

module.exports = "<form>\n  <div class=\"card bg-light\">\n    hello im a card\n  </div>\n</form>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyRFCSComponent = /** @class */ (function () {
    function MyRFCSComponent() {
    }
    MyRFCSComponent.prototype.ngOnInit = function () {
    };
    MyRFCSComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-rfcs',
            template: __webpack_require__(/*! ./my-rfcs.component.html */ "./src/app/pages/my-rfcs/my-rfcs.component.html"),
            styles: [__webpack_require__(/*! ./my-rfcs.component.scss */ "./src/app/pages/my-rfcs/my-rfcs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyRFCSComponent);
    return MyRFCSComponent;
}());



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

module.exports = "<!-- Created by : Liam Gordon McCabe-->\r\n<!-- Student number: 27455211-->\r\n  <form class=\"card mx-auto secondary-color\" type=\"GET\">\r\n    <div class=\"form-group px-3 pt-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"> <label for= \"site\">Select your site</label></div>\r\n        <div class=\"col\">\r\n          <select ngbPopover=\"Select from the drop down list The site you want to make your request within\" triggers=\"mouseenter:mouseleave\" placement=\"bottom\" popoverTitle=\"SELECT SITE\"\r\n              class=\"rounded w-100 form-control\"\r\n              name=\"site\"\r\n              id=\"site\"\r\n              (change)=\"onSelectSite($event)\" >\r\n            <option selected=\"selected\" disabled=\"disabled\">Select one</option>\r\n            <option *ngFor=\"let site of usersSites\"  [value]=\"site[0]\" >{{site[1]}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group px-3 pt-3\">\r\n      <label for= \"requestedChange\">Change Request</label>\r\n      <textarea rows=\"8\" class=\"form-control rounded\"\r\n                type=\"text\"\r\n                name=\"requestedChange\"\r\n                id=\"requestedChange\"\r\n                (input)=\"requestedChange()\"\r\n                [(ngModel)]=\"RFC.requestedChange\">\r\n      </textarea>\r\n    </div>\r\n    <div class=\"form-group px-3\">\r\n      <label for=\"description\">Description</label>\r\n      <textarea rows=\"8\" class=\"form-control rounded\"\r\n                type=\"text\"\r\n                name=\"description\"\r\n                id=\"description\"\r\n                (input)=\"description()\"\r\n                [(ngModel)]=\"RFC.description\"\r\n      ></textarea>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"row px-3\">\r\n      <div class=\"col\"></div>\r\n      <div class=\"col\">\r\n        <button\r\n                type=\"cancel\"\r\n                id=\"cancel\"\r\n                class=\"btn btn-outline-danger btn-rounded w-100 mx-auto   my-4 waves-effect z-depth-0\" (click)=\"onCancel()\"\r\n        >Cancel</button>\r\n      </div>\r\n      <div class=\"col\"></div>\r\n      <div class=\"col\">\r\n        <button\r\n                type=\"submit\"\r\n                id=\"submit\"\r\n                class=\"btn btn-outline-info btn-rounded w-100 mx-auto my-4 waves-effect z-depth-0 disabled\" [disabled]=\"!this.enableSubmitButton\" (click)=\"onSubmit()\"\r\n        >Submit</button>\r\n      </div>\r\n      <div class=\"col\"></div>\r\n    </div>\r\n  </form>\r\n"

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
        this.enableSubmitButton = false;
        this.RFC = {
            dateRequested: undefined,
            requestedChange: undefined,
            description: undefined
        };
    }
    // User: User = {title: undefined,
    //   site: undefined,
    //   name: undefined,
    //   surname: undefined,
    //   employeeId: undefined,
    //   contactNumber: undefined,
    //   email: undefined,
    //   password: undefined
    // };
    Phase1Component.prototype.onSelectSite = function ($event) {
        this.selectedSite = $event.target.value;
    };
    Phase1Component.prototype.requestedChange = function () {
    };
    Phase1Component.prototype.description = function () {
        var submitButton = document.getElementById('submit');
        if (this.RFC.requestedChange !== undefined && this.RFC.description !== undefined && this.selectedSite !== undefined) {
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
            text: "You won't be able make changes to your submission",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this.phase1Service.submitRequest(_this.RFC, _this.Token, _this.selectedSite).subscribe(function (data) {
                    if (data.success) {
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
            _this.Token = data.tokenValue;
        });
        this.phase1Service.getPageData().subscribe(function (data) {
            _this.usersSites = data;
        });
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

module.exports = "<!-- Created by : Liam Gordon McCabe-->\n<!-- Student number: 27455211-->\n<form>\n    <div class=\"card secondary-color\">\n        <h3 class=\"px-3 text-primary\">Request for Change</h3>\n        <div>\n            <label class=\"px-3 d-inline-block\">Name of Initiator: </label>\n            <p class=\" px-3 d-inline-block\"></p>\n            <label class=\"px-3 d-inline-block\">Date Requested: </label>\n            <p class=\"px-3 d-inline-block\"></p>\n        </div>\n        <div>\n            <label class=\"px-3 d-inline-block\">Department:</label>\n            <p class=\"px-3 d-inline-block\"></p>\n        </div>\n        <label class=\"px-3 \">Request: </label>\n        <p class=\"px-3\">{{this.RFC.requestedChange}}</p>\n        <label class=\"px-3\">Reason: </label>\n        <p class=\"px-3\">{{this.RFC.description}}</p>\n    </div>\n    <div class=\" shadow card bg-light mx-auto\">\n        <div class=\"form-group\">\n            <h3 class=\"px-3 text-primary\"> CCR specialist phase 1</h3>\n            <div class=\"row\">\n                <div class=\"col-sm\">\n                    <label class=\"px-3\" for=\"priority\">Request Priority</label>\n                </div>\n                <div class=\"col-sm\">\n                    <select ngbPopover=\"Select from the drop down list whether the change request is an EMERGENCY or NON-EMERGENCY (NORMAL).\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"CHANGE REQUEST PRIORITY\"\n                            class=\"rounded w-100 form-control\"\n                            name=\"priority\"\n                            id=\"priority\"\n                            (change)=\"onSelectPriority($event)\" >\n                        <option selected=\"selected\" disabled=\"disabled\">Select one</option>\n                        <option *ngFor=\"let priority of availablePriorities\"  [value]=\"priority[0]\" >{{priority[1]}}</option>\n                    </select>\n                </div>\n                <div class=\"col-sm\">\n                    <div *ngIf=\"this.displayPredictedRisks\">\n                        <label class=\"px-3\"  for=\"predictedImpact\"> Predicted Risk/s </label>\n                    </div>\n                </div>\n                <div class=\"col-sm\">\n                    <div *ngIf=\"this.displayPredictedRisks\">\n                        <ngx-select-dropdown\n                                ngbPopover=\"Select the appropriate option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"PREDICTED RISK\"\n                                id=\"predictedImpact\"\n                                name=\"predictedImpact\"\n                                (change)=\"onSelectImpact($event)\"\n                                [multiple]=\"true\"\n                                [(ngModel)]=\"this.phase1.predictedImpact\"\n                                [options]=\"availableImpacts\">\n                        </ngx-select-dropdown>\n\n                    </div>\n                </div>\n                <div class=\"col-sm \"></div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"this.displayChangePeriod\">\n            <div class=\"row\" >\n                <div class=\"col-sm\">\n                    <div *ngIf=\"this.displayChangePeriod\">\n                        <label class=\"px-3\" for=\"changePeriod\" >Change Period</label>\n                    </div>\n                </div>\n                <div class=\"col-sm\">\n                    <div *ngIf=\"this.displayChangePeriod\">\n                        <select ngbPopover=\"Specify whether the requested change will be permanent or just temporary by selecting an option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"CHANGE PERIOD\"\n                                class=\"rounded w-100 form-control\"\n                                name=\"changePeriod\"\n                                id=\"changePeriod\"\n                                (change)=\"onSelectChangePeriod($event)\">\n                            <option selected=\"selected\" disabled=\"disabled\">Select one</option>\n                            <option *ngFor=\"let period of availablePeriods\"  [value]=\"period[0]\" >{{period[1]}}</option>\n                        </select>\n                     </div>\n                </div>\n                <div class=\"col-sm\">\n                    <div  *ngIf=\"this.displaySelectTemporaryAmountOfDays\">\n                        <label class=\"px-3\" for=\"changePeriod\" >Temporary period number of days</label>\n                    </div>\n                </div>\n                <div class=\"col-sm\">\n                    <div  *ngIf=\"displaySelectTemporaryAmountOfDays\">\n                        <select ngbPopover=\"Select the appropriate option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"PREDICTED RISK\"\n                                class=\"rounded w-100 form-control\"\n                                name=\"temporaryNoDays\"\n                                id=\"temporaryNoDays\"\n                                (change)=\"onSelectNumberOfTemporaryDays($event)\" >\n                            <option selected=\"selected\" disabled=\"disabled\">Select no. of days</option>\n                            <option  *ngFor=\"let day of availableNumberOfTemporaryDays\" value=\"{{day}}\">{{day}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm\"></div>\n            </div>\n            <div class=\"row pt-3\" *ngIf=\"displayTemporaryDateSelection\">\n                <div class=\"col-sm\">\n                    <label class=\"px-3\" for=\"temporaryStartPeriod\" >Temporary period start date:</label>\n                </div>\n                <div class=\"col-sm \">\n                    <input class=\"rounded w-100 form-control\"\n                           type=\"text\"\n                           id=\"temporaryStartPeriod\"\n                           name=\"temporaryStartPeriod\"\n                           bsDatepicker\n                           [bsConfig]=\"datepickerConfig\"\n                           [(ngModel)]=\"this.phase1.temporaryPeriodStartDate\"\n                           (ngModelChange)=\"onSelectTemporaryStartDate($event)\"\n                           >\n                </div>\n                <div class=\"col-sm \"> <label class=\"px-3\" for=\"temporaryEndPeriod\" >Temporary period end date:</label></div>\n                <div class=\"col-sm \"><input  class=\"rounded w-100 form-control\"\n                                             type=\"text\"\n                                             id=\"temporaryEndPeriod\"\n                                             name=\"temporaryEndPeriod\"\n                                             bsDatepicker\n                                             [bsConfig]=\"datepickerConfig\"\n                                             [(ngModel)]=\"this.phase1.temporaryPeriodEndDate\"\n                                             disabled\n                                             readonly>\n                </div>\n                <div class=\"col-sm \"></div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"this.displayNatureOfChange\">\n            <div class=\"row\" *ngIf=\"this.displayNatureOfChange\">\n                <div class=\"col-sm\">\n                    <div *ngIf=\"this.displayNatureOfChange\">\n                        <label class=\"px-3\" for=\"natureOfChange\">Nature of the change</label>\n                    </div>\n                </div>\n                <div class=\"col-sm\">\n                    <div *ngIf=\"this.displayNatureOfChange\">\n                        <select popoverTitle=\"SELECT NATURE OF CHANGE\" ngbPopover=\"Select an option from the drop down list. National = Change affects both Northern and Southern regions. Regional = Either Northern or Southern is affected, but not both. Local = any ATCC or TCU or RT\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                                class=\"rounded w-100 form-control\"\n                                name=\"natureOfChange\"\n                                id=\"natureOfChange\"\n                                (change)=\"onSelectNatureOfChange($event)\"\n                                [(ngModel)]=\"this.phase1.natureOfChange\">\n                            <option selected=\"selected\" disabled=\"disabled\">Select one</option>\n                            <option *ngFor=\"let change of availableNatureOfChange\"  [value]=\"change[0]\" >{{change[1]}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm\">\n                    <div *ngIf=\"this.displayEOSystem\">\n                        <label class=\"px-3\"  for=\"eosSystem\">EOS system</label>\n                    </div>\n                </div>\n                <div class=\"col-sm\">\n                    <div *ngIf=\"this.displayEOSystem\">\n                        <select popoverTitle=\"SELECT EOS SYSTEM\" ngbPopover=\"Please select from the drop down list the Essential Operational System (EOS) to which the Trusted Computing Base (TCB) change will be applied.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                                class=\"w-100 rounded form-control\"\n                                name=\"eosSystem\"\n                                id=\"eosSystem\"\n                                (change)=\"onSelectEosSystem($event)\" >\n                            <option selected=\"selected\" disabled=\"disabled\">Select one</option>\n                            <option *ngFor=\"let eos of availableEosSystems\"  [value]=\"eos[0]\" >{{eos[1]}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm \"></div>\n            </div>\n        </div>\n<!--</div>-->\n<!--    <div class=\"card\">-->\n        <div class=\"form-group\" *ngIf=\"this.displayTCB_CRF_ID\">\n            <div class=\"row\" *ngIf=\"this.displayTCB_CRF_ID\">\n                <div class=\"col-sm\">\n                    <label class=\"px-3\" for=\"tcbID\">TCB-CRF ID:</label>\n                </div>\n                <div class=\"col-sm\">\n                    <input popoverTitle=\"CHANGE REQUEST IDENTIFICATION\" ngbPopover=\"The TCB-CRF ID is an unique number relative to an EOS system issued by the TCB-CRF Administrator for every change request submitted for approval and implementation.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                           class=\"rounded form-control\"\n                           id=\"tcbID\"\n                           name=\"tcbID\"\n                           type=\"text\"\n                           [(ngModel)]=\"this.phase1.TCB_CRF_ID\"  >\n                </div>\n                <div class=\"col-sm\"></div>\n                <div class=\"col-sm\"></div>\n                <div class=\"col-sm\"></div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"this.displayConfigurationItems\">\n            <div *ngIf=\"this.displayConfigurationItems\">\n                <div class=\"row\">\n                    <div class=\"col-sm\">\n                        <label class=\"px-3\" for=\"configurationItems\">Configuration Items: </label>\n                    </div>\n                    <div class=\"col\"></div>\n                </div>\n                <div class=\"px-3\">\n                    <input  popoverTitle=\"ENTER ALL CONFIGURATION ITEMS\" ngbPopover=\"TECH: Enter any sub system or system component that will be subject to the change e.g. EXTRA HDD, SW VERS., RADAR FEED, DATASET- ANY CHANGE TO THE TCB NEEDS TO BE APPROVED. OPS: Enter short description of the request.  Maximum 250 characters allowed\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                            maxlength=\"250\"\n                            class=\"rounded w-75 form-control\"\n                            id=\"configurationItems\"\n                            name=\"configurationItems\"\n                            type=\"text\"\n                            (input)=\"this.displayChangeType = true\"\n                            [(ngModel)]=\"this.phase1.configurationItems\">\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div *ngIf=\"this.displayChangeType\">\n                        <label class=\"px-3\">Change Type: </label>\n                    </div>\n                </div>\n                <div class=\"col\"\n                     popoverTitle=\"CHANGE TYPE\" ngbPopover=\"Select the type of change. Hardware (HW), Software (SW) or Firmware (FW). One or more of these options must be ticked if affected by the change.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                >\n                    <div *ngIf=\"this.displayChangeType\">\n                        <label class=\"checkbox-inline px-3\">\n                            <input type=\"checkbox\"\n                                   value=\"HW\"\n                                   (click)=\"onSelectChangeTypeHW($event)\" >\n                            Hardware\n                        </label>\n                        <label class=\"checkbox-inline px-3\">\n                            <input type=\"checkbox\"\n                                   value=\"SW\"\n                                   (click)=\"onSelectChangeTypeSW($event)\">\n                            Software\n                        </label>\n                        <label class=\"checkbox-inline px-3\">\n                            <input type=\"checkbox\"\n                                   value=\"FW\"\n                                   (click)=\"onSelectChangeTypeFW($event)\">\n                            Firmware\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col\"></div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div *ngIf=\"this.displayAdditionalAttachedDocuments\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <label class=\"px-3 \">Additional attached Documents: </label>\n                    </div>\n                    <div class=\"col\"\n                     popoverTitle=\"ADDITIONAL DOCUMENTS ATTACHED\" ngbPopover=\"Tick the box next to the appropriate answer whether additional documents are attached for Phase-1. Normally there should be documents attached explaining why the change is requested and what pre-testing and evaluation has been done. \" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                    >\n                        <Label class=\"radio-inline px-3\">\n                            <input type=\"radio\"\n                                   name=\"additionalDocs\"\n                                   value=\"yes\"\n                                   (click)=\"onSelectAdditionalDocuments($event)\">\n                            Yes\n                        </Label>\n                        <Label class=\"radio-inline px-3\">\n                            <input type=\"radio\"\n                                   name=\"additionalDocs\"\n                                   value=\"no\"\n                                   (click)=\"onSelectAdditionalDocuments($event)\" >\n                            No\n                        </Label>\n                    </div>\n                    <div class=\"col\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"this.phase1.additionalDocuments === true\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <label class=\"px-3\" for=\"numberOfPages\">Number of Pages (Documents): </label>\n                </div>\n                <div class=\"col\">\n                    <input class=\"px-3 form-control rounded\"\n                           type=\"number\"\n                           name=\"numberOfPages\"\n                           id=\"numberOfPages\"\n                           [(ngModel)]=\"this.phase1.numberOfPages\">\n                </div>\n                <div class=\"col\"></div>\n            </div>\n            <div class=\"px-3\">\n                <ngx-file-drop multiple dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\n                               (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n                    <ng-template  ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n                        Please drag and drop your additional files here\n                        <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\n                    </ng-template>\n                </ngx-file-drop>\n                <div class=\"upload-table px-3\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr>\n                            <th>Name</th>\n                        </tr>\n                        </thead>\n                        <tbody class=\"upload-name-style\">\n                        <tr *ngFor=\"let item of files\">\n                            <td><strong>{{ item[0].relativePath }}</strong></td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"this.displayEstimatedImpact\">\n            <label class=\"px-3\">Estimated Impact: </label>\n            <div class=\"px-3\">\n                <div *ngIf=\"this.displayEstimatedImpactOps\">\n                    <label for=\"operationsImpact\" class=\"\">Operations: </label>\n                    <br>\n                    <input popoverTitle=\"IMPACT=FUNCTIONAL/PROCEDURAL/etc\" ngbPopover=\"Operations: e.g. NORM mode will be down, Redundency lost, No new FPLs, Operator Handbooks\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                           class=\"w-75 rounded form-control\"\n                           type=\"text\"\n                           id=\"operationsImpact\"\n                           name=\"operationsImpact\"\n                           (input)=\"estimatedImpact($event)\"\n                           [(ngModel)]=\"this.phase1.estimatedImpacts.operations\">\n                </div>\n                <div *ngIf=\"this.displayEstimatedImpactClients\">\n                    <label for=\"clientsImpact\" class=\"\">Clients: </label>\n                    <br>\n                    <input popoverTitle=\"IMPACT=FUNCTIONAL/PROCEDURAL/etc\" ngbPopover=\"Clients: External and Internal - loss of service such as slot information, procedural changes, etc.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                           class=\" w-75 rounded form-control\"\n                           type=\"text\"\n                           id=\"clientsImpact\"\n                           name=\"clientsImpact\"\n                           (input)=\"estimatedImpact($event)\"\n                           [(ngModel)]=\"this.phase1.estimatedImpacts.clients\">\n                </div>\n                <div *ngIf=\"this.displayEstimatedImpactTech\">\n                    <label for=\"technicalImpact\" class=\"\">Technical: </label>\n                    <br>\n                    <input popoverTitle=\"IMPACT=FUNCTIONAL/PROCEDURAL/etc\" ngbPopover=\"Technical: Node Down, LAN switch down, Documents\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                           class=\" w-75 rounded form-control\"\n                           type=\"text\"\n                           id=\"technicalImpact\"\n                           name=\"technicalImpact\"\n                           (input)=\"estimatedImpact($event)\"\n                           [(ngModel)]=\"this.phase1.estimatedImpacts.technical\">\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"this.displayProblemReportRaised\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <label class=\"px-3\">Problem Report raised with Contractor?</label>\n                </div>\n                <div class=\"col\"\n                     popoverTitle=\"PROBLEM REPORT RAISED?\" ngbPopover=\"Specify yes or no whether a problem request or report has been raised with the contractor by selecting the appropriate check box with a left-mouse-button click.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                >\n                    <Label class=\"radio-inline px-3\">\n                        <input type=\"radio\"\n                               name=\"reportRaised\"\n                               value=\"yes\"\n                               (click)=\"onSelectReportRaised($event)\">\n                        Yes\n                    </Label>\n                    <Label class=\"radio-inline px-3\">\n                        <input type=\"radio\"\n                               name=\"reportRaised\"\n                               value=\"no\"\n                               (click)=\"onSelectReportRaised($event)\" >\n                        No\n                    </Label>\n                </div>\n                <div class=\"col\"></div>\n            </div>\n            <div *ngIf=\"this.phase1.problemReportRaised\" >\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <label for=\"problemReportRef\" class=\"px-3\">Problem Report Reference Number: </label>\n                    </div>\n                    <div class=\"col\">\n                        <input popoverTitle=\"PROBLEM REPORT REFERENCE\" ngbPopover=\"Enter the problem report reference number here. The problem report refers to a report that was sent to the contractor to improve a functionality or solve a problem on the system. Can be a PR, ECR, PCR, CR, etc.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                               class=\"w-100 rounded form-control\"\n                               type=\"text\"\n                               name=\"problemReportRef\"\n                               id=\"problemReportRef\"\n                               (input)=\"onInputProblemReportRef()\"\n                               [(ngModel)]=\"this.phase1.problemReportRef\">\n                    </div>\n                    <div class=\"col\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"this.displayChangePreTested\">\n            <div *ngIf=\"this.displayChangePreTested\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <label class=\"px-3\">Change successfully pre-tested ?</label>\n                    </div>\n                    <div class=\"col\"\n                         popoverTitle=\"CHANGE SUCCESSFULLY PRE-TESTED ?\" ngbPopover=\"Specify whether pre-tests or validations concerning the change were successful by selecting a check box accordingly with the left-mouse button.\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                    >\n                        <Label class=\"radio-inline px-3\">\n                            <input type=\"radio\"\n                                   name=\"preTested\"\n                                   value=\"yes\"\n                                   (click)=\"onSelectPreTested($event)\">\n                            Yes\n                        </Label>\n                        <Label class=\"radio-inline px-3\">\n                            <input type=\"radio\"\n                                   name=\"preTested\"\n                                   value=\"no\"\n                                   (click)=\"onSelectPreTested($event)\" >\n                            No\n                        </Label>\n                        <Label class=\"radio-inline px-3\">\n                            <input type=\"radio\"\n                                   name=\"preTested\"\n                                   value=\"na\"\n                                   (click)=\"onSelectPreTested($event)\" >\n                            N/A\n                        </Label>\n                    </div>\n                    <div class=\"col\"></div>\n                </div>\n                <div class=\"px-3\" *ngIf=\"this.displayChangeNotSuccessfullyTestedReason\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <label for=\"changeNotSuccessfullyTestedReason\" class=\"\">Reason for unsuccessful test: </label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <input popoverTitle=\"Reason for unsuccessful testing\" ngbPopover=\"If the tests were unsuccessful please provide the reason here\" triggers=\"mouseenter:mouseleave\" placement=\"right\"\n                                   class=\"w-75 rounded form-control\"\n                                   type=\"text\"\n                                   id=\"changeNotSuccessfullyTestedReason\"\n                                   name=\"changeNotSuccessfullyTestedReason\"\n                                   (input)=\"onUnsuccessfulTestReason()\"\n                                   [(ngModel)]=\"this.phase1.changeNotSuccessfullyTestedReason\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n<!--        <div class=\"form-group\">-->\n<!--            <div class=\"row\">-->\n<!--                <div class=\"col\">-->\n<!--                    <label class=\"px-3\">Request submitted to all concerned parties ?</label>-->\n<!--                </div>-->\n<!--                <div class=\"col\">-->\n<!--                    <Label class=\"radio-inline px-3\"><input type=\"radio\" name=\"submittedToAll\" value=\"yes\"  (click)=\"onSelectSubmittedToAllConcerned($event)\">Yes</Label>-->\n<!--                    <Label class=\"radio-inline px-3\"><input type=\"radio\" name=\"submittedToAll\" value=\"no\"   (click)=\"onSelectSubmittedToAllConcerned($event)\" >No</Label>-->\n<!--                </div>-->\n<!--                <div class=\"col\"></div>-->\n<!--            </div>-->\n\n<!--            <div  class=\"px-3\" *ngIf=\"!this.phase2.submittedToAllParties\">-->\n<!--                <div class=\"row\">-->\n<!--                    <div class=\"col\">-->\n<!--                        <label class=\"\">Reason why not submitted to all concerned parties?</label>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"row\">-->\n<!--                    <div class=\"col\">-->\n<!--                        <input class=\" w-75 rounded form-control\" type=\"text\" name=\"requestNotSubmittedToAllParties\" [(ngModel)]=\"this.phase2.notSubmittedToAllPartiesReason\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n\n        <div class=\"form-group\" *ngIf=\"this.displaySpecialistComments\">\n            <div class=\"px-3\" >\n                <div class=\"row\" *ngIf=\"this.displaySpecialistComments\">\n                    <div class=\"col\">\n                        <label for=\"specialistComments\" >Specialist comments</label>\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"this.displaySpecialistComments\">\n                    <div class=\"col\">\n                        <input\n                                class=\"px-3 w-75 rounded form-control\"\n                                type=\"text\"\n                                name=\"specialistComments\"\n                                id=\"specialistComments\"\n                                (input)=\"onInputSpecialistComment()\"\n                                [(ngModel)]=\"this.phase1.specialistComment\">\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\"  *ngIf=\"this.displaySpecialistComments && !this.displaySelectTemporaryAmountOfDays\" >\n            <div class=\"py-3\">\n                <div class=\"row\" >\n                    <div class=\"col\">\n                        <label class=\"px-3\" for=\"proposedDate\">Proposed Implementation Date: </label>\n                    </div>\n                    <div class=\"col\">\n                        <input class=\" px-3 rounded w-75 form-control\"\n                               type=\"text\"\n                               id=\"proposedDate\"\n                               name=\"proposedDate\"\n                               [bsConfig]=\"datepickerConfig\"\n                               (click)=\"onSelectProposedImplementationDate()\"\n                               [(ngModel)]=\"this.phase1.proposedImplementationDate\"  bsDatepicker>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"this.displayRecommendOrOppose || this.emergencySelected\">\n            <div class=\"row\" >\n                <div class=\"col\">\n                    <label class=\"px-3\" for=\"recommend/oppose\">Recommend Or Oppose change:</label>\n                </div>\n                <div class=\"col\">\n\n                    <select class=\"px-3 rounded w-75 form-control\"\n                            id=\"recommend/oppose\"\n                            name=\"recommend/oppose\"\n                            (change)=\"onSelectRecommendOrOppose($event)\" >\n                        <option selected=\"selected\" disabled=\"disabled\">Select one</option>\n                        <option  value=\"Recommend\" >Recommend</option>\n                        <option value=\"Oppose\">Oppose</option>\n                        <<option value=\"re-test\">Re-Test</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div  class=\"row px-3\">\n                <div class=\"col\"></div>\n                <div class=\"col\">\n                    <button class=\"btn btn-outline-danger btn-rounded w-100  my-4 waves-effect z-depth-0\"\n                            (click)=\"onSubmit()\"> Cancel\n                    </button>\n                </div>\n                <div class=\"col\"></div>\n                <div class=\"col\" >\n                    <button [disabled]=\"!this.activateSubmitButton\"\n                            class=\"btn btn-outline-info btn-rounded w-100 my-4  waves-effect z-depth-0 disabled\"\n                            id=\"submit\"\n                            (click)=\"onSubmit()\"> Submit\n                    </button>\n                </div>\n                <div class=\"col\"></div>\n            </div>\n        </div>\n    </div>\n</form>\n"

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
/* harmony import */ var _services_phase2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/phase2.service */ "./src/app/services/phase2.service.ts");
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
    function Phase2Component(phase2) {
        this.phase2 = phase2;
        this.files = [];
        this.availableNumberOfTemporaryDays = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
            '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
        this.availablePriorities = ['EMERGENCY', 'Urgent', 'Safety', 'Improvement', 'Other'];
        this.availablePeriods = ['Permanent', 'Temporary', 'Trial'];
        this.availableImpacts = ['CLIENTS', 'OPERATIONS', 'TECHNICAL'];
        this.availableNatureOfChange = ['National', 'Local', 'Regional'];
        this.availableEosSystems = ['AFTN', 'AMHS', 'ANAIS', 'A-SMGCS', 'ATIS', 'AWOS', 'CAD', 'CAMU', 'DAID', 'DATIS', 'DIESEL BACKUP',
            'DITTEL', 'DME', 'FRS', 'FWD RELAY', 'ILS', 'IVSAT', 'MLAT', 'NDB', 'OTN', 'OTN', 'RADAR', 'SATELLITE', 'SMR', 'SQUIB', 'TERNS',
            'TITAN', 'TOPSKY', 'UPS', 'VCCS', 'VHF', 'VOR', 'VPN'];
        this.RFC = {
            dateRequested: undefined,
            requestedChange: undefined,
            description: undefined
        };
        this.phase1 = {
            TCB_CRF_ID: undefined,
            requestPriority: undefined,
            predictedImpact: [],
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
            recommend_oppose: undefined
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
        this.phase1.requestPriority = $event.target.value;
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
        this.phase1.changePeriod = $event.target.value;
    };
    Phase2Component.prototype.onSelectNumberOfTemporaryDays = function ($event) {
        this.phase1.temporaryPeriodNumberOfDays = $event.target.value;
        this.displayTemporaryDateSelection = true;
    };
    Phase2Component.prototype.onSelectTemporaryStartDate = function ($event) {
        var maxDate = new Date();
        maxDate.setDate($event.getDate() + parseInt('' + this.phase1.temporaryPeriodNumberOfDays, 10));
        this.phase1.temporaryPeriodEndDate = maxDate;
        this.displayNatureOfChange = true;
    };
    Phase2Component.prototype.onSelectImpact = function ($event) {
        if (this.phase1.predictedImpact !== []) {
            this.displayChangePeriod = true;
            if (this.phase1.predictedImpact.includes('CLIENTS')) {
                this.displayEstimatedImpactClients = true;
            }
            else {
                this.displayEstimatedImpactClients = false;
            }
            if (this.phase1.predictedImpact.includes('TECHNICAL')) {
                this.displayEstimatedImpactTech = true;
            }
            else {
                this.displayEstimatedImpactTech = false;
            }
            if (this.phase1.predictedImpact.includes('OPERATIONS')) {
                this.displayEstimatedImpactOps = true;
            }
            else {
                this.displayEstimatedImpactOps = false;
            }
        }
        else {
            this.displayChangePeriod = false;
        }
    };
    Phase2Component.prototype.onSelectNatureOfChange = function ($event) {
        if (this.phase1.natureOfChange !== undefined) {
            this.displayEOSystem = true;
        }
        else {
            this.displayEOSystem = false;
        }
    };
    Phase2Component.prototype.onSelectEosSystem = function ($event) {
        this.phase1.eosSystem = $event.target.value;
        this.phase1.TCB_CRF_ID = $event.target.value + '0001'; // database reference to eos tcb number + 1
        this.displayTCB_CRF_ID = true;
        this.displayConfigurationItems = true;
    };
    Phase2Component.prototype.onSelectChangeTypeHW = function (e) {
        if (e.target.checked) {
            this.phase1.change.hardware = true;
        }
        else {
            this.phase1.change.hardware = false;
        }
        if (this.phase1.change.firmware || this.phase1.change.software || this.phase1.change.hardware) {
            this.displayAdditionalAttachedDocuments = true;
        }
        else {
            this.displayAdditionalAttachedDocuments = false;
        }
    };
    Phase2Component.prototype.onSelectChangeTypeSW = function (e) {
        if (e.target.checked) {
            this.phase1.change.software = true;
        }
        else {
            this.phase1.change.software = false;
        }
        if (this.phase1.change.firmware || this.phase1.change.software || this.phase1.change.hardware) {
            this.displayAdditionalAttachedDocuments = true;
        }
        else {
            this.displayAdditionalAttachedDocuments = false;
        }
    };
    Phase2Component.prototype.onSelectChangeTypeFW = function (e) {
        if (e.target.checked) {
            this.phase1.change.firmware = true;
        }
        else {
            this.phase1.change.firmware = false;
        }
        if (this.phase1.change.firmware || this.phase1.change.software || this.phase1.change.hardware) {
            this.displayAdditionalAttachedDocuments = true;
        }
        else {
            this.displayAdditionalAttachedDocuments = false;
        }
    };
    Phase2Component.prototype.onSelectAdditionalDocuments = function (e) {
        if (e.target.value === 'yes') {
            this.phase1.additionalDocuments = true;
            this.displayEstimatedImpact = false;
        }
        else if (e.target.value === 'no') {
            this.files = [];
            this.phase1.additionalDocuments = false;
            this.phase1.numberOfPages = undefined;
            this.displayEstimatedImpact = true;
        }
    };
    Phase2Component.prototype.dropped = function (files) {
        this.displayEstimatedImpact = true;
        // this.files = files;
        this.files.push(files);
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    /**
                     // You could upload it like this:
                     const formData = new FormData()
                     formData.append('logo', file, relativePath)

                     // Headers
                     const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

                     this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
                     .subscribe(data => {
            // Sanitized logo returned from backend
          })
                     **/
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            _loop_1(droppedFile);
        }
    };
    Phase2Component.prototype.fileOver = function (event) {
        console.log(event);
    };
    Phase2Component.prototype.fileLeave = function (event) {
        console.log(event);
    };
    Phase2Component.prototype.estimatedImpact = function ($event) {
        if (this.phase1.estimatedImpacts.technical !== undefined ||
            this.phase1.estimatedImpacts.clients !== undefined ||
            this.phase1.estimatedImpacts.operations !== undefined) {
            this.displayProblemReportRaised = true;
        }
        else {
            this.displayProblemReportRaised = false;
        }
    };
    Phase2Component.prototype.onSelectReportRaised = function (e) {
        if (e.target.value === 'yes') {
            this.displayChangePreTested = false;
            this.phase1.problemReportRaised = true;
        }
        else if (e.target.value === 'no') {
            this.displayChangePreTested = true;
            this.phase1.problemReportRef = undefined;
            this.phase1.problemReportRaised = false;
        }
    };
    Phase2Component.prototype.onInputProblemReportRef = function () {
        this.displayChangePreTested = true;
    };
    Phase2Component.prototype.onSelectPreTested = function (e) {
        if (e.target.value === 'yes') {
            this.phase1.changeSuccessfullyTested = 'yes';
            this.displayChangeNotSuccessfullyTestedReason = false;
            this.displaySpecialistComments = true;
            this.phase1.changeNotSuccessfullyTestedReason = undefined;
            if (this.displaySelectTemporaryAmountOfDays) {
                this.displayRecommendOrOppose = true;
            }
        }
        else if (e.target.value === 'no') {
            this.phase1.changeNotSuccessfullyTestedReason = undefined;
            this.phase1.changeSuccessfullyTested = 'no';
            this.displayChangeNotSuccessfullyTestedReason = true;
            this.displaySpecialistComments = false;
            this.displayRecommendOrOppose = false;
        }
        else if (e.target.value === 'na') {
            this.phase1.changeSuccessfullyTested = 'na';
            this.displayChangeNotSuccessfullyTestedReason = false;
            this.displaySpecialistComments = true;
            this.phase1.changeNotSuccessfullyTestedReason = undefined;
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
        this.phase1.recommend_oppose = $event.target.value;
        var submitButton = document.getElementById('submit');
        submitButton.classList.remove('disabled');
        this.activateSubmitButton = true;
    };
    // onSelectSubmittedToAllConcerned (e) {
    //     if (e.target.value === 'yes') {
    //         this.phase2.submittedToAllParties = true;
    //     } else if (e.target.value === 'no') {
    //         this.phase2.notSubmittedToAllPartiesReason = undefined;
    //         this.phase2.submittedToAllParties = false;
    //     }
    // }
    Phase2Component.prototype.onSubmit = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: 'Are you sure?',
            text: "You won't be able make changes to your submission",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // perform post with service
                _this.phase2.submitPhase2(_this.phase1, _this.Token).subscribe(function (data) {
                    if (data.success) {
                    }
                });
                console.log(JSON.stringify(_this.phase1));
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
        this.phase2.getCSRFToken().subscribe(function (data) {
            _this.Token = data.tokenValue;
        });
        this.phase2.getPageData().subscribe(function (data) {
            _this.availablePriorities = data[0];
            _this.availableImpacts = data[1];
            _this.availablePeriods = data[2];
            _this.availableNatureOfChange = data[3];
            _this.availableEosSystems = data[4];
        });
        this.RFC.requestedChange = 'We need new laptops for engineering';
        this.RFC.description = 'The reason for this is some blah blah software that can only run on blah blah nonsens give me new ones. Newones forever been asldfnadsnfgjSDBNVL;Sndv;ljNF;Lhnl;gvnW;LFHoefhoUIHEFOJKnefHWEV         ERFG   wef  ew fwef    wef     wegf    wef     ';
        this.phase1.TCB_CRF_ID = 'Undefined';
    };
    Phase2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phase1',
            template: __webpack_require__(/*! ./phase2.component.html */ "./src/app/pages/phase2/phase2.component.html"),
            styles: [__webpack_require__(/*! ./phase2.component.css */ "./src/app/pages/phase2/phase2.component.css")]
        }),
        __metadata("design:paramtypes", [_services_phase2_service__WEBPACK_IMPORTED_MODULE_2__["Phase2Service"]])
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

module.exports = ""

/***/ }),

/***/ "./src/app/pages/phase3/phase3.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/phase3/phase3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Created by Blaine Viljoen(28023374)-->\r\n\r\n<form>\r\n    <div class=\"shadow card bg-light mx-auto\">\r\n        <div class=\"form-group\">\r\n            <h3 class=\"pt-3 px-3 text-primary\">CCR Phase 3: Sign Off</h3>\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">Implementation successful?</label>\r\n                </div>\r\n                <div ngbPopover=\"Select 'Yes' or 'No' whether the change was successfully implemented or not. By left-mouse-button clicking on the appropriate check box the selection is made.\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST SUCCESSFUL IMPLEMENTATION\"\r\n                        class=\"col\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"implementationSuccess\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectImplementationSuccessful($event)\"\r\n                        >\r\n                        Yes\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"implementationSuccess\"\r\n                               value=\"no\"\r\n                               (click)=\"onSelectImplementationSuccessful($event)\"\r\n                        >\r\n                        No\r\n                    </Label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row pt-3 px-3\">\r\n                <div class=\"col\" *ngIf=\"!this.phase3.implementationSuccessful&&this.showImpChange\">\r\n                    <ngx-select-dropdown ngbPopover=\"Select from the drop down list whether the change request has either been Aborted or Regressed.\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST ABORT/REGRESS\" id=\"abortRegress\" name=\"abortRegress\"\r\n                        (change)=\"onSelectAbortRegress($event)\"\r\n                        [multiple]=\"false\"\r\n                        [(ngModel)]=\"this.phase3.abortRegressReason\"\r\n                        [options]=\"abortOrRegress\"\r\n                    >\r\n                    </ngx-select-dropdown>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.abort||this.phase3.regress\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3 pt-2\" for=\"abortRegressReason\">Reason:</label>\r\n                </div>\r\n                <div ngbPopover=\"Please provide any relevant information as to why this change request was aborted/regressed.\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST ABORT/REGRESS REASON\"\r\n                        class=\"col-sm\">\r\n                    <input type=\"text\" id=\"abortRegressReason\" name=\"abortRegressReason\" class=\"px-3 rounded form-control\" [(ngModel)]=\"this.phase3.impSuccessReason\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.regress\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">Already Regressed?</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"alreadyRegressed\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectAlreadyRegressed($event)\"\r\n                        >\r\n                        Yes\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"alreadyRegressed\"\r\n                               value=\"no\"\r\n                               (click)=\"onSelectAlreadyRegressed($event)\"\r\n                        >\r\n                        No\r\n                    </Label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"!this.phase3.alreadyRegressed && this.showSched\">\r\n                <div class=\"col\">\r\n                    <label class=\"px-3\" for=\"schedRegressDate\">Scheduled Regression Date: </label>\r\n                </div>\r\n                <div ngbPopover=\"If for some reason a regression was required after the change was implemented but could not take place for whatever reason, it will be required to schedule a regression as soon as possible. Please select a date for the regression of the change request.\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST REGRESSION DATE\"\r\n                        class=\"col\" >\r\n                    <input class=\"px-3 rounded w-75 form-control\"\r\n                           type=\"text\"\r\n                           id=\"schedRegressDate\"\r\n                           name=\"schedRegressDate\"\r\n                           [bsConfig]=\"datepickerConfig\"\r\n                           [(ngModel)]=\"this.phase3.schedRegressionDate\"  bsDatepicker>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3 pr-3\" *ngIf=\"this.phase3.implementationSuccessful&&this.showImpChange\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\" for=\"tcbEvalPeriod\" >Temporary period start date:</label>\r\n                </div>\r\n                <div ngbPopover=\"This field refers to an evaluation period required to validate the success of the change over a longer period of time. The TCBCP administrator must enter a start date and end date  not exceeding 31 days in total.\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST TCB EVALUATION PERIOD\"\r\n                        class=\"col-sm\" >\r\n                    <input class=\"rounded w-100 form-control\"\r\n                           type=\"text\"\r\n                           id=\"tcbEvalPeriod\"\r\n                           name=\"tcbEvalPeriod\"\r\n                           bsDaterangepicker\r\n                           [bsConfig]=\"datepickerConfig\"\r\n                           [(ngModel)]=\"this.dateRangePicker\"\r\n                           (ngModelChange)=\"onSelectTCBEval($event)\"\r\n                    >\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.implementationSuccessful&&this.showImpChange\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">Additional documents?</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"additionalDocs\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectAdditionalDocs($event)\"\r\n                        >\r\n                        Yes\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"additionalDocs\"\r\n                               value=\"no\"\r\n                               (click)=\"onSelectAdditionalDocs($event)\"\r\n                        >\r\n                        No\r\n                    </Label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.additionalDocs\">\r\n                <div class=\"px-3\" ngbPopover=\"Please drag and drop or select any relevant files that need to uploaded and linked with this respective change request\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST ADDITIONAL DOCUMENTS\">\r\n                    <ngx-file-drop  multiple dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\r\n                                   (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n                        <ng-template  ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n                            Please drag and drop your additional files here\r\n                            <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n                        </ng-template>\r\n                    </ngx-file-drop>\r\n                    <div class=\"upload-table px-3\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th>Name</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody class=\"upload-name-style\">\r\n                            <tr *ngFor=\"let item of files\">\r\n                                <td><strong>{{ item[0].relativePath }}</strong></td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.additionalDocs\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">All Items Updated?</label>\r\n                </div>\r\n                <div ngbPopover=\"At the end of the update period select whether all update items were updated by selecting the 'Yes' check box with the left-mouse-button. It is important to adhere to the update period to achieve finalisation of the TCB-CRF.\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST UPDATED ITEMS\"\r\n                        class=\"col\">\r\n                    <Label class=\"checkbox-inline px-3\">\r\n                        <input type=\"checkbox\"\r\n                               name=\"itemsUpdated\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectItemsUpdated($event)\"\r\n                        >\r\n                        Yes\r\n                    </Label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.itemsUpdated\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3\">Evaluation successful?</label>\r\n                </div>\r\n                <div ngbPopover=\"Please confirm whether or not the change request validation was successful by selecting the corresponding 'Yes' or 'No' options.\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST SUCCESSFUL EVALUATION\"\r\n                        class=\"col\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"evalSuccess\"\r\n                               value=\"yes\"\r\n                               (click)=\"onSelectEvalSuccess($event)\"\r\n                        >\r\n                        Yes\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"evalSuccess\"\r\n                               value=\"no\"\r\n                               (click)=\"onSelectEvalSuccess($event)\"\r\n                        >\r\n                        No\r\n                    </Label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3\" *ngIf=\"this.phase3.evalSuccess\">\r\n                <div class=\"col-sm\">\r\n                    <label  class=\"px-3\">Confirm Close-out:</label>\r\n                </div>\r\n                <div ngbPopover=\"Please confirm or reject the current change request by selecting the corresponding 'Confirm' or 'Reject' options.\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST CONFIRMATION\"\r\n                        class=\"col\">\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"confirmChoice\"\r\n                               value=\"Confirm\"\r\n                               (click)=\"onSelectConfirm($event)\"\r\n                        >\r\n                        Confirm\r\n                    </Label>\r\n                    <Label class=\"radio-inline px-3\">\r\n                        <input type=\"radio\"\r\n                               name=\"confirmChoice\"\r\n                               value=\"Reject\"\r\n                               (click)=\"onSelectConfirm($event)\"\r\n                        >\r\n                        Reject\r\n                    </Label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div  class=\"row px-3\">\r\n                    <div class=\"col\"></div>\r\n                    <div class=\"col\">\r\n                        <button class=\"btn btn-outline-danger btn-rounded w-100  my-4 waves-effect z-depth-0\"\r\n                                (click)=\"onSubmit()\"> Cancel\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                    <div class=\"col\" >\r\n                        <button\r\n                                class=\"btn btn-outline-info btn-rounded w-100 my-4  waves-effect z-depth-0 disabled\"\r\n                                id=\"submit\"\r\n                                (click)=\"onSubmit()\"> Submit\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row pt-3 pr-3\" *ngIf=\"!this.phase3.evalSuccess&&this.showEvalChange\">\r\n                <div class=\"col-sm\">\r\n                    <label class=\"px-3 pt-2\" for=\"evalFail\">Reason:</label>\r\n                </div>\r\n                <div ngbPopover=\"Please provide any relevant information as to why the evaluation of the change request was not successful.\" triggers=\"mouseenter:mouseleave\" placement=\"bottom-left\" popoverTitle=\"CHANGE REQUEST EVALUATION FAILURE REASON\"\r\n                        class=\"col-sm\">\r\n                    <input  type=\"text\" id=\"evalFail\" name=\"evalFail\" class=\"form-control\" [(ngModel)]=\"this.phase3.evalFailure\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"this.activateSubmitButton\">\r\n            <div  class=\"row px-3\">\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\">\r\n                    <button class=\"btn btn-outline-danger btn-rounded w-100  my-4 waves-effect z-depth-0\"\r\n                            (click)=\"onSubmit()\"> Cancel\r\n                    </button>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\" >\r\n                    <button class=\"btn btn-outline-info btn-rounded w-100 my-4  waves-effect z-depth-0\"\r\n                            id=\"submit\"\r\n                            (click)=\"onSubmit()\"> Submit\r\n                    </button>\r\n                </div>\r\n                <div class=\"col\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<!--Created by Blaine Viljoen(28023374)-->\r\n"

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
    function Phase3Component(Phase3Service, router) {
        this.Phase3Service = Phase3Service;
        this.router = router;
        this.files = [];
        this.abortOrRegress = ['Abort', 'Regress'];
        this.phase3 = {
            schedRegressionDate: undefined,
            tcbEvalStart: undefined,
            tcbEvalEnd: undefined,
            implementorName: undefined,
            implementationSuccessful: true,
            abort: false,
            regress: false,
            abortRegressReason: undefined,
            impSuccessReason: undefined,
            alreadyRegressed: true,
            additionalDocs: false,
            itemsUpdated: false,
            evalSuccess: false,
            ccrConfirmation: false,
            evalFailure: undefined
        };
        this.user = '';
        this.Token = null;
        this.datepickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { dateInputFormat: 'YYYY-MM-DD' }, { showWeekNumbers: false }, { minDate: new Date() });
    }
    Phase3Component.prototype.onSelectTCBEval = function ($event) {
        var startDate = $event[0];
        var endDate = $event[1];
        console.log(startDate);
        console.log(endDate);
        this.phase3.tcbEvalStart = startDate;
        this.phase3.tcbEvalEnd = endDate;
    };
    Phase3Component.prototype.onSelectAbortRegress = function ($event) {
        if (this.phase3.abortRegressReason !== undefined) {
            if (this.phase3.abortRegressReason.includes('Abort')) {
                this.phase3.abort = true;
                this.phase3.regress = false;
                this.activateSubmitButton = true;
                this.phase3.abortRegressReason = undefined;
                this.phase3.alreadyRegressed = false;
                this.phase3.schedRegressionDate = undefined;
            }
            else if (this.phase3.abortRegressReason.includes('Regress')) {
                this.phase3.abort = false;
                this.phase3.regress = true;
                this.activateSubmitButton = false;
                this.phase3.abortRegressReason = undefined;
            }
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
            this.phase3.impSuccessReason = undefined;
            this.phase3.alreadyRegressed = true;
            this.activateSubmitButton = false;
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
            this.activateSubmitButton = false;
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
            this.activateSubmitButton = true;
            this.showSched = false;
        }
        else {
            this.phase3.alreadyRegressed = false;
            this.activateSubmitButton = true;
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
            this.activateSubmitButton = false;
        }
        else {
            this.phase3.evalSuccess = false;
            this.showEvalChange = true;
            this.phase3.ccrConfirmation = false;
            this.activateSubmitButton = true;
        }
    };
    Phase3Component.prototype.onSelectConfirm = function (e) {
        if (e.target.value === 'Confirm') {
            this.phase3.ccrConfirmation = true;
            this.activateSubmitButton = true;
        }
        else {
            this.phase3.ccrConfirmation = false;
            this.activateSubmitButton = true;
        }
    };
    Phase3Component.prototype.onSubmit = function () {
        console.log(JSON.stringify(this.phase3));
    };
    Phase3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.Token = this.Phase3Service.getCSRFToken().subscribe(function (data) {
            _this.Token = data.tokenValue;
        });
    };
    Phase3Component.prototype.fileOver = function (event) {
        console.log(event);
    };
    Phase3Component.prototype.fileLeave = function (event) {
        console.log(event);
    };
    Phase3Component.prototype.dropped = function (files) {
        // this.displayEstimatedImpact = true;
        // this.files = files;
        this.files.push(files);
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    /**
                     // You could upload it like this:
                     const formData = new FormData()
                     formData.append('logo', file, relativePath)

                     // Headers
                     const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

                     this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
                     .subscribe(data => {
            // Sanitized logo returned from backend
          })
                     **/
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            _loop_1(droppedFile);
        }
    };
    Phase3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phase3',
            template: __webpack_require__(/*! ./phase3.component.html */ "./src/app/pages/phase3/phase3.component.html"),
            styles: [__webpack_require__(/*! ./phase3.component.css */ "./src/app/pages/phase3/phase3.component.css")]
        }),
        __metadata("design:paramtypes", [_services_phase3_service__WEBPACK_IMPORTED_MODULE_2__["Phase3Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<!-- Created by : Liam Gordon McCabe-->\n<!-- Student number: 27455211-->\n<div class=\"card mx-auto\" style=\"width: 60rem;\">\n\n    <h5 class=\"card-header info-color white-text text-center py-4\">\n        <strong>Register</strong>\n    </h5>\n\n<div class=\"card-body px-lg-5 pt-3\">\n  <form class=\"registrationForm\" >\n\n    <div class=\"form-group\" style=\"color: #757575;\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <label for=\"title\">Title</label>\n            </div>\n            <div class=\"col\">\n                <select\n                        ngbPopover=\"Select a title by selecting an option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"SELECT TITLE\"\n                        class=\"px-3 rounded form-control\"\n                        name=\"title\"\n                        id=\"title\"\n                        (change)=\"onSelectTitle($event)\"\n                        [(ngModel)]=\"this.User.title\"\n                >\n                    <option selected=\"selected\" disabled=\"disabled\">Select one</option>\n                    <option *ngFor=\"let title of availableTitles\"  [value]=\"title[0]\" >{{title[1]}}</option>\n                </select>\n            </div>\n            <div class=\"col\">\n                <label for=\"site\">Site</label>\n            </div>\n            <div class=\"col\">\n                <select\n                        ngbPopover=\"Select a site by selecting an option from the drop down list\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"SELECT SITE\"\n                        class=\"px-3 rounded form-control\"\n                        [(ngModel)]=\"this.User.site\"\n                        name=\"site\"\n                        id=\"site\"\n                        (change)=\"onSelectTitle($event)\"\n                >\n                    <option selected=\"selected\" disabled=\"disabled\">Select one</option>\n                    <option *ngFor=\"let site of availableSites\" [value]=\"site[0]\">{{site[1]}}</option>\n                </select>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\" >\n      <label for=\"name\">Name</label>\n      <input\n              ngbPopover=\"Please enter your first name\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"INPUT FIRST NAME\"\n              required class=\"form-control\" [(ngModel)]=\"User.name\"\n              type=\"text\" name=\"name\" id=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"surname\">Surname</label>\n      <input\n              ngbPopover=\"Please enter your surname\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"INPUT SURNAME\"\n              required class=\"form-control\" [(ngModel)]=\"User.surname\"\n              type=\"text\" name=\"surname\" id=\"surname\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"employeeID\">Employee ID</label>\n      <input\n              ngbPopover=\"Please enter your employee ID\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"INPUT EMPLOYEE ID\"\n              class=\"form-control\" (input)=\"validateEmpId(User.employeeId)\"\n              [ngClass]=\"{'true': this.showEmpId, 'false':!this.showEmpId}\"\n              [(ngModel)]=\"User.employeeId\"\n              type=\"number\" name='EmployeeId' id=\"employeeID\" required>\n    </div>\n    <div class=\"form-group\">\n      <label>Contact Number</label>\n      <label *ngIf=\"this.showPhone == false\" style=\"color: red\">Invalid South African Number</label>\n      <label *ngIf=\"this.showPhone == true\" style=\"color: green\">Valid South African Number </label>\n      <input\n              ngbPopover=\"Please enter your phone number\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"INPUT PHONE NUMBER\"\n              (input)=\"validatePhoneNumber(this.User.contactNumber)\"\n              class=\"form-control\" [ngClass]=\"{'true': this.showPhone, 'false': !this.showPhone}\"\n              [(ngModel)]=\"this.User.contactNumber\"\n              type=\"text\"\n              name=\"contactNum\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <label *ngIf=\"this.showEmail == false\" style=\"color: red\">Invalid</label>\n      <label *ngIf=\"this.showEmail == true\" style=\"color: green\">Valid\n      </label>\n      <input\n              ngbPopover=\"Please enter the username of your email before the @\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"INPUT USERNAME\"\n              (input)=\"validateEmail(User.email)\" class=\"form-control\"\n             [ngClass]=\"{'true': this.showEmail, 'false': !this.showEmail}\"\n             id=\"username\" name=\"username\" [(ngModel)]= User.email type=\"email\"\n             required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input\n              ngbPopover=\"Password must be at least 8 characters in length containing  1 Uppercase, 1 Lowercase and 1 special character\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"INPUT PASSWORD\"\n             (input)=\"validatePassword(password)\"\n             [ngClass]=\"{'true': this.showPassword, 'false': !this.showPassword}\"\n             class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" type=\"password\" required>\n      <password-strength-meter [password]=\"password\"\n                               class=\"form-control\" id=\"passwordStrengthMeter\" name=\"passwordStrengthMeter\" >\n      </password-strength-meter>\n      <label for=\"passwordCheck\">Confirm Password</label>\n      <input\n              ngbPopover=\"Re-Enter your password\" triggers=\"mouseenter:mouseleave\" placement=\"right\" popoverTitle=\"INPUT PASSWORD AGAIN\"\n              (input)=\"confirmPassword(passwordCheck)\"\n             [ngClass]=\"{'true': this.showPasswordCheck, 'false': !this.showPasswordCheck}\"\n             class=\"form-control\" id=\"passwordCheck\" name=\"passwordCheck\" [(ngModel)]=\"passwordCheck\" type=\"password\">\n\n    </div>\n<!--    <div class=\"form-group\">-->\n<!--      <label for=\"permissionLevel\">Permission Level</label>-->\n<!--      <select title=\"Select your relevant Permission level\" required  (change)=\"onSelectPermission($event.target.value)\"-->\n<!--              name=\"permissionLevel\" id=\"permissionLevel\">-->\n<!--        <option *ngFor=\"let permission of availablePermissions\">{{permission}}</option>-->\n<!--      </select>-->\n<!--    </div>-->\n<!--    <div class=\"form-group\">-->\n<!--      <label for=\"region\">Region</label>-->\n<!--      <select title=\"Select your relevant region\" (change)=\"onSelectRegion($event.target.value)\" name=\"region\" id=\"region\">-->\n<!--        <option *ngFor=\"let region of availableRegions\">{{region}}</option>-->\n<!--      </select>-->\n<!--    </div>-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<label>Submit</label>-->\n      <!--<textarea rows=\"4\" class=\"form-control\" [(ngModel)]=\"email.description\"-->\n                <!--type=\"text\" name=\"enquiry\"></textarea>-->\n    <!--</div>-->\n\n    <br>\n          <div class=\"row\">\n              <div class=\"col\"></div>\n              <div class=\"col\">\n                  <button\n                          type=\"submit\"\n                          value=\"Register\"\n                          class=\"btn btn-outline-danger btn-rounded w-100  my-4  waves-effect z-depth-0\"\n                          (click)=\"onCancel()\"\n                  >Cancel</button>\n              </div>\n              <div class=\"col\"></div>\n              <div class=\"col\">\n                  <button\n                          type=\"submit\"\n                          value=\"Register\"\n                          id=\"submit\"\n                          class=\"btn btn-outline-info btn-rounded w-100 my-4  waves-effect z-depth-0 disabled\"\n                          [disabled]=\"!this.showRegisterButton\"\n                          (click)=\"onRegister()\"\n                  >Register</button>\n              </div>\n\n              <div class=\"col\"></div>\n          </div>\n  </form>\n</div>\n</div>\n"

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
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                !(this.password === undefined)) {
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
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
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

/***/ "./src/app/services/currentRfcs.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/currentRfcs.service.ts ***!
  \*************************************************/
/*! exports provided: CurrentRfcsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentRfcsService", function() { return CurrentRfcsService; });
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
var CurrentRfcsService = /** @class */ (function () {
    function CurrentRfcsService(http) {
        this.http = http;
    }
    CurrentRfcsService.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
    };
    CurrentRfcsService.prototype.getPageData = function () {
        var obj = {
            dataSelection: 'currentRfcs'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    };
    CurrentRfcsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CurrentRfcsService);
    return CurrentRfcsService;
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
    }
    Phase1Service.prototype.submitRequest = function (phase1, token, selectedSite) {
        var obj = {
            date: phase1.dateRequested,
            change: phase1.requestedChange,
            description: phase1.description,
            site_ID: selectedSite,
            CSRF_token: token
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/initiateRequest.php', obj, httpOptions);
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
    Phase2Service.prototype.submitPhase2 = function (phase2, token) {
        var obj = {
            TCB_CRF_ID: phase2.TCB_CRF_ID,
            requestPriority: phase2.requestPriority,
            predictedImpact: phase2.predictedImpact,
            changePeriod: phase2.changePeriod,
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
            token: token
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/phase2submit.php', obj, httpOptions);
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
    }
    Phase3Service.prototype.getCSRFToken = function () {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php', httpOptions);
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