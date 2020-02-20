import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AppHttpService {

    constructor(private httpClient: HttpClient) { }

    getHeader(headerOptions) {
        let headerParams: any = {};
        if (headerOptions) {
            headerParams = { ...headerParams, ...headerOptions };
        }
        if(localStorage.getItem('access_token')){
            headerParams.Authorization = localStorage.getItem('access_token');
        }
        let headers = new HttpHeaders(headerParams);
        return headers;
    }

    get(url, params: any = {}, headerOptions: any = {}) {
        return this.httpClient.get(url, {
            headers: this.getHeader(headerOptions),
            params: params
        });
    }

    post(url, data,  params: any = {}, headerOptions: any = {}) {
        return this.httpClient.post(url, data, {
            headers: this.getHeader(headerOptions),
            params: params
        });
    }

    put(url, data, params: any = {}, headerOptions: any = {}) {
        return this.httpClient.put(url, data, {
            headers: this.getHeader(headerOptions),
            params: params
        });
    }

    delete(url, params: any = {}, headerOptions: any = {}) {
        return this.httpClient.delete(url, {
            headers: this.getHeader(headerOptions),
            params: params
        });
    }
}
