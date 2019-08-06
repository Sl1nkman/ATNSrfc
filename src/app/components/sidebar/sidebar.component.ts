import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private username ;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    const jwt  = this.cookieService.get('jwt');
    const decodedToken = decode(jwt);
    this.username = decodedToken.data.username;
  }

}
