import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/internal/operators";
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route) {
        var _this = this;
        // @ts-ignore
        var expectedRoles = route.data.expectedRoles;
        var user;
        if (localStorage.getItem('access_token')) {
            return this.userService.auth().pipe(map(function (res) {
                if (res.success) {
                    user = res.data;
                    if (expectedRoles.includes(user.role.role) || expectedRoles.includes('ALL')) {
                        console.log(1);
                        return true;
                    }
                    else {
                        console.log(2);
                        _this.router.navigate(['app', 'dashboard']);
                        return false;
                    }
                }
                else {
                    console.log(3);
                    _this.router.navigate(['login']);
                    return false;
                }
            }), catchError(function (err) {
                console.log(err);
                console.log(4);
                //this.router.navigate(['login']);
                return of(false);
            }));
        }
        else {
            console.log('No access token');
            this.router.navigate(['login']);
            return of(false);
        }
    };
    AuthGuardService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [UserService, Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map