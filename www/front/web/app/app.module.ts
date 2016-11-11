import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppComponent}        from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent}     from './heroes.component';
import {HeroService}         from './hero.service';
import {DashboardComponent}         from './dashboard.component';
import {HeroSearchComponent}         from './hero-search.component';

import {AppRoutingModule}     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import './rxjs-extensions';
import {UsersComponent} from "./user/users.component";
import {Angular2DataTableModule} from "angular2-data-table";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        Angular2DataTableModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent,
        UsersComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent, UsersComponent]
})
export class AppModule {
}
