/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private appService: AppService, private router: Router) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

  logOut() {
    this.router.navigate(['login']);
  }
}

