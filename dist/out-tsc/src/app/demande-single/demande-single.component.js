import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeServiceService } from "../services/demande-service.service";
import Swal from "sweetalert2";
var DemandeSingleComponent = /** @class */ (function () {
    function DemandeSingleComponent(demandeService, route) {
        this.demandeService = demandeService;
        this.route = route;
        this.demandeId = "";
    }
    DemandeSingleComponent.prototype.ngOnInit = function () {
        this.demandeId = this.route.snapshot.paramMap.get('id');
        this.getDemande();
    };
    DemandeSingleComponent.prototype.getDemande = function () {
        var _this = this;
        this.demandeService.getDemande(this.demandeId).subscribe(function (res) {
            if (res.success) {
                _this.demande = res.data;
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
    DemandeSingleComponent = __decorate([
        Component({
            selector: 'app-demande-single',
            templateUrl: './demande-single.component.html',
            styleUrls: ['./demande-single.component.scss']
        }),
        __metadata("design:paramtypes", [DemandeServiceService, ActivatedRoute])
    ], DemandeSingleComponent);
    return DemandeSingleComponent;
}());
export { DemandeSingleComponent };
//# sourceMappingURL=demande-single.component.js.map