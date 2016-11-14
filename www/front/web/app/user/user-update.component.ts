import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { User }        from '../user';
import { UserService } from './user.service';

@Component({
    moduleId: module.id,
    selector: 'user-update-app',
    templateUrl: 'user.component.html',
})
export class UserUpdateComponent implements OnInit {
    user: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {

                let id = +params['id'];

                this.userService.getUser(id)
                    .then(user => this.user = user);

        });
    }

    save(): void {
        this.userService.update(this.user)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
