import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../user/user.service";

@Component({
    selector: 'user-app',
    template: `
        <div>
          <h3><span>Users</span></h3>
          <datatable
            class="material fullscreen"
            [rows]="rows"
            [columnMode]="'force'"
            [columns]="columns"
            [headerHeight]="50"
            [footerHeight]="50"
            [rowHeight]="50"
            [selected]="selected"
            [selectionType]="'cell'"
            [limit]="10">
            
            <datatable-column name="Name" [width]="80">
              <template let-column="column">
                {{column.name}}
              </template>
              <template let-value="value">
                {{value}}
              </template>
            </datatable-column>
            
            <datatable-column name="Company" [width]="80">
              <template let-column="column">
                {{column.name}}
              </template>
              <template let-value="value">
                {{value}}
              </template>
            </datatable-column>
          
             <datatable-column name="Gender" [width]="80">
              <template let-column="column">
                {{column.name}}
              </template>
              <template let-value="value">
                {{value}}
              </template>
            </datatable-column>
            
            <datatable-column name="Age" [width]="20">
              <template let-column="column">
                {{column.name}}
              </template>
              <template let-value="value">
                {{value}}
              </template>
            </datatable-column>
            
            <datatable-column name="actions" [width]="80">
              <template let-column="column">
                {{column.name}}
              </template>
              <template let-row="row" let-value="value">
                <a [routerLink]="['/user', row.id]">update</a>
                <a (click)="delete(row.id); $event.stopPropagation()">delete</a>
              </template>
            </datatable-column>
          </datatable>
        </div>
    `
})

export class UsersComponent extends OnInit{
    users: User[];
    rows: any[] = [];
    selected: any[] = [];
    columns: any[] = [
        {name: 'name'},
        {name: 'Company'},
        {name: 'Gender'},
        {name: 'Age'},
        {name: 'actions'}
    ];

    private errorMessage;


    constructor(private router: Router,
                private userService: UserService) {

    }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers()
            .subscribe(
                user => this.rows = user,
                error => this.errorMessage = <any>error);
    }


    gotoDetail(id: number): void {
        this.router.navigate(['/user', id]);
    }

    delete(id: number): void {
        this.userService
            .delete(id)
            .subscribe(() => {
                    this.rows = this.rows.filter(u => u.id !== id);
                },
                error => this.errorMessage = <any>error
            );
    }
}
