import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  authUser: any;
  constructor(private  userService: UserService, public router: Router) { }

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

}
