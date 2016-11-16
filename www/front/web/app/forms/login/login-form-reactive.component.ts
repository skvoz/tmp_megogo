/* tslint:disable: member-ordering forin */
import {Component, OnInit}                  from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Login}                   from './login';
import {forbiddenNameValidator} from './forbidden-login.directive';
import {UserService} from "../../user/user.service";


@Component({
    moduleId: module.id,
    selector: 'login-form-reactive',
    templateUrl: 'login-form-reactive.component.html',
    providers: [ UserService]
})
export class LoginFormReactiveComponent implements OnInit {

    constructor(private fb: FormBuilder,
                private router: Router,
                private userService: UserService) {
    }

    login = new Login('', '');

    submitted = false;

    onSubmit() {
        this.login = this.loginForm.value;
        alert('user logged');
        // this.userService.login(this.login)
        //     .then((foo) => {
        //         console.log(foo);
        //     });
            // .then(() => this.router.navigate(['/users']));
    }

    // Reset the form with a new login AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;

    loginForm: FormGroup;

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.loginForm = this.fb.group({
            'login': [this.login.login, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(24),
                forbiddenNameValidator(/bob/i)
            ]
            ],
            'password': [this.login.password, Validators.required]
        });

        this.loginForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }


    onValueChanged(data?: any) {
        if (!this.loginForm) {
            return;
        }
        const form = this.loginForm;

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
        'login': '',
        'password': ''
    };

    validationMessages = {
        'login': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.',
            'forbiddenName': 'Someone named "Bob" cannot be a login.'
        },
        'password': {
            'required': 'Power is required.'
        }
    };
}

