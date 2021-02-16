import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import {User} from "../../classes/user";
import {StructureService} from "../../services/structure.service";
import {UserService} from "../../services/user.service";
import {Structure} from "../../classes/structure";

declare let $;

@Component({
  selector: 'app-manage-structures',
  templateUrl: './manage-structures.component.html',
  styleUrls: ['./manage-structures.component.scss']
})
export class ManageStructuresComponent implements OnInit {
    newStructure: Structure = new Structure();
    config: any;
    structures: any[];
    searchStructure: any = '';
    viewStructure: any;
    editStructure: any;
    deleteStructure: any;

    constructor(private structureService: StructureService, private userService: UserService) {
        this.config = {
            itemsPerPage: 25,
            currentPage: 1,
        };
    }

  ngOnInit() {
      this.fetchStructures();
  }

    fetchStructures() {
        this.structureService.getStructures().subscribe(
            (res: any) => {
                this.config.totalItems = res.data.length;
                this.structures = res.data;
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

    addStructure() {
        this.structureService.addStructure(this.newStructure).subscribe(
            (res: any) => {
                if (res.success) {
                    this.newStructure = new Structure();
                    this.fetchStructures();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Structure ajouté!',
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

    updateStructure() {
        this.structureService.updateStructure(this.editStructure).subscribe(
            (res: any) => {
                if (res.success) {
                    this.editStructure = {};
                    this.fetchStructures();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Stucture mise à jour!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    $("#editStructureModal").modal('hide');
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

    deleteMyStructure() {
        this.structureService.deleteStructure(this.deleteStructure).subscribe(
            (res: any) => {
                if (res.success) {
                    this.deleteStructure = '';
                    this.fetchStructures();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Structure supprimée!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    $("#deleteStructureModal").modal('hide');
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
