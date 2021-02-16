import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './themes-component/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './themes-component/forms/forms.component';
import { ButtonsComponent } from './themes-component/buttons/buttons.component';
import { TablesComponent } from './themes-component/tables/tables.component';
import { TypographyComponent } from './themes-component/typography/typography.component';
import { IconsComponent } from './themes-component/icons/icons.component';
import { AlertsComponent } from './themes-component/alerts/alerts.component';
import { AccordionsComponent } from './themes-component/accordions/accordions.component';
import { BadgesComponent } from './themes-component/badges/badges.component';
import { ProgressbarComponent } from './themes-component/progressbar/progressbar.component';
import { BreadcrumbsComponent } from './themes-component/breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './themes-component/pagination/pagination.component';
import { DropdownComponent } from './themes-component/dropdown/dropdown.component';
import { TooltipsComponent } from './themes-component/tooltips/tooltips.component';
import { CarouselComponent } from './themes-component/carousel/carousel.component';
import { TabsComponent } from './themes-component/tabs/tabs.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { NgxPaginationModule } from "ngx-pagination";
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewDemandeComponent } from './new-demande/new-demande.component';
import { UsagerSearchPipe } from './pipes/usager-search.pipe';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';
import { DemandeSearchPipe } from './pipes/demande-search.pipe';
import { DemandeSingleComponent } from './demande-single/demande-single.component';
import { CosComponent } from './cos/cos.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavbarComponent,
                SidebarComponent,
                FooterComponent,
                DashboardComponent,
                FormsComponent,
                ButtonsComponent,
                TablesComponent,
                TypographyComponent,
                IconsComponent,
                AlertsComponent,
                AccordionsComponent,
                BadgesComponent,
                ProgressbarComponent,
                BreadcrumbsComponent,
                PaginationComponent,
                DropdownComponent,
                TooltipsComponent,
                CarouselComponent,
                TabsComponent,
                LoginComponent,
                MainComponent,
                UserProfileComponent,
                NewDemandeComponent,
                UsagerSearchPipe,
                ListDemandesComponent,
                DemandeSearchPipe,
                DemandeSingleComponent,
                CosComponent,
            ],
            imports: [
                HttpClientModule,
                BrowserModule,
                RouterModule,
                AppRoutingModule,
                NgxPaginationModule,
                FormsModule,
                NgxUiLoaderModule,
                NgxUiLoaderHttpModule,
                NgxUiLoaderRouterModule,
                NgbModule.forRoot(),
            ],
            exports: [
                UsagerSearchPipe, DemandeSearchPipe
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map