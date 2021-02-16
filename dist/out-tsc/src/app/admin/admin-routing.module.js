import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";
import { ManageStructuresComponent } from "./manage-structures/manage-structures.component";
var routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'manage-users',
        component: ManageUsersComponent
    },
    {
        path: 'manage-structures',
        component: ManageStructuresComponent
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
export { AdminRoutingModule };
//# sourceMappingURL=admin-routing.module.js.map