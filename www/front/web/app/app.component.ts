import {Component} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: [
        'app.component.css',
    ],
    template: `
        <div class="wrapper">
            <nav>
                <a href="/user">add user</a>
            </nav>
            <auth></auth>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
}
