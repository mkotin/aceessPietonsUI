import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.samplePagesCollapsed = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getAuthUser();
    };
    SidebarComponent.prototype.getAuthUser = function () {
        var _this = this;
        this.userService.auth().subscribe(function (res) {
            if (res.success) {
                _this.authUser = res.data;
            }
            else {
                _this.router.navigate(['login']);
            }
        }, function (err) {
            _this.router.navigate(['login']);
        });
    };
    SidebarComponent = __decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        }),
        __metadata("design:paramtypes", [UserService, Router])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map