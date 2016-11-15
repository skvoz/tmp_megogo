import {Component, OnInit} from '@angular/core';
import {User} from '../user';

@Component({
    selector: 'auth',
    template: `
    <div class="auth" *ngIf="user.id">
        username <a [routerLink]="['/users']">logout</a>
    </div>
    
    <div class="auth" *ngIf="!user.id">
        <a [routerLink]="['/login']">login</a> | <a [routerLink]="['/register']">register</a>
    </div>
`,
    styleUrls: ['./app/user/auth.component.css'],
})
export class AuthComponent implements OnInit   {
    user: User;

    ngOnInit(): void {
        this.user = new User();
    }
}
