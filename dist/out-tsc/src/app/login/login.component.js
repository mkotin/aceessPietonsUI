import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import Swal from 'sweetalert2';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.userService.login(this.email, this.password).subscribe(function (res) {
            if (res.success) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Succès!',
                    showConfirmButton: false,
                    timer: 2000
                });
                _this.router.navigate(['app', 'dashboard']);
            }
        }, function (err) {
            console.log(err);
            if (err.status === 404) {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Login incorrect!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else if (err.status === 401) {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Mot de passe incorrect!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Oops...',
                    text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        });
    };
    LoginComponent.prototype.showForgotPasswordModal = function () {
        Swal.fire({
            icon: 'info',
            title: 'Mot de passe oublié',
            text: 'Si vous avez oublié votre mot de passe veuillez contacter l\'administrateur pour le réinitialiser!',
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [UserService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map