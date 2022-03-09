import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DemandeServiceService } from "../services/demande-service.service";
import { CosService } from "../services/cos.service";

import Swal from "sweetalert2";
import { UserService } from '../services/user.service';

declare let $;

@Component({
  selector: 'app-demande-single',
  templateUrl: './demande-single.component.html',
  styleUrls: ['./demande-single.component.scss']
})
export class DemandeSingleComponent implements OnInit {

  demandeId = "";
  demande: any;
  journal: any;
  journalError = "";
  maxRowJournal = 10;
  cos: any;
  viewingUsager: any;
  allCos: any;
  authUser: any;
  showAffecter = false;
  choosedUsagers = [];


  constructor(private demandeService: DemandeServiceService, private route:
    ActivatedRoute, private cosService: CosService, private userService: UserService, public router: Router) { }

  ngOnInit() {
    this.demandeId = this.route.snapshot.paramMap.get('id');
    this.getCos();
    this.getAuthUser();
    this.getJournalDemande();
  }

  getAuthUser() {
    this.userService.auth().subscribe((res: any) => {
      if (res.success) {
        this.authUser = res.data;
        this.getDemande();
      } else {
        this.router.navigate(['login']);
      }
    }, (err) => {
      this.router.navigate(['login']);
    });
  }

  getJournalDemande() {
    this.demandeService.getJournalDemande(this.demandeId).subscribe(
      (res: any) => {
        if (res.success) {
          this.journal = res.data;
        } else {
          this.journalError = "Une erreur est survenue. Veuillez réesayer plus tard ou contactez l'administrateur."
        }
      },
      (err: any) => {
        this.journalError = "Une erreur est survenue. Veuillez réesayer plus tard ou contactez l'administrateur."
      }
    )
  }

  getDemande() {
    this.demandeService.getDemande(this.demandeId).subscribe((res: any) => {
      if (res.success) {
        this.demande = res.data;
        if ((this.authUser.role.role == 'SECRETARIAT DIR. GEN.' || this.authUser.role.role == 'ADMIN') && this.demande.niveau_acces == 3) {
          this.showAffecter = true;
        } else if ((this.authUser.role.role == 'COMMANDANT' || this.authUser.role.role == 'ADMIN') && this.demande.niveau_acces == 2) {
          this.showAffecter = true;
        }
        if (this.demande.cos) {
          this.cos = this.demande.cos;
        }
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

  affecterDemande() {
    this.demandeService.affecterDemande(this.demandeId).subscribe(
      (res: any) => {
        if (res.success) {
          this.showAffecter = false;
          this.getJournalDemande();
          Swal.fire({
            icon: 'success',
            position: 'top-end',
            title: 'Succès',
            text: 'Vous avez affecté la demande',
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
      }
    )
  }


  verifierDemande() {
    this.demandeService.verifierDemande(this.demandeId).subscribe(
      (res: any) => {
        if (res.success) {
          this.showAffecter = false;
          this.getDemande();
          this.getJournalDemande();
          /* Swal.fire({
             icon: 'success',
             position: 'top-end',
             title: 'Succès',
             text: res.message,
             showConfirmButton: false,
             timer: 2000
           });*/
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
    )
  }

  viewUsager(usager) {
    this.viewingUsager = usager;
    $('#viewingUsagerModal').modal('show')
  }

  getCos() {
    this.cosService.getCos().subscribe((res: any) => {
      if (res.success) {
        this.allCos = res.data;
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
    })
  }

  getCosStatus(cos) {
    let cosDate = new Date(cos.date).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    if (cosDate < today) {
      return "Terminée";
    } else if (cosDate == today) {
      return "Aujourd'hui";
    } else if (cosDate > today) {
      return "A venir";
    }
  }

  linkCOS(cos) {
    let body = {
      seance_cos_id: cos.id,
      structure_id: this.demande.structure_id,
      demande_id: this.demandeId
    };
    this.cosService.addDemande(body).subscribe((res: any) => {
      if (res.success) {
        this.getDemande();
        this.getJournalDemande();
        $("#chooseCOSModal").modal('hide');
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
      Swal.fire({
        icon: 'error',
        position: 'top-end',
        title: 'Oops...',
        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
        showConfirmButton: false,
        timer: 2000
      })
    });

  }

  showMoreJournal() {
    this.maxRowJournal += 10;
  }

  chooseUsager(usagerId) {
    if(this.choosedUsagers.indexOf(usagerId) == -1) {
      this.choosedUsagers.push(usagerId);
    } else {
      this.choosedUsagers.splice(this.choosedUsagers.indexOf(usagerId), 1);
    }
  }

  submitStructureReport() {
    if(this.choosedUsagers.length <= this.demande.nbre_usagers_accepte){
        let body = {
          demandeId: this.demandeId,
          usagers: this.choosedUsagers
        }
        this.demandeService.submitStructureReport(body).subscribe(
          (res: any) => {
            if(res.success) {
              this.choosedUsagers = [];
              this.getDemande();
            } else {
              Swal.fire({
                icon: 'error',
                position: 'top-end',
                title: 'Oops...',
                text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
                showConfirmButton: false,
                timer: 2000
              })
            }
          }, (err: any) => {
            Swal.fire({
              icon: 'error',
              position: 'top-end',
              title: 'Oops...',
              text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
              showConfirmButton: false,
              timer: 2000
            })
          }
        )
    } else {
      Swal.fire({
        position: 'top-end',
        text: 'Vous pouvez choisir au maximum ' + this.demande.nbre_usagers_accepte + "usagers.",
        showConfirmButton: false,
        timer: 2000
      })
    }
  }

}
