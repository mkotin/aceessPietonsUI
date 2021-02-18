import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {AppHttpService} from "../http/app-http.service";
import { Subject, Observable } from 'rxjs';
import { Message } from 'src/app/classes/Message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private subject: Subject<Message> = new Subject<Message>();

  constructor(private httpService: AppHttpService) { 
    
  }

  getMessages(demandeId) {
    return this.httpService.get(environment.apiURL + 'demandeMessages/' + demandeId);
  }

  postMessage(body) {
    return this.httpService.post(environment.apiURL + 'demandeMessages', body);
  }
}
