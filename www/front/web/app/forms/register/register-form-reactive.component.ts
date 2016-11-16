/* tslint:disable: member-ordering forin */
import {Component, OnInit}                  from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Register}                   from './register';
import {forbiddenNameValidator} from './forbidden-login.directive';
import {UserService} from "../../user/user.service";


@Component({
    moduleId: module.id,
    selector: 'register-form-reactive',
    templateUrl: 'register-form-reactive.component.html',
    providers: [ UserService]
})
export class RegisterFormReactiveComponent implements OnInit {

    constructor(private fb: FormBuilder,
                private router: Router,
                private userService: UserService) {
    }

    register = new Register('', '', '');

    submitted = false;

    onSubmit() {
        this.register = this.registerForm.value;
        alert('user logged');
        // this.userService.register(this.register)
        //     .then((foo) => {
        //         console.log(foo);
        //     });
            // .then(() => this.router.navigate(['/users']));
    }

    // Reset the form with a new register AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;

    registerForm: FormGroup;

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.registerForm = this.fb.group({
            'login': [this.register.login, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(24),
                forbiddenNameValidator(/bob/i)
            ]
            ],
            'password': [this.register.password, Validators.required],
            'newPassword': [this.register.newPassword, Validators.required]
        });

        this.registerForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }


    onValueChanged(data?: any) {
        if (!this.registerForm) {
            return;
        }
        const form = this.registerForm;

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
        'password': '',
        'newPassword': ''
    };

    validationMessages = {
        'login': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.',
            'forbiddenName': 'Someone named "Bob" cannot be a register.'
        },
        'password': {
            'required': 'Power is required.'
        },
        'newPassword': {
            'required': 'Power is required.'
        }
    };
}

