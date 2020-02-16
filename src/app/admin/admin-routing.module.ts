import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'manage-users',
        component: ManageUsersComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
