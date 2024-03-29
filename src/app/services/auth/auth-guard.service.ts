import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {UserService} from "../user.service";
import {ignore} from "selenium-webdriver/testing";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {catchError} from "rxjs/internal/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private userService: UserService, public router: Router) {
    }

    public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        // @ts-ignore
        const expectedRoles = route.data.expectedRoles;
        let user: any;
        if (localStorage.getItem('access_token')) {
             return this.userService.auth().pipe(
                map((res: any) => {
                    if (res.success) {
                        user = res.data;
                        if (expectedRoles.includes(user.role.role) || expectedRoles.includes('ALL')) {
                            return true;
                        } else {
                            this.router.navigate(['app', 'dashboard']);
                            return false;
                        }
                    } else {
                        this.router.navigate(['login']);
                        return false;
                    }
                }), catchError((err) => {
                      this.router.navigate(['login']);
                      return of(false);
                  })
            );
        } else {
            console.log('No access token');
            this.router.navigate(['login']);
            return of(false);
        }
    }
}
