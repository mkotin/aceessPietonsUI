import { Injectable } from '@angular/core';
import {AppHttpService} from "./http/app-http.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DemandeServiceService {

  constructor(private httpService: AppHttpService) {
  }

  storeDemande(body) {
    return this.httpService.post(environment.apiURL + 'storeDemande', body);
  }

  getDemandes(body) {
  	return this.httpService.post(environment.apiURL + 'listDemandes', body)
  }

  getDemande(id) {
  	return this.httpService.get(environment.apiURL + 'demande/' + id);
  }

  affecterDemande(id) {
  	return this.httpService.get(environment.apiURL + 'affecterDemande/' + id);
  }
}
