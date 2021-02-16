import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppHttpService } from "./http/app-http.service";
var BadgeService = /** @class */ (function () {
    function BadgeService(httpService) {
        this.httpService = httpService;
    }
    BadgeService.prototype.getBadgeTypes = function () {
        return this.httpService.get(environment.apiURL + 'badge-types');
    };
    BadgeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AppHttpService])
    ], BadgeService);
    return BadgeService;
}());
export { BadgeService };
//# sourceMappingURL=badge.service.js.map