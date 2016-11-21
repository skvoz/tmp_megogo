import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {UserService} from './user.service';
import {UserFormComponent} from "../forms/user/user-form.component";

@Component({
    moduleId: module.id,
    template: "<user-form [userId]='id'></user-form>",
    directives: [UserFormComponent],
})
export class UserUpdateComponent implements OnInit {

    id: number;

    constructor(private userService: UserService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
    }
}
