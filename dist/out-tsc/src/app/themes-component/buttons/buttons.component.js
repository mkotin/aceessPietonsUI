import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.model = 1;
        this.checkboxModel = {
            left: true,
            middle: false,
            right: false
        };
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = __decorate([
        Component({
            selector: 'app-buttons',
            templateUrl: './buttons.component.html',
            styleUrls: ['./buttons.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());
export { ButtonsComponent };
//# sourceMappingURL=buttons.component.js.map