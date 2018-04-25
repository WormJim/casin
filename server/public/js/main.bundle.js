webpackJsonp(["main"],{

/***/ "./app/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/landing/landing.module": [
		"./app/app/modules/landing/landing.module.ts"
	],
	"app/modules/shop/shop.module": [
		"./app/app/modules/shop/shop.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./app/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var not_found_component_1 = __webpack_require__("./app/app/not-found.component.ts");
var appRoutes = [
    { path: 'not-found', component: not_found_component_1.PageNotFoundComponent },
    {
        path: 'shop',
        loadChildren: 'app/modules/shop/shop.module#ShopModule'
    },
    {
        path: '',
        loadChildren: './modules/landing/landing.module#LandingModule'
        // redirectTo: '/landing',
        // pathMatch: 'full'
    },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./app/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./app/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app/app.component.html"),
            styles: [__webpack_require__("./app/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var angular_1 = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
var landing_module_1 = __webpack_require__("./app/app/modules/landing/landing.module.ts");
var shop_module_1 = __webpack_require__("./app/app/modules/shop/shop.module.ts");
var app_routing_module_1 = __webpack_require__("./app/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./app/app/app.component.ts");
var auth_component_1 = __webpack_require__("./app/app/components/auth/auth.component.ts");
var not_found_component_1 = __webpack_require__("./app/app/not-found.component.ts");
var landing_routing_module_1 = __webpack_require__("./app/app/modules/landing/landing-routing.module.ts");
var shop_routing_module_1 = __webpack_require__("./app/app/modules/shop/shop-routing.module.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppModule = /** @class */ (function () {
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, auth_component_1.AuthComponent, not_found_component_1.PageNotFoundComponent],
            imports: [
                platform_browser_1.BrowserModule,
                angular_1.ClarityModule,
                landing_module_1.LandingModule,
                shop_module_1.ShopModule,
                landing_routing_module_1.LandingRoutingModule,
                shop_routing_module_1.ShopRoutingModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./app/app/components/auth/auth.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  auth works!\n</p>\n"

/***/ }),

/***/ "./app/app/components/auth/auth.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            template: __webpack_require__("./app/app/components/auth/auth.component.html"),
            styles: [__webpack_require__("./app/app/components/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;


/***/ }),

/***/ "./app/app/components/landing/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/landing/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__("./app/app/components/landing/about/about.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./app/app/components/landing/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contact works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/landing/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__("./app/app/components/landing/contact/contact.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./app/app/components/landing/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/landing/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./app/app/components/landing/footer/footer.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./app/app/components/landing/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header-1\">\r\n  <div class=\"branding\">\r\n    <a class=\"nav-link\">\r\n      <span>CASIN</span>\r\n    </a>\r\n  </div>\r\n  <form class=\"search\">\r\n    <label for=\"search_input\">\r\n      <input type=\"text\" id=\"search_input\" placeholder=\"Search Publications\">\r\n    </label>\r\n  </form>\r\n</header>"

/***/ }),

/***/ "./app/app/components/landing/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./app/app/components/landing/header/header.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./app/app/components/landing/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <clr-main-container>\r\n\r\n  <header class=\"header-1\">\r\n    <div class=\"branding\">\r\n      <a class=\"nav-link\">\r\n        <span class=\"title\">Casin</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"header-actions\">\r\n      <a routerLink=\"signin\" class=\"nav-link nav-text\">\r\n        Log In\r\n      </a>\r\n      <a routerLink=\"signup\" class=\"nav-link nav-text\">\r\n        Signup\r\n      </a>\r\n      <a routerLink=\"app/homepage\" class=\"nav-link nav-text\">\r\n        Go To App\r\n      </a>\r\n    </div>\r\n  </header>\r\n  <p>\r\n    This is the main home page\r\n  </p>\r\n\r\n</clr-main-container> -->\r\n\r\nhome works"

/***/ }),

/***/ "./app/app/components/landing/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./app/app/components/landing/home/home.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./app/app/components/landing/landing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\r\n  <app-header></app-header>\r\n  <app-nav></app-nav>\r\n  <div class=\"content-container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</clr-main-container>"

/***/ }),

/***/ "./app/app/components/landing/landing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'app-landing',
            template: __webpack_require__("./app/app/components/landing/landing.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;


/***/ }),

/***/ "./app/app/components/landing/mission/mission.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/mission/mission.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mission works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/landing/mission/mission.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MissionComponent = /** @class */ (function () {
    function MissionComponent() {
    }
    MissionComponent.prototype.ngOnInit = function () {
    };
    MissionComponent = __decorate([
        core_1.Component({
            selector: 'app-mission',
            template: __webpack_require__("./app/app/components/landing/mission/mission.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/mission/mission.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MissionComponent);
    return MissionComponent;
}());
exports.MissionComponent = MissionComponent;


/***/ }),

/***/ "./app/app/components/landing/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"subnav\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link nav-text\" routerLinkActive=\"active\" routerLink=\"/about\">About</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link nav-text\" routerLinkActive=\"active\" routerLink=\"/news\">News</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link nav-text\" routerLinkActive=\"active\" routerLink=\"/mission\">Mission</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link nav-text\" routerLinkActive=\"active\" routerLink=\"/contact\">Contact</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link nav-text\" routerLinkActive=\"active\" routerLink=\"/team\">Team</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link nav-text\" routerLinkActive=\"active\" routerLink=\"/journal\">Publications</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./app/app/components/landing/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./app/app/components/landing/nav/nav.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./app/app/components/landing/news/news.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  news works!\n</p>\n"

/***/ }),

/***/ "./app/app/components/landing/news/news.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'app-news',
            template: __webpack_require__("./app/app/components/landing/news/news.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;


/***/ }),

/***/ "./app/app/components/landing/team/team.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/landing/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  team works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/landing/team/team.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'app-team',
            template: __webpack_require__("./app/app/components/landing/team/team.component.html"),
            styles: [__webpack_require__("./app/app/components/landing/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;


/***/ }),

/***/ "./app/app/components/shop/journal/journal-detail/journal-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/shop/journal/journal-detail/journal-detail.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/shop/journal/journal-detail/journal-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var shop_service_1 = __webpack_require__("./app/app/services/shop.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var JournalDetailComponent = /** @class */ (function () {
    function JournalDetailComponent(route, router, shopService) {
        this.route = route;
        this.router = router;
        this.shopService = shopService;
    }
    JournalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.journal$ = this.route.paramMap.switchMap(function (params) {
            return _this.shopService.getJournal(params.get('id'));
        });
    };
    JournalDetailComponent.prototype.goToJournals = function (journal) {
        this.router.navigate(['/journal']);
    };
    JournalDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-journal-detail',
            template: __webpack_require__("./app/app/components/shop/journal/journal-detail/journal-detail.component.html"),
            styles: [__webpack_require__("./app/app/components/shop/journal/journal-detail/journal-detail.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            shop_service_1.ShopService])
    ], JournalDetailComponent);
    return JournalDetailComponent;
}());
exports.JournalDetailComponent = JournalDetailComponent;


/***/ }),

/***/ "./app/app/components/shop/journal/journal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/shop/journal/journal.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Journals</h2>\r\n<ul>\r\n  <li *ngFor=\"let journal of Journals$ | async\">\r\n    <a [routerLink]=\"['/journal', journal.id]\">\r\n      <span>{{ journal.id}}</span>{{journal.name}}</a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./app/app/components/shop/journal/journal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var shop_service_1 = __webpack_require__("./app/app/services/shop.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var JournalComponent = /** @class */ (function () {
    function JournalComponent(shopService, route) {
        this.shopService = shopService;
        this.route = route;
    }
    JournalComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('injournal init');
        this.journal$ = this.route.paramMap.switchMap(function (params) {
            _this.selectedId = +params.get('id');
            console.log('injournal init', _this.shopService.getJournals());
            return _this.shopService.getJournals();
        });
    };
    JournalComponent = __decorate([
        core_1.Component({
            selector: 'app-journal',
            template: __webpack_require__("./app/app/components/shop/journal/journal.component.html"),
            styles: [__webpack_require__("./app/app/components/shop/journal/journal.component.css")]
        }),
        __metadata("design:paramtypes", [shop_service_1.ShopService,
            router_1.ActivatedRoute])
    ], JournalComponent);
    return JournalComponent;
}());
exports.JournalComponent = JournalComponent;


/***/ }),

/***/ "./app/app/components/shop/shop.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<app-journal></app-journal>"

/***/ }),

/***/ "./app/app/components/shop/shop.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = __decorate([
        core_1.Component({
            selector: 'app-shop',
            template: __webpack_require__("./app/app/components/shop/shop.component.html"),
            styles: [__webpack_require__("./app/app/components/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;


/***/ }),

/***/ "./app/app/models/journal.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Journal = /** @class */ (function () {
    function Journal(id, name) {
        this.id = id;
        this.name = name;
    }
    return Journal;
}());
exports.Journal = Journal;


/***/ }),

/***/ "./app/app/modules/landing/landing-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./app/app/components/landing/home/home.component.ts");
var about_component_1 = __webpack_require__("./app/app/components/landing/about/about.component.ts");
var team_component_1 = __webpack_require__("./app/app/components/landing/team/team.component.ts");
var contact_component_1 = __webpack_require__("./app/app/components/landing/contact/contact.component.ts");
var landing_component_1 = __webpack_require__("./app/app/components/landing/landing.component.ts");
var mission_component_1 = __webpack_require__("./app/app/components/landing/mission/mission.component.ts");
var news_component_1 = __webpack_require__("./app/app/components/landing/news/news.component.ts");
var landingRoutes = [
    {
        path: '',
        component: landing_component_1.LandingComponent,
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'about', component: about_component_1.AboutComponent },
            { path: 'contact', component: contact_component_1.ContactComponent },
            { path: 'news', component: news_component_1.NewsComponent },
            { path: 'mission', component: mission_component_1.MissionComponent },
            { path: 'team', component: team_component_1.TeamComponent },
            { path: 'journal', redirectTo: '/shop' }
        ]
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(landingRoutes)],
            exports: [router_1.RouterModule]
        })
    ], LandingRoutingModule);
    return LandingRoutingModule;
}());
exports.LandingRoutingModule = LandingRoutingModule;


/***/ }),

/***/ "./app/app/modules/landing/landing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var landing_routing_module_1 = __webpack_require__("./app/app/modules/landing/landing-routing.module.ts");
var home_component_1 = __webpack_require__("./app/app/components/landing/home/home.component.ts");
var about_component_1 = __webpack_require__("./app/app/components/landing/about/about.component.ts");
var mission_component_1 = __webpack_require__("./app/app/components/landing/mission/mission.component.ts");
var contact_component_1 = __webpack_require__("./app/app/components/landing/contact/contact.component.ts");
var team_component_1 = __webpack_require__("./app/app/components/landing/team/team.component.ts");
var footer_component_1 = __webpack_require__("./app/app/components/landing/footer/footer.component.ts");
var header_component_1 = __webpack_require__("./app/app/components/landing/header/header.component.ts");
var landing_component_1 = __webpack_require__("./app/app/components/landing/landing.component.ts");
var angular_1 = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
var nav_component_1 = __webpack_require__("./app/app/components/landing/nav/nav.component.ts");
var news_component_1 = __webpack_require__("./app/app/components/landing/news/news.component.ts");
var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        core_1.NgModule({
            declarations: [
                landing_component_1.LandingComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                mission_component_1.MissionComponent,
                contact_component_1.ContactComponent,
                team_component_1.TeamComponent,
                footer_component_1.FooterComponent,
                news_component_1.NewsComponent,
                header_component_1.HeaderComponent,
                nav_component_1.NavComponent
            ],
            imports: [common_1.CommonModule, forms_1.FormsModule, angular_1.ClarityModule, landing_routing_module_1.LandingRoutingModule]
        })
    ], LandingModule);
    return LandingModule;
}());
exports.LandingModule = LandingModule;


/***/ }),

/***/ "./app/app/modules/shop/shop-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var shop_component_1 = __webpack_require__("./app/app/components/shop/shop.component.ts");
var journal_component_1 = __webpack_require__("./app/app/components/shop/journal/journal.component.ts");
var journal_detail_component_1 = __webpack_require__("./app/app/components/shop/journal/journal-detail/journal-detail.component.ts");
var shopRoutes = [
    { path: 'shop', component: shop_component_1.ShopComponent },
    { path: 'journal', component: journal_component_1.JournalComponent },
    { path: 'journal:id', component: journal_detail_component_1.JournalDetailComponent }
];
var ShopRoutingModule = /** @class */ (function () {
    function ShopRoutingModule() {
    }
    ShopRoutingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(shopRoutes)],
            exports: [router_1.RouterModule]
        })
    ], ShopRoutingModule);
    return ShopRoutingModule;
}());
exports.ShopRoutingModule = ShopRoutingModule;


/***/ }),

/***/ "./app/app/modules/shop/shop.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var angular_1 = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
var shop_routing_module_1 = __webpack_require__("./app/app/modules/shop/shop-routing.module.ts");
var shop_service_1 = __webpack_require__("./app/app/services/shop.service.ts");
var journal_component_1 = __webpack_require__("./app/app/components/shop/journal/journal.component.ts");
var journal_detail_component_1 = __webpack_require__("./app/app/components/shop/journal/journal-detail/journal-detail.component.ts");
var shop_component_1 = __webpack_require__("./app/app/components/shop/shop.component.ts");
var ShopModule = /** @class */ (function () {
    function ShopModule() {
    }
    ShopModule = __decorate([
        core_1.NgModule({
            declarations: [shop_component_1.ShopComponent, journal_component_1.JournalComponent, journal_detail_component_1.JournalDetailComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, angular_1.ClarityModule, shop_routing_module_1.ShopRoutingModule],
            providers: [shop_service_1.ShopService]
        })
    ], ShopModule);
    return ShopModule;
}());
exports.ShopModule = ShopModule;


/***/ }),

/***/ "./app/app/not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            template: "<h2>Page Not Found</h2>"
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./app/app/services/shop.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var journal_1 = __webpack_require__("./app/app/models/journal.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var JOURNALS = [
    new journal_1.Journal(11, 'Eyes Journal 11'),
    new journal_1.Journal(12, 'Eyes Journal 12'),
    new journal_1.Journal(13, 'Eyes Journal 13'),
    new journal_1.Journal(14, 'Eyes Journal 14')
];
var ShopService = /** @class */ (function () {
    function ShopService() {
    }
    ShopService.prototype.getJournals = function () {
        return Observable_1.Observable.of(JOURNALS);
    };
    ShopService.prototype.getJournal = function (id) {
        return this.getJournals().map(function (journals) {
            return journals.find(function (journal) { return journal.id === +id; });
        });
    };
    ShopService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ShopService);
    return ShopService;
}());
exports.ShopService = ShopService;


/***/ }),

/***/ "./app/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./app/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./app/app/app.module.ts");
var environment_1 = __webpack_require__("./app/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./app/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map