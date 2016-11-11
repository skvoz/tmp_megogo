import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'client-paging-demo',
    styleUrls: [
        'assets/users-datatable.component.css',
        'assets/users-material.component.css'
    ],
    template: `
    <div>
      <h3>Client-side Paging</h3>
      
      <datatable
        class="material"
        [rows]="rows"
        [columns]="[{name:'Name'},{name:'Gender'},{name:'Company'}]"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [limit]="10">
      </datatable>
    </div>
  `
})
export class UsersComponent {

    rows = [];

    constructor() {
        this.fetch((data) => {
            this.rows = data;
        });
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `app/user/data/company.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }

}
