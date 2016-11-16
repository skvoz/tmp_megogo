import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RegisterFormReactiveComponent } from './register-form-reactive.component';
import { ForbiddenValidatorDirective } from './forbidden-login.directive';

@NgModule({
    imports:      [
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        RegisterFormReactiveComponent,
        ForbiddenValidatorDirective
    ],
    exports:      [
        RegisterFormReactiveComponent,
        ForbiddenValidatorDirective
    ]
})
export class RegisterFormReactiveModule { }
