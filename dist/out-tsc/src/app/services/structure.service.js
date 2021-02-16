import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppHttpService } from "./http/app-http.service";
var StructureService = /** @class */ (function () {
    function StructureService(httpService) {
        this.httpService = httpService;
    }
    StructureService.prototype.getStructures = function () {
        return this.httpService.get(environment.apiURL + 'structures');
    };
    StructureService.prototype.addStructure = function (data) {
        return this.httpService.post(environment.apiURL + 'structure', data);
    };
    StructureService.prototype.updateStructure = function (data) {
        return this.httpService.put(environment.apiURL + 'structure', data);
    };
    StructureService.prototype.deleteStructure = function (id) {
        return this.httpService.delete(environment.apiURL + 'structure/' + id);
    };
    StructureService.prototype.getUsagers = function (structure) {
        return this.httpService.get(environment.apiURL + 'structuresUsagers/' + structure);
    };
    StructureService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AppHttpService])
    ], StructureService);
    return StructureService;
}());
export { StructureService };
//# sourceMappingURL=structure.service.js.map