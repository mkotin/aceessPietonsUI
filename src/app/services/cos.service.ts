import { Injectable } from '@angular/core';
import {AppHttpService} from "./http/app-http.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CosService {

  constructor(private httpService: AppHttpService) { }

  store(body) {
    return this.httpService.post(environment.apiURL + 'cos/store', body);
  }

  getCos() {
    return this.httpService.get(environment.apiURL + 'cos/all');
  }

  addDemande(body) {
    return this.httpService.post(environment.apiURL + 'cos/addDemande', body);
  }
}
