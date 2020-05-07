import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AppHttpService} from "./http/app-http.service";

@Injectable({
    providedIn: 'root'
})
export class StructureService {

    constructor(private httpService: AppHttpService) {
    }

    getStructures() {
        return this.httpService.get(environment.apiURL + 'structures');
    }

    addStructure(data) {
        return this.httpService.post(environment.apiURL + 'structure', data);
    }

    updateStructure(data) {
        return this.httpService.put(environment.apiURL + 'structure', data);
    }

    deleteStructure(id) {
        return this.httpService.delete(environment.apiURL + 'structure/' + id);
    }
}
