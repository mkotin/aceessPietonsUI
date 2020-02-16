import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {AdminRoutingModule} from './admin-routing.module';
import {IndexComponent} from './index/index.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {HttpClientModule} from "@angular/common/http";
import {StructureService} from "../services/structure.service";
import {FormsModule} from "@angular/forms";
import {NgxUiLoaderModule} from "ngx-ui-loader";

import { UserFilterPipe } from "./pipes/user-filter.pipe";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
    declarations: [IndexComponent, ManageUsersComponent, UserFilterPipe],
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
        UserFilterPipe
    ]
})
export class AdminModule {
}
