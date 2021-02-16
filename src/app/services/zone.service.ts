import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AppHttpService} from "./http/app-http.service";


@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private httpService: AppHttpService) {
  }

  getZones() {
    return this.httpService.get(environment.apiURL + 'zones');
  }
}
