import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {ManageStructuresComponent} from "./manage-structures/manage-structures.component";

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
