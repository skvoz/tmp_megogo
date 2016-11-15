import {Component}      from '@angular/core';
import {Router} from '@angular/router';
import {Location}               from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'user-add-app',
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserRegisterComponent {

    constructor(
                private router: Router,
                private location: Location) {
    }
}
