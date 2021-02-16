import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { AppHttpService } from "./http/app-http.service";
import { environment } from "../../environments/environment";
var DemandeServiceService = /** @class */ (function () {
    function DemandeServiceService(httpService) {
        this.httpService = httpService;
    }
    DemandeServiceService.prototype.storeDemande = function (body) {
        return this.httpService.post(environment.apiURL + 'storeDemande', body);
    };
    DemandeServiceService.prototype.getDemandes = function (body) {
        return this.httpService.post(environment.apiURL + 'listDemandes', body);
    };
    DemandeServiceService.prototype.getDemande = function (id) {
        return this.httpService.get(environment.apiURL + 'demande/' + id);
    };
    DemandeServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AppHttpService])
    ], DemandeServiceService);
    return DemandeServiceService;
}());
export { DemandeServiceService };
//# sourceMappingURL=demande-service.service.js.map