/* tslint:disable: member-ordering forin */
import {Component, OnInit}                  from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User}                   from './../../user';
import {forbiddenNameValidator} from './forbidden-login.directive';
import {UserService} from "../../user/user.service";


@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: 'user-form.component.html',
    providers: [UserService]
})
export class UserFormComponent implements OnInit {

    constructor(private fb: FormBuilder,
                private router: Router,
                private userService: UserService) {
    }

    register = new User('', '', '');

    submitted = false;

    onSubmit() {
        this.register = this.userForm.value;
        alert('user add/update');
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

    userForm: FormGroup;

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.userForm = this.fb.group({
            'name': [this.user.name, Validators.required],
            'company': [this.user.company, Validators.required],
            'gender': [this.user.gender, Validators.required],
            'age': [this.user.age, Validators.required],
        });

        this.userForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }


    onValueChanged(data?: any) {
        if (!this.userForm) {
            return;
        }
        const form = this.userForm;

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
}

