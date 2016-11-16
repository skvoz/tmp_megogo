import {Component}      from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-add-app',
    template: `
        <div class="user">
            <h3><span>Login</span></h3>
            <div class="content">
                <login-form-reactive></login-form-reactive>
            </div>
        </div>
    `,
    styleUrls: ['./user.component.css'],
})
export class UserLoginComponent {

}
