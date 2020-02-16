import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StructureService {

    constructor(private httpClient: HttpClient) {
    }

    getStructures() {
        // todo: attach api key to headers
        return this.httpClient.get(environment.apiURL + 'structures');
    }
}
