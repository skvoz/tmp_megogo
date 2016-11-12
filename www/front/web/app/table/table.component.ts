import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../user/user.service";
import {User} from "../user";


@Component({
    selector: 'client-paging-demo',
    template: `
    <div>
      <h3>Cell Selection</h3>
      <datatable
        class="material selection-cell"
        [rows]="rows"
        [columnMode]="'force'"
        [columns]="columns"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="50"
        [selected]="selected"
        [selectionType]="'cell'"
        [limit]="10"
        (select)="onSelect($event)">
      </datatable>
    </div>
  `
})
export class TableComponent extends OnInit {
    users: User[];
    selectedUser: User;

    rows: any[] = [];
    selected: any[] = [];
    columns: any[] = [
        {prop: 'name'},
        {name: 'Company'},
        {name: 'Gender'}
    ];


    constructor(private router: Router,
                private userService: UserService) {

    }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers().then(users => this.rows = users);
    }


    gotoDetail(id:number): void {
        this.router.navigate(['/user', id]);
    }

    onSelect(event:Event) {
        this.gotoDetail(event.selected[0].id)
    }
}
