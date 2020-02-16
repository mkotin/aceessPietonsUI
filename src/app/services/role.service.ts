import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private httpClient: HttpClient) {
    }

    getRoles() {
        // todo: attach api key to headers
        return this.httpClient.get(environment.apiURL + 'roles');
    }
}
