import {Component, OnInit}      from '@angular/core';
import {UserFormComponent} from "../forms/user/user-form.component";

import {User}        from '../user';

@Component({
    moduleId: module.id,
    selector: 'user-add-app',
    template: '<user-form [userId]="id"></user-form>',
    directives: [UserFormComponent],
})
export class UserAddComponent extends OnInit {
    id: number;

    userModel: User;

    ngOnInit(): void {
        this.userModel = new User('', '', '', '');
    }
}
