import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./user/users.component";
import {UserUpdateComponent} from "./user/user-update.component";
import {UserAddComponent} from "./user/user-add.component";
import {UserLoginComponent} from "./user/user-login.component";
import {UserRegisterComponent} from "./user/user-register.component";

const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users',     component: UsersComponent },
    { path: 'user/:id',     component: UserUpdateComponent},
    { path: 'user',     component: UserAddComponent},
    { path: 'login',     component: UserLoginComponent},
    { path: 'register',     component: UserRegisterComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
