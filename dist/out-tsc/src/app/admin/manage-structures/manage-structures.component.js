import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { StructureService } from "../../services/structure.service";
import { UserService } from "../../services/user.service";
import { Structure } from "../../classes/structure";
var ManageStructuresComponent = /** @class */ (function () {
    function ManageStructuresComponent(structureService, userService) {
        this.structureService = structureService;
        this.userService = userService;
        this.newStructure = new Structure();
        this.searchStructure = '';
        this.config = {
            itemsPerPage: 25,
            currentPage: 1,
        };
    }
    ManageStructuresComponent.prototype.ngOnInit = function () {
        this.fetchStructures();
    };
    ManageStructuresComponent.prototype.fetchStructures = function () {
        var _this = this;
        this.structureService.getStructures().subscribe(function (res) {
            _this.config.totalItems = res.data.length;
            _this.structures = res.data;
        }, function (err) {
            console.log(err);
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
    ManageStructuresComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ManageStructuresComponent.prototype.addStructure = function () {
        var _this = this;
        this.structureService.addStructure(this.newStructure).subscribe(function (res) {
            if (res.success) {
                _this.newStructure = new Structure();
                _this.fetchStructures();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Structure ajouté!',
                    showConfirmButton: false,
                    timer: 2000
                });
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
        }, function () {
        });
    };
    ManageStructuresComponent.prototype.updateStructure = function () {
        var _this = this;
        this.structureService.updateStructure(this.editStructure).subscribe(function (res) {
            if (res.success) {
                _this.editStructure = {};
                _this.fetchStructures();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Stucture mise à jour!',
                    showConfirmButton: false,
                    timer: 2000
                });
                $("#editStructureModal").modal('hide');
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
        }, function () {
        });
    };
    ManageStructuresComponent.prototype.deleteMyStructure = function () {
        var _this = this;
        this.structureService.deleteStructure(this.deleteStructure).subscribe(function (res) {
            if (res.success) {
                _this.deleteStructure = '';
                _this.fetchStructures();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Structure supprimée!',
                    showConfirmButton: false,
                    timer: 2000
                });
                $("#deleteStructureModal").modal('hide');
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
        }, function () {
        });
    };
    ManageStructuresComponent = __decorate([
        Component({
            selector: 'app-manage-structures',
            templateUrl: './manage-structures.component.html',
            styleUrls: ['./manage-structures.component.scss']
        }),
        __metadata("design:paramtypes", [StructureService, UserService])
    ], ManageStructuresComponent);
    return ManageStructuresComponent;
}());
export { ManageStructuresComponent };
//# sourceMappingURL=manage-structures.component.js.map