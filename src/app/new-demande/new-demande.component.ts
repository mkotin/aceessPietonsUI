import {Component, OnInit} from '@angular/core';
import {Usager} from "../classes/usager";
import {DemandeServiceService} from "../services/demande-service.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {StructureService} from "../services/structure.service";
import Swal from "sweetalert2";
import {BadgeService} from "../services/badge.service";
import {ZoneService} from "../services/zone.service";

declare let $;

@Component({
  selector: 'app-new-demande',
  templateUrl: './new-demande.component.html',
  styleUrls: ['./new-demande.component.scss']
})
export class NewDemandeComponent implements OnInit {
  objet: string;
  retrait: string;
  responsable: string;
  usagers = [];
  existingUsagersIds = [];
  oldUsagers = [];
  addingUsager: Usager = new Usager();
  viewingUsager: Usager = null;
  editingUsager: Usager = new Usager();
  searchingUsager: string = '';
  editingIndex: any;
  zones = [];
  badgeTypes = [];

  authUser: any;

  constructor(private demandeService: DemandeServiceService, private  userService: UserService, public router: Router, private structureService: StructureService,
    private badgeService: BadgeService, private zoneService: ZoneService) {
  }

  ngOnInit() {
    this.getAuthUser();
    this.getBadgeTypes();
    this.getZones();
  }

  getAuthUser() {
    this.userService.auth().subscribe((res: any) => {
      if (res.success) {
        this.authUser = res.data;
        this.getOldUsagers();
      } else {
        this.router.navigate(['login']);
      }
    }, (err) => {
      this.router.navigate(['login']);
    });
  }

  getOldUsagers() {
    this.structureService.getUsagers(this.authUser.structure_id).subscribe(
      (res: any) => {
        if (res.success) {
          this.oldUsagers = res.data;
          console.log(this.oldUsagers);
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
      }
      );
  }

  getBadgeTypes() {
    this.badgeService.getBadgeTypes().subscribe(
      (res: any) => {
        if (res.success) {
          this.badgeTypes = res.data;
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
      }
      );
  }

  getZones() {
    this.zoneService.getZones().subscribe(
      (res: any) => {
        if (res.success) {
          this.zones = res.data;
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
      }
      );
  }

  addUsager() {
    this.addingUsager.structure_id = this.authUser.structure_id;
    this.usagers.push(this.addingUsager);
    $("#addUsagerModal").modal('hide');
    this.addingUsager = new Usager();
  }

  addExistingUsager(usager) {
    this.addingUsager = usager;
    this.addUsager();
    this.editingUsager = usager;
    this.existingUsagersIds.push(usager.id);
    $("#editUsagerModal").modal({backdrop: 'static', keyboard: false});
    $('#searchUsagerModal').modal('hide');
    this.searchingUsager = '';

  }


  removeUsager(index) {
    if(this.existingUsagersIds.includes(this.usagers[index].id)){
      console.log(true);
      this.existingUsagersIds.splice(this.existingUsagersIds.indexOf(this.usagers[index].id), 1);
    }
    this.usagers.splice(index, 1);
  }

  usagerPhotoSelected(event) {
    const reader = new FileReader();
    reader.onload = () => {
      this.editingUsager.photo = reader.result;
      this.addingUsager.photo = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  updateUsager() {
    this.usagers[this.editingIndex] = this.editingUsager;
    $("#editUsagerModal").modal('hide');
    this.editingUsager = new Usager();
  }

  makeDemande() {
    const demande = {
      date_retrait: this.retrait,
      objet_demande: this.objet,
      responsable: this.responsable,
      structure_id: this.authUser.structure_id
    };

    const body = {
      demande: demande,
      usagers: this.usagers
    };

    this.demandeService.storeDemande(body).subscribe(
      (res: any) => {
        if (res.success) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Opération Réussie!',
            showConfirmButton: false,
            timer: 2000
          });
          this.usagers = [];
          this.existingUsagersIds = [];
          this.objet = '';
          this.retrait = '';
          this.responsable = '';
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
      }
      );
  }

}
