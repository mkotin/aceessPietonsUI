import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AppHttpService} from "./http/app-http.service";


@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private httpService: AppHttpService) {
    }

    getRoles() {
        // todo: attach api key to headers
        return this.httpService.get(environment.apiURL + 'roles');
    }
}
