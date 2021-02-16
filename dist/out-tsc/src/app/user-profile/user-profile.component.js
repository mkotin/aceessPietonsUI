import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { StructureService } from "../services/structure.service";
import { RoleService } from "../services/role.service";
import Swal from 'sweetalert2';
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, router, structureService, roleService) {
        this.userService = userService;
        this.router = router;
        this.structureService = structureService;
        this.roleService = roleService;
        this.updating = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getAuthUser();
        this.fetchStructures();
        this.fetchRoles();
    };
    UserProfileComponent.prototype.getAuthUser = function () {
        var _this = this;
        this.userService.auth().subscribe(function (res) {
            if (res.success) {
                _this.authUser = res.data;
            }
            else {
                _this.router.navigate(['login']);
            }
        }, function (err) {
            _this.router.navigate(['login']);
        });
    };
    UserProfileComponent.prototype.fetchStructures = function () {
        var _this = this;
        this.structureService.getStructures().subscribe(function (res) {
            if (res.success) {
                _this.structures = res.data;
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
        }, function (err) {
            Swal.fire({
                icon: 'error',
                position: 'top-end',
                title: 'Oops...',
                text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                showConfirmButton: false,
                timer: 2000
            });
        });
    };
    UserProfileComponent.prototype.fetchRoles = function () {
        var _this = this;
        this.roleService.getRoles().subscribe(function (res) {
            if (res.success) {
                _this.roles = res.data;
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
        }, function (err) {
            Swal.fire({
                icon: 'error',
                position: 'top-end',
                title: 'Oops...',
                text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                showConfirmButton: false,
                timer: 2000
            });
        });
    };
    UserProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authUser).subscribe(function (res) {
            if (res.success) {
                _this.getAuthUser();
                _this.updating = false;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Opération Réussie!',
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
        }, function (err) {
            if (err.error.code === 2) {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Email invalide',
                    text: 'Cet email existe déjà',
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
        }, function () {
        });
    };
    UserProfileComponent.prototype.cancelClicked = function () {
        this.getAuthUser();
    };
    UserProfileComponent.prototype.resetPassword = function () {
        var _this = this;
        this.userService.updateUser(this.authUser).subscribe(function (res) {
            if (res.success) {
                _this.authUser = {};
                _this.getAuthUser();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Mot de passe utilisateur mis à jour',
                    showConfirmButton: false,
                    timer: 2000
                });
                $("#passwordResetModal").modal('hide');
                _this.confirmPassword = '';
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
        }, function (err) {
            Swal.fire({
                icon: 'error',
                position: 'top-end',
                title: 'Oops...',
                text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                showConfirmButton: false,
                timer: 2000
            });
        }, function () {
        });
    };
    UserProfileComponent = __decorate([
        Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.scss']
        }),
        __metadata("design:paramtypes", [UserService, Router, StructureService, RoleService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map