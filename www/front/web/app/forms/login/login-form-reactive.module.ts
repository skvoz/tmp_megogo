import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { SharedModule }              from '../shared.module';
import { LoginFormReactiveComponent } from './login-form-reactive.component';
import { ForbiddenValidatorDirective } from './forbidden-login.directive';

@NgModule({
    // imports:      [ SharedModule, ReactiveFormsModule ],
    imports:      [
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        LoginFormReactiveComponent,
        ForbiddenValidatorDirective
    ],
    exports:      [
        LoginFormReactiveComponent,
        ForbiddenValidatorDirective
    ]
})
export class LoginFormReactiveModule { }
