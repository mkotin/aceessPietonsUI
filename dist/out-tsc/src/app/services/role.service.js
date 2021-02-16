import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppHttpService } from "./http/app-http.service";
var RoleService = /** @class */ (function () {
    function RoleService(httpService) {
        this.httpService = httpService;
    }
    RoleService.prototype.getRoles = function () {
        // todo: attach api key to headers
        return this.httpService.get(environment.apiURL + 'roles');
    };
    RoleService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AppHttpService])
    ], RoleService);
    return RoleService;
}());
export { RoleService };
//# sourceMappingURL=role.service.js.map