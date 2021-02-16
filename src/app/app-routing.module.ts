import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsComponent} from './themes-component/forms/forms.component';
import {ButtonsComponent} from './themes-component/buttons/buttons.component';
import {TablesComponent} from './themes-component/tables/tables.component';
import {IconsComponent} from './themes-component/icons/icons.component';
import {TypographyComponent} from './themes-component/typography/typography.component';
import {AlertsComponent} from './themes-component/alerts/alerts.component';
import {AccordionsComponent} from './themes-component/accordions/accordions.component';
import {BadgesComponent} from './themes-component/badges/badges.component';
import {ProgressbarComponent} from './themes-component/progressbar/progressbar.component';
import {BreadcrumbsComponent} from './themes-component/breadcrumbs/breadcrumbs.component';
import {PaginationComponent} from './themes-component/pagination/pagination.component';
import {DropdownComponent} from './themes-component/dropdown/dropdown.component';
import {TooltipsComponent} from './themes-component/tooltips/tooltips.component';
import {CarouselComponent} from './themes-component/carousel/carousel.component';
import {TabsComponent} from './themes-component/tabs/tabs.component';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {AuthGuardService} from "./services/auth/auth-guard.service";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {NewDemandeComponent} from "./new-demande/new-demande.component";
import {ListDemandesComponent} from "./list-demandes/list-demandes.component";
import {DemandeSingleComponent} from "./demande-single/demande-single.component";
import {CosComponent} from "./cos/cos.component";

const routes: Routes = [
    // Themes components routes
    {path: '', redirectTo: '/app', pathMatch: 'full'},
    {path: 'app', component: MainComponent, children: [
        {
            path: '',
          component: DashboardComponent
        },
        {
            path: 'dashboard',
            data: {expectedRoles: ['ALL']},
            canActivate: [AuthGuardService],
            component: DashboardComponent
        },
        {
            path: 'profile',
            data: {expectedRoles: ['ALL']},
            canActivate: [AuthGuardService],
            component: UserProfileComponent
        },
        {
            path: 'new_demande',
            data: {expectedRoles: ['STRUCTURE', 'ADMIN']},
            canActivate: [AuthGuardService],
            component: NewDemandeComponent
        },
        {
            path: 'demandes',
            data: {expectedRoles: ['ALL']},
            canActivate: [AuthGuardService],
            component: ListDemandesComponent
        },
        {
            path: 'demandeSingle/:id',
            data: {expectedRoles: ['ALL']},
            canActivate: [AuthGuardService],
            component: DemandeSingleComponent
        },
        {
            path: 'cos',
            data: {expectedRoles: ['ADMIN', 'AGENT SSFA', 'COS']},
            canActivate: [AuthGuardService],
            component: CosComponent
        },
        {path: 'forms', component: FormsComponent},
        {path: 'buttons', component: ButtonsComponent},
        {path: 'tables', component: TablesComponent},
        {path: 'icons', component: IconsComponent},
        {path: 'typography', component: TypographyComponent},
        {path: 'alerts', component: AlertsComponent},
        {path: 'accordions', component: AccordionsComponent},
        {path: 'badges', component: BadgesComponent},
        {path: 'progressbar', component: ProgressbarComponent},
        {path: 'breadcrumbs', component: BreadcrumbsComponent},
        {path: 'pagination', component: PaginationComponent},
        {path: 'dropdowns', component: DropdownComponent},
        {path: 'tooltips', component: TooltipsComponent},
        {path: 'carousel', component: CarouselComponent},
        {path: 'tabs', component: TabsComponent},
        {
            path: 'admin',
            data: {expectedRoles: ['ADMIN']},
            canActivate: [AuthGuardService],
            loadChildren: './admin/admin.module#AdminModule'
        }

    ]},
    // App routes
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
