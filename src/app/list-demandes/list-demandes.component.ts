import { Component, OnInit } from '@angular/core';
import {DemandeServiceService} from "../services/demande-service.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";



@Component({
	selector: 'app-list-demandes',
	templateUrl: './list-demandes.component.html',
	styleUrls: ['./list-demandes.component.scss']
})
export class ListDemandesComponent implements OnInit {

	demandes = [];
	searchDemande = '';
	statusFilter = 'en_instance';
	assignFilter = '';
	niveauFilter = '';
	authUser: any;
	config: any = {
            itemsPerPage: 25,
            currentPage: 1,
        };

	constructor(private demandeService: DemandeServiceService, private  userService: UserService, public router: Router,) { }

	ngOnInit() {
		this.getAuthUser();
	}


	getAuthUser() {
		this.userService.auth().subscribe((res: any) => {
			if (res.success) {
				this.authUser = res.data;
				if(this.authUser.role.role == 'AGENT SSFA'){
					this.assignFilter = this.authUser.id;
				} else {
					this.assignFilter = 'all';
				}
				this.getDemandes();
			} else {
				this.router.navigate(['login']);
			}
		}, (err) => {
			this.router.navigate(['login']);
		});
	}

	getDemandes(){
		let body = {};
		if(this.authUser.role.role == 'STRUCTURE'){
			body = {
				structure_id: this.authUser.structure_id,
			}
		} else {
			body = {};
		}

		this.demandeService.getDemandes(body).subscribe((res: any) => {
			if (res.success) {
				this.demandes = res.data;
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
		});
	}

	pageChanged(event) {
        this.config.currentPage = event;
    }

    statusFilterChanged(value){
    	if(value != 'all'){
    		this.statusFilter = value;
    	} else {
    		this.statusFilter = 'all';
    	}
    }

    assignFilterChanged(){
    	if(this.assignFilter == 'all'){
    		this.assignFilter = this.authUser.id;
    	} else {
    		this.assignFilter = 'all';
    	}
	}
	
	niveauFilterChanged(value){
    	this.niveauFilter = value;
    }


}
