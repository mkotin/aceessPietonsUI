import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { User } from "../../classes/user";
import { StructureService } from "../../services/structure.service";
import { RoleService } from "../../services/role.service";
import { UserService } from "../../services/user.service";
import Swal from 'sweetalert2';
var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(structureService, roleService, userService) {
        this.structureService = structureService;
        this.roleService = roleService;
        this.userService = userService;
        this.newUser = new User();
        this.confirmPassword = "";
        this.config = {
            itemsPerPage: 25,
            currentPage: 1,
        };
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        this.fetchStructures();
        this.fetchRoles();
        this.fetchUsers();
    };
    ManageUsersComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (res) {
            _this.config.totalItems = res.data.length;
            _this.users = res.data;
        }, function (err) {
            console.log(err);
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
    ManageUsersComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ManageUsersComponent.prototype.fetchStructures = function () {
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
    ManageUsersComponent.prototype.fetchRoles = function () {
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
    ManageUsersComponent.prototype.addUser = function () {
        var _this = this;
        this.userService.registerUser(this.newUser).subscribe(function (res) {
            if (res.success) {
                _this.newUser = new User();
                _this.fetchUsers();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Utilisateur enregistré!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else {
                if (res.code === 0) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
                else if (res.code === 1) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Email invalide',
                        text: 'Cet email existe déjà!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
                else if (res.code === 2) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Login invalide',
                        text: 'Cet login existe déjà!',
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
            }
        }, function (err) {
            if (err.error.code === 0) {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Oops...',
                    text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else if (err.error.code === 1) {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Email invalide',
                    text: 'Cet email existe déjà!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else if (err.error.code === 2) {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Login invalide',
                    text: 'Cet login existe déjà!',
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
    ManageUsersComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.editUser).subscribe(function (res) {
            if (res.success) {
                _this.editUser = {};
                _this.fetchUsers();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Utilisateur mis à jour!',
                    showConfirmButton: false,
                    timer: 2000
                });
                $("#editUserModal").modal('hide');
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
    ManageUsersComponent.prototype.deleteMyUser = function () {
        var _this = this;
        this.userService.deleteUser(this.deleteUser).subscribe(function (res) {
            if (res.success) {
                _this.deleteUser = '';
                _this.fetchUsers();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Utilisateur supprimé!',
                    showConfirmButton: false,
                    timer: 2000
                });
                $("#deleteUserModal").modal('hide');
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
    ManageUsersComponent.prototype.resetPassword = function () {
        var _this = this;
        this.userService.resetPassword(this.editUser.id).subscribe(function (res) {
            if (res.success) {
                _this.editUser = {};
                _this.fetchUsers();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Mot de passe utilisateur réinitialisé',
                    showConfirmButton: false,
                    timer: 2000
                });
                $("#resetPasswordModal").modal('hide');
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
    ManageUsersComponent = __decorate([
        Component({
            selector: 'app-manage-users',
            templateUrl: './manage-users.component.html',
            styleUrls: ['./manage-users.component.scss']
        }),
        __metadata("design:paramtypes", [StructureService, RoleService, UserService])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());
export { ManageUsersComponent };
//# sourceMappingURL=manage-users.component.js.map