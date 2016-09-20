"use strict";
var platform_1 = require("nativescript-angular/platform");
var http_1 = require('@angular/http');
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var http_2 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
//import { setStatusBarColors, BackendService, LoginService } from "./shared";
//import { LoginModule } from "./login/login.module";
var orderforms_module_1 = require("./orderForm/orderforms.module");
//setStatusBarColors();
var AppModule = (function () {
    function AppModule() {
        console.log('in app module');
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [],
            imports: [
                http_1.HttpModule,
                platform_1.NativeScriptModule,
                http_2.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes),
                orderforms_module_1.OrderFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map