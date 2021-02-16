import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(config, userService, router) {
        this.userService = userService;
        this.router = router;
        this.sidebarOpened = false;
        config.placement = 'bottom-right';
    }
    NavbarComponent.prototype.toggleOffcanvas = function () {
        this.sidebarOpened = !this.sidebarOpened;
        if (this.sidebarOpened) {
            document.querySelector('.sidebar-offcanvas').classList.add('active');
        }
        else {
            document.querySelector('.sidebar-offcanvas').classList.remove('active');
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.getAuthUser();
    };
    NavbarComponent.prototype.getAuthUser = function () {
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
    NavbarComponent.prototype.logout = function () {
        this.userService.logout();
    };
    NavbarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss'],
            providers: [NgbDropdownConfig]
        }),
        __metadata("design:paramtypes", [NgbDropdownConfig, UserService, Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map