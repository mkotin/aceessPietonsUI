import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import Swal from 'sweetalert2';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private login: string;
    private password: string;

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {

    }

    onLogin() {
        this.userService.login(this.login, this.password).subscribe(
            (res) => {
                if (res.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Succès!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.router.navigate(['app', 'dashboard']);
                }
            }, (err) => {
                console.log(err);
                if (err.status === 404) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Login incorrect!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else if (err.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-end',
                        title: 'Mot de passe incorrect!',
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
        );
    }

    showForgotPasswordModal() {
        Swal.fire({
            icon: 'info',
            title: 'Mot de passe oublié',
            text: 'Si vous avez oublié votre mot de passe veuillez contacter l\'administrateur pour le réinitialiser!',
        });
    }


}
