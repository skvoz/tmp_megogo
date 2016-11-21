/* tslint:disable: member-ordering forin */
import {Component, OnInit, Input}                  from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserForm}                   from './user-form';
import {forbiddenNameValidator} from './forbidden-login.directive';
import {UserService} from "../../user/user.service";
import {User} from "../../user";
import {UsersComponent} from "../../user/users.component";


@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: 'user-form.component.html',
    // template: '',
    providers: [ UserService ]
})

export class UserFormComponent implements OnInit {
    private model: User;
    @Input() userId:number;
    testModel: any;
    submitted = false;

    // Reset the form with a new register AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)

    active = true;

    userFormGroup: FormGroup;

    private errorMessage;

    constructor(private fb: FormBuilder,
                private router: Router,
                private userService: UserService) {
    }

    onSubmit() {
        alert(JSON.stringify(this.userFormGroup.value));
        if (this.userId) {
            this.userService.update(this.model);
                // .subscribe(
                //     (data) => {
                //         this.router.navigate([UsersComponent]);
                //     },
                //     (response: Response) => {
                //         this.errorMessage = <any>error
                //     }
                // );
        } else {
            alert('create');
        }
        // else {
        //     alert('create');
        //     this.userService.create(this.model)
        //             .subscribe(() => this.router.navigate(['/users']), error => this.errorMessage = <any>error)
        // }
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
        //TODO wtf
        this.buildForm();
    }

    buildForm(model): void {
        this.userFormGroup = this.fb.group({
            'id': ['', Validators.required],
            'name': ['', Validators.required],
            'company': ['', Validators.required],
            'gender': ['', Validators.required],
            'age': ['', Validators.required],
        });
        if (model) {
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
        'id': '',
        'name': '',
        'company': '',
        'gender': '',
        'age': '',
    };

    validationMessages = {

        'id': {
            'required': 'Name is required.'
        },
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
}

