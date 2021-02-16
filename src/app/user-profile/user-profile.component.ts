import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {StructureService} from "../services/structure.service";
import {RoleService} from "../services/role.service";

import Swal from 'sweetalert2';

declare let $;

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    authUser: any;
    updating = false;
    structures: any[];
    roles: any[];
    confirmPassword: '';

    constructor(private  userService: UserService, private  router: Router, private structureService: StructureService, private roleService: RoleService) {
    }

    ngOnInit() {
        this.getAuthUser();
        this.fetchStructures();
        this.fetchRoles();
    }

    getAuthUser() {
        this.userService.auth().subscribe((res: any) => {
            if (res.success) {
                this.authUser = res.data;
            } else {
                this.router.navigate(['login']);
            }
        }, (err) => {
            this.router.navigate(['login']);
        });
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

    updateUser() {
        this.userService.updateUser(this.authUser).subscribe(
            (res: any) => {
                if (res.success) {
                    this.getAuthUser();
                    this.updating = false;
                 Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Opération Réussie!',
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

    cancelClicked() {
        this.getAuthUser();
    }

    resetPassword() {
        this.userService.updateUser(this.authUser).subscribe(
            (res: any) => {
                if (res.success) {
                    this.authUser = {};
                    this.getAuthUser();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Mot de passe utilisateur mis à jour',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    $("#passwordResetModal").modal('hide');
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
