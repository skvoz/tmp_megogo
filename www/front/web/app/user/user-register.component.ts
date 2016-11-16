import {Component}      from '@angular/core';
import {Router} from '@angular/router';
import {Location}               from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'user-add-app',
    template:`
        <div class="user">
            <h3><span>Register</span></h3>
            <div class="content">
                <register-form-reactive></register-form-reactive>
            </div>
        </div>
    `,
    styleUrls: ['./user.component.css'],
})
export class UserRegisterComponent {

    constructor(
                private router: Router,
                private location: Location) {
        alert(123);
    }
}
