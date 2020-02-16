import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    registerUser(user: any) {
        // todo: attach api key to headers
        return this.httpClient.post(environment.apiURL + 'register', user);
    }

    getUsers() {
        // todo: attach api key to headers
        return this.httpClient.get(environment.apiURL + 'users');
    }
}
