import {Component, OnInit} from '@angular/core';
import {User} from "../../classes/user";
import {StructureService} from "../../services/structure.service";
import {RoleService} from "../../services/role.service";
import {UserService} from "../../services/user.service";
import Swal from 'sweetalert2';


@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
    newUser: User = new User();
    structures: any[];
    roles: any[];
    users: any[];
    searchUser: any;

    constructor(private structureService: StructureService, private roleService: RoleService, private userService: UserService,
               ) {
    }

    ngOnInit() {
        this.fetchStructures();
        this.fetchRoles();
        this.fetchUsers();
    }

    fetchUsers() {
        this.userService.getUsers().subscribe(
            (res: any) => {
                console.log(res);
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
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Utilisateur enregistré!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.newUser = new User();
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
                    }  else {
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
                if (err.code === 0) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Oops...',
                        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else if (err.code === 1) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Email invalide',
                        text: 'Cet email existe déjà!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else if (err.code === 2) {
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
}
