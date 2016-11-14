import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import {UsersComponent} from "./user/users.component";
import {UserUpdateComponent} from "./user/user-update.component";
import {UserAddComponent} from "./user/user-add.component";

const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent },
    { path: 'users',     component: UsersComponent },
    { path: 'user/:id',     component: UserUpdateComponent},
    { path: 'user',     component: UserAddComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
