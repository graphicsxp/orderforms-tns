import { NativeScriptModule } from "nativescript-angular/platform";
import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import { authProviders, appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
//import { setStatusBarColors, BackendService, LoginService } from "./shared";

//import { LoginModule } from "./login/login.module";
import { OrderFormsModule } from "./orderForm/orderforms.module";

//setStatusBarColors();


@NgModule({
    providers: [
        //authProviders
    ],
    imports: [
        HttpModule,
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        OrderFormsModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('in app module');
    }
}