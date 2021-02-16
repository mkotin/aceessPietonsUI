import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DemandeServiceService } from "../services/demande-service.service";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
var ListDemandesComponent = /** @class */ (function () {
    function ListDemandesComponent(demandeService, userService, router) {
        this.demandeService = demandeService;
        this.userService = userService;
        this.router = router;
        this.demandes = [];
        this.searchDemande = '';
        this.statusFilter = 'en_instance';
        this.assignFilter = '';
        this.config = {
            itemsPerPage: 25,
            currentPage: 1,
        };
    }
    ListDemandesComponent.prototype.ngOnInit = function () {
        this.getAuthUser();
    };
    ListDemandesComponent.prototype.getAuthUser = function () {
        var _this = this;
        this.userService.auth().subscribe(function (res) {
            if (res.success) {
                _this.authUser = res.data;
                _this.assignFilter = _this.authUser.id;
                _this.getDemandes();
            }
            else {
                _this.router.navigate(['login']);
            }
        }, function (err) {
            _this.router.navigate(['login']);
        });
    };
    ListDemandesComponent.prototype.getDemandes = function () {
        var _this = this;
        var body = {};
        if (this.authUser.role.role == 'STRUCTURE') {
            body = {
                structure_id: this.authUser.structure_id,
            };
        }
        else {
            body = {};
        }
        this.demandeService.getDemandes(body).subscribe(function (res) {
            if (res.success) {
                _this.demandes = res.data;
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
    ListDemandesComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListDemandesComponent.prototype.statusFilterChanged = function (value) {
        if (value != 'all') {
            this.statusFilter = value;
        }
        else {
            this.statusFilter = 'all';
        }
    };
    ListDemandesComponent.prototype.assignFilterChanged = function () {
        if (this.assignFilter == 'all') {
            this.assignFilter = this.authUser.id;
        }
        else {
            this.assignFilter = 'all';
        }
    };
    ListDemandesComponent = __decorate([
        Component({
            selector: 'app-list-demandes',
            templateUrl: './list-demandes.component.html',
            styleUrls: ['./list-demandes.component.scss']
        }),
        __metadata("design:paramtypes", [DemandeServiceService, UserService, Router])
    ], ListDemandesComponent);
    return ListDemandesComponent;
}());
export { ListDemandesComponent };
//# sourceMappingURL=list-demandes.component.js.map