import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Usager } from "../classes/usager";
import { DemandeServiceService } from "../services/demande-service.service";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { StructureService } from "../services/structure.service";
import Swal from "sweetalert2";
import { BadgeService } from "../services/badge.service";
import { ZoneService } from "../services/zone.service";
var NewDemandeComponent = /** @class */ (function () {
    function NewDemandeComponent(demandeService, userService, router, structureService, badgeService, zoneService) {
        this.demandeService = demandeService;
        this.userService = userService;
        this.router = router;
        this.structureService = structureService;
        this.badgeService = badgeService;
        this.zoneService = zoneService;
        this.usagers = [];
        this.existingUsagersIds = [];
        this.oldUsagers = [];
        this.addingUsager = new Usager();
        this.viewingUsager = null;
        this.editingUsager = new Usager();
        this.searchingUsager = '';
        this.zones = [];
        this.badgeTypes = [];
    }
    NewDemandeComponent.prototype.ngOnInit = function () {
        this.getAuthUser();
        this.getBadgeTypes();
        this.getZones();
    };
    NewDemandeComponent.prototype.getAuthUser = function () {
        var _this = this;
        this.userService.auth().subscribe(function (res) {
            if (res.success) {
                _this.authUser = res.data;
                _this.getOldUsagers();
            }
            else {
                _this.router.navigate(['login']);
            }
        }, function (err) {
            _this.router.navigate(['login']);
        });
    };
    NewDemandeComponent.prototype.getOldUsagers = function () {
        var _this = this;
        this.structureService.getUsagers(this.authUser.structure_id).subscribe(function (res) {
            if (res.success) {
                _this.oldUsagers = res.data;
                console.log(_this.oldUsagers);
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
    NewDemandeComponent.prototype.getBadgeTypes = function () {
        var _this = this;
        this.badgeService.getBadgeTypes().subscribe(function (res) {
            if (res.success) {
                _this.badgeTypes = res.data;
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
    NewDemandeComponent.prototype.getZones = function () {
        var _this = this;
        this.zoneService.getZones().subscribe(function (res) {
            if (res.success) {
                _this.zones = res.data;
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
    NewDemandeComponent.prototype.addUsager = function () {
        this.addingUsager.structure_id = this.authUser.structure_id;
        this.usagers.push(this.addingUsager);
        $("#addUsagerModal").modal('hide');
        this.addingUsager = new Usager();
    };
    NewDemandeComponent.prototype.addExistingUsager = function (usager) {
        this.addingUsager = usager;
        this.addUsager();
        this.editingUsager = usager;
        this.existingUsagersIds.push(usager.id);
        $("#editUsagerModal").modal({ backdrop: 'static', keyboard: false });
        $('#searchUsagerModal').modal('hide');
        this.searchingUsager = '';
    };
    NewDemandeComponent.prototype.removeUsager = function (index) {
        if (this.existingUsagersIds.includes(this.usagers[index].id)) {
            console.log(true);
            this.existingUsagersIds.splice(this.existingUsagersIds.indexOf(this.usagers[index].id), 1);
        }
        this.usagers.splice(index, 1);
    };
    NewDemandeComponent.prototype.usagerPhotoSelected = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function () {
            _this.editingUsager.photo = reader.result;
            _this.addingUsager.photo = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    NewDemandeComponent.prototype.updateUsager = function () {
        this.usagers[this.editingIndex] = this.editingUsager;
        $("#editUsagerModal").modal('hide');
        this.editingUsager = new Usager();
    };
    NewDemandeComponent.prototype.makeDemande = function () {
        var _this = this;
        var demande = {
            date_retrait: this.retrait,
            objet_demande: this.objet,
            responsable: this.responsable,
            structure_id: this.authUser.structure_id
        };
        var body = {
            demande: demande,
            usagers: this.usagers
        };
        this.demandeService.storeDemande(body).subscribe(function (res) {
            if (res.success) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Opération Réussie!',
                    showConfirmButton: false,
                    timer: 2000
                });
                _this.usagers = [];
                _this.existingUsagersIds = [];
                _this.objet = '';
                _this.retrait = '';
                _this.responsable = '';
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
    NewDemandeComponent = __decorate([
        Component({
            selector: 'app-new-demande',
            templateUrl: './new-demande.component.html',
            styleUrls: ['./new-demande.component.scss']
        }),
        __metadata("design:paramtypes", [DemandeServiceService, UserService, Router, StructureService,
            BadgeService, ZoneService])
    ], NewDemandeComponent);
    return NewDemandeComponent;
}());
export { NewDemandeComponent };
//# sourceMappingURL=new-demande.component.js.map