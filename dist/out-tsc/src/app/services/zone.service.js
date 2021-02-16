import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppHttpService } from "./http/app-http.service";
var ZoneService = /** @class */ (function () {
    function ZoneService(httpService) {
        this.httpService = httpService;
    }
    ZoneService.prototype.getZones = function () {
        return this.httpService.get(environment.apiURL + 'zones');
    };
    ZoneService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AppHttpService])
    ], ZoneService);
    return ZoneService;
}());
export { ZoneService };
//# sourceMappingURL=zone.service.js.map