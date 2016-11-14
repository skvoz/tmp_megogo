import {Component} from '@angular/core';
@Component({
    selector: 'user-app',
    template: `
<h1>{{title}}</h1>
<div>
   <a href="/user">add user</a>
</div>
<client-paging-demo ></client-paging-demo>
`
})
export class UsersComponent {
    title = 'Title User Component';
}
