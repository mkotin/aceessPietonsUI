import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {tap} from "rxjs/internal/operators";
import {Router} from "@angular/router";
import {AppHttpService} from "./http/app-http.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpService: AppHttpService, public router: Router) {
    }

    registerUser(user: any) {
        return this.httpService.post(environment.apiURL + 'register', user);
    }

    login(email: string, password: string) {
        return this.httpService.post(environment.apiURL + 'authenticate', {
            email,
            password
        }).pipe(tap((res: any) => {
            if (res.success === true) {
                // Authentication succeed...
                // store the access token and user details to local storage
                localStorage.setItem('access_token', res.api_key);
            }
        }));
    }

    resetPassword(id) {
        return this.httpService.get(environment.apiURL + 'reset-password/' + id);
    }

    logout() {
        localStorage.removeItem('access_token'); // remove access token from local storage
        this.router.navigate(['login']);
    }

    updateUser(user: any) {
        return this.httpService.put(environment.apiURL + 'user/update', user);
    }

    deleteUser(user) {
        return this.httpService.delete(environment.apiURL + 'user/delete/' + user);
    }

    getUsers() {
        return this.httpService.get(environment.apiURL + 'users');
    }

    isAuth() {
        this.httpService.get(environment.apiURL + 'is-auth').subscribe(
            (res: any) => {
                if (res.success) {
                    return true;
                }
            }, (err: any) => {
                return false;
            }
        );
    }

    auth() {
        return this.httpService.get(environment.apiURL + 'auth-user');
    }

}
