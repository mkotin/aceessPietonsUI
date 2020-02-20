import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
    authUser: any;


    toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig, private  userService: UserService, public router: Router) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
      this.getAuthUser();
  }

    getAuthUser() {
        this.userService.auth().subscribe((res: any) => {
            if (res.success) {
                this.authUser = res.data;
            } else {
                this.router.navigate(['login']);
            }
        }, (err) => {
            this.router.navigate(['login']);
        });
    }

    logout() {
      this.userService.logout();
    }

}
