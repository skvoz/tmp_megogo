/* tslint:disable: member-ordering forin */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
// import {UserForm}                   from './user-form';
// import {forbiddenNameValidator} from './forbidden-login.directive';
import {UserService} from "../../user/user.service";
import {User} from "../../user";
// import {UsersComponent} from "../../user/users.component";


@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: 'user-form.component.html',
    providers: [UserService]
})

export class UserFormComponent implements OnInit {

    @Output() close = new EventEmitter();

    model: User;

    @Input() userId: number;

    userFormGroup: FormGroup;

    private errorMessage;

    constructor(private fb: FormBuilder,
                private userService: UserService) {
    }

    onSubmit() {
        this.model = this.userFormGroup.value;

        if (this.userId) {
            this.userService
                .update(this.model)
                .subscribe(
                    (model) => {
                        // this.model.id = model.id;
                        this.goBack();
                    },
                    error => this.errorMessage = <any>error
                );
        } else {
            this.userService
                .create(this.model)
                .subscribe(
                    (model) => {
                        this.model.id = model.id;
                        this.goBack();
                    },
                    error => this.errorMessage = <any>error

                );
        }
    }

    ngOnInit(): void {
        this.userService.getUsers()
            .subscribe(
                users => {
                    users.find(user => {
                        if (user.id === this.userId) {
                            this.model = user;
                            this.buildForm(user);
                        }
                    })
                },
                error => this.errorMessage = <any>error
            );
        //this is RP baby
        this.buildForm();
    }

    buildForm(model): void {

        this.userFormGroup = this.fb.group({
            'name': ['', Validators.required],
            'company': ['', Validators.required],
            'gender': ['', Validators.required],
            'age': ['', Validators.required],
        });


        if (model) {
            this.userFormGroup = this.fb.group({
                'id': ['', Validators.nullValidator()],
                'name': ['', Validators.required],
                'company': ['', Validators.required],
                'gender': ['', Validators.required],
                'age': ['', Validators.required],
            });

            this.userFormGroup.setValue(model);
        }

        this.userFormGroup.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.userFormGroup) {
            return;
        }
        const form = this.userFormGroup;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'name': '',
        'company': '',
        'gender': '',
        'age': '',
    };

    validationMessages = {
        'name': {
            'required': 'Name is required.'
        },

        'company': {
            'required': 'Company is required.'
        },

        'gender': {
            'required': 'Gender is required.'
        },

        'age': {
            'required': 'Age is required.'
        },
    };

    goBack(savedUser: User = null): void {
        this.close.emit(savedUser);
        window.history.back();
    }
}

