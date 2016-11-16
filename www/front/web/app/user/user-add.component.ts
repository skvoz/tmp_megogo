import {Component, OnInit}      from '@angular/core';
import {Router, Params, Route} from '@angular/router';
import {Location}               from '@angular/common';

import {User}        from '../user';
import {UserService} from './user.service';

@Component({
    moduleId: module.id,
    selector: 'user-add-app',
    templateUrl: 'user.component.html',
})
export class UserAddComponent {
    // user: User;
    //
    // constructor(private userService: UserService,
    //             private router: Router,
    //             private location: Location) {
    // }
    //
    // ngOnInit(): void {
    //     this.user = new User();
    // }
    //
    // save(): void {
    //     this.userService.create(this.user)
    //         .then(() => this.router.navigate(['/users']))
    // }
    //
    // goBack(): void {
    //     this.location.back();
    // }
}
