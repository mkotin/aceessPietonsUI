import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from "rxjs/internal/operators";
import { Router } from "@angular/router";
import { AppHttpService } from "./http/app-http.service";
var UserService = /** @class */ (function () {
    function UserService(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    UserService.prototype.registerUser = function (user) {
        return this.httpService.post(environment.apiURL + 'register', user);
    };
    UserService.prototype.login = function (email, password) {
        return this.httpService.post(environment.apiURL + 'authenticate', {
            email: email,
            password: password
        }).pipe(tap(function (res) {
            if (res.success === true) {
                // Authentication succeed...
                // store the access token and user details to local storage
                localStorage.setItem('access_token', res.api_key);
            }
        }));
    };
    UserService.prototype.resetPassword = function (id) {
        return this.httpService.get(environment.apiURL + 'reset-password/' + id);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('access_token'); // remove access token from local storage
        this.router.navigate(['login']);
    };
    UserService.prototype.updateUser = function (user) {
        return this.httpService.put(environment.apiURL + 'user/update', user);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.httpService.delete(environment.apiURL + 'user/delete/' + user);
    };
    UserService.prototype.getUsers = function () {
        return this.httpService.get(environment.apiURL + 'users');
    };
    UserService.prototype.isAuth = function () {
        this.httpService.get(environment.apiURL + 'is-auth').subscribe(function (res) {
            if (res.success) {
                return true;
            }
        }, function (err) {
            return false;
        });
    };
    UserService.prototype.auth = function () {
        return this.httpService.get(environment.apiURL + 'auth-user');
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AppHttpService, Router])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map