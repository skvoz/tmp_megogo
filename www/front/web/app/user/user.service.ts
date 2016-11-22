import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Router} from '@angular/router';
// import 'rxjs/add/operator/toPromise';
import {Observable}     from 'rxjs/Observable';

import {User} from '../user';
// import {Login} from "../forms/login/login";

@Injectable()
export class UserService {

    private headers = new Headers({'Content-Type': 'application/json'});

    private usersUrl = 'app/users';

    constructor(private http: Http) {
    }

    getUsers(): Observable<User[]> {
        return this.http
            .get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(user: User): Observable<User> {
        let url = `${this.usersUrl}/${user.id}`;

        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .catch(this.handleError);
    }

    create(user: User): Observable<User> {
        return this.http
            .post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(id: number): Observable<void> {
        const url = `${this.usersUrl}/${id}`;

        return this.http.delete(url, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    // login(model: Login) : Promise<Login> {
    //     console.log('login');
    //     // return this.http
    //     //     .post('app/login', JSON.stringify(model), {headers: this.headers})
    //     //     .toPromise()
    //     //     .then(()=> model)
    //     //     .catch(this.handleError());
    // }

    private extractData(res: Response) {
        let body = res.json();

        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}