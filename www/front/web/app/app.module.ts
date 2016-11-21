import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppComponent}        from './app.component';

import {AppRoutingModule}     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import './rxjs-extensions';
import {UsersComponent} from "./user/users.component";
import {UserUpdateComponent} from "./user/user-update.component";
import {UserAddComponent} from "./user/user-add.component";
import {Angular2DataTableModule} from "angular2-data-table";
import {UserService} from "./user/user.service";
import {AuthComponent} from "./user/auth.component";

import './assets/style/icons.css';
import './assets/style/users-datatable.component.css';
import './assets/style/users-material.component.css';
import {UserLoginComponent} from "./user/user-login.component";
import {UserRegisterComponent} from "./user/user-register.component";
import {LoginFormReactiveModule} from "./forms/login/login-form-reactive.module";
import {RegisterFormReactiveModule} from "./forms/register/register-form-reactive.module";
import {UserFormModule} from "./forms/user/user-form.module";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        Angular2DataTableModule,
        LoginFormReactiveModule,
        RegisterFormReactiveModule,
        UserFormModule,

    ],
    declarations: [
        AppComponent,
        UsersComponent,
        UserUpdateComponent,
        UserAddComponent,
        AuthComponent,
        UserLoginComponent,
        UserRegisterComponent,

    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
