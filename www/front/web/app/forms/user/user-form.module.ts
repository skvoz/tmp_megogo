import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ForbiddenValidatorDirective } from './forbidden-login.directive';
import {UserFormComponent} from "./user-form.component";

@NgModule({
    imports:      [
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        UserFormComponent,
        ForbiddenValidatorDirective
    ],
    exports:      [
        UserFormComponent,
        ForbiddenValidatorDirective
    ]
})
export class UserFormModule { }
