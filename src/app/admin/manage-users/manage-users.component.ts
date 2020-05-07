import {Component, OnInit} from '@angular/core';
import {User} from "../../classes/user";
import {StructureService} from "../../services/structure.service";
import {RoleService} from "../../services/role.service";
import {UserService} from "../../services/user.service";
import Swal from 'sweetalert2';

declare let $;


@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
    newUser: User = new User();
    viewUser: any;
    editUser: any;
    deleteUser: any;
    structures: any[];
    roles: any[];
    users: any[];
    searchUser: any;
    config: any;
    confirmPassword = "";

    constructor(private structureService: StructureService, private roleService: RoleService, private userService: UserService) {
        this.config = {
            itemsPerPage: 25,
            currentPage: 1,
        };
    }

    ngOnInit() {
        this.fetchStructures();
        this.fetchRoles();
        this.fetchUsers();
    }

    fetchUsers() {
        this.userService.getUsers().subscribe(
            (res: any) => {
                this.config.totalItems = res.data.length;
                this.users = res.data;
            }, (err: any) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Oops...',
                    text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        );
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    fetchStructures() {
        this.structureService.getStructures().subscribe(
            (res: any) => {
                if (res.success) {
                    this.structures = res.data;
                } else {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            },
            (err) => {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Oops...',
                    text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        );
    }

    fetchRoles() {
        this.roleService.getRoles().subscribe(
            (res: any) => {
                if (res.success) {
                    this.roles = res.data;
                } else {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            },
            (err) => {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Oops...',
                    text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        );
    }

    addUser() {
        this.userService.registerUser(this.newUser).subscribe(
            (res: any) => {
                if (res.success) {
                    this.newUser = new User();
                    this.fetchUsers();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Utilisateur enregistré!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    if (res.code === 0) {
                        Swal.fire({
                            icon: 'error',
                            position: 'top-end',
                            title: 'Oops...',
                            text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    } else if (res.code === 1) {
                        Swal.fire({
                            icon: 'error',
                            position: 'top-end',
                            title: 'Email invalide',
                            text: 'Cet email existe déjà!',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    } else if (res.code === 2) {
                        Swal.fire({
                            icon: 'error',
                            position: 'top-end',
                            title: 'Login invalide',
                            text: 'Cet login existe déjà!',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    } else {
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
            }, (err) => {
                if (err.error.code === 0) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else if (err.error.code === 1) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Email invalide',
                        text: 'Cet email existe déjà!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else if (err.error.code === 2) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Login invalide',
                        text: 'Cet login existe déjà!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }, () => {
            }
        );
    }

    updateUser() {
        this.userService.updateUser(this.editUser).subscribe(
            (res: any) => {
                if (res.success) {
                    this.editUser = {};
                    this.fetchUsers();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Utilisateur mis à jour!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    $("#editUserModal").modal('hide');
                } else {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }, (err) => {
                if (err.error.code === 2) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Email invalide',
                        text: 'Cet email existe déjà',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }, () => {
            }
        );
    }

    deleteMyUser() {
        this.userService.deleteUser(this.deleteUser).subscribe(
            (res: any) => {
                if (res.success) {
                    this.deleteUser = '';
                    this.fetchUsers();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Utilisateur supprimé!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    $("#deleteUserModal").modal('hide');
                } else {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }, (err) => {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Oops...',
                    text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }, () => {
            }
        );
    }

    resetPassword() {
        this.userService.resetPassword(this.editUser.id).subscribe(
            (res: any) => {
                if (res.success) {
                    this.editUser = {};
                    this.fetchUsers();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Mot de passe utilisateur réinitialisé',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    $("#resetPasswordModal").modal('hide');
                    this.confirmPassword = '';
                } else {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }, (err) => {
                Swal.fire({
                    icon: 'error',
                    position: 'top-end',
                    title: 'Oops...',
                    text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                    showConfirmButton: false,
                    timer: 2000
                });
            }, () => {
            }
        );
    }
}
