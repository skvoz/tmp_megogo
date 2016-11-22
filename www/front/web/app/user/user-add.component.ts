import {Component}      from '@angular/core';
import {UserFormComponent} from "../forms/user/user-form.component";

@Component({
    moduleId: module.id,
    selector: 'user-add-app',
    template: '<user-form [userId]="id"></user-form>',
    directives: [UserFormComponent],
})
export class UserAddComponent {
}
