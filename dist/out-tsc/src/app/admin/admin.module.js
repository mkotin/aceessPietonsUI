import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { HttpClientModule } from "@angular/common/http";
import { StructureService } from "../services/structure.service";
import { FormsModule } from "@angular/forms";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { UserFilterPipe } from "./pipes/user-filter.pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { ManageStructuresComponent } from './manage-structures/manage-structures.component';
import { StructureFilterPipe } from "./pipes/structure-filter.pipe";
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        NgModule({
            declarations: [IndexComponent, ManageUsersComponent, UserFilterPipe, StructureFilterPipe, ManageStructuresComponent],
            imports: [
                HttpClientModule,
                CommonModule,
                FormsModule,
                NgxUiLoaderModule,
                NgxPaginationModule,
                AdminRoutingModule
            ],
            providers: [
                StructureService
            ],
            exports: [
                UserFilterPipe, StructureFilterPipe
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
export { AdminModule };
//# sourceMappingURL=admin.module.js.map