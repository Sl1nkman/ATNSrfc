/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public username ;
  public roles = '' ;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    const jwt  = this.cookieService.get('jwt');
    const decodedToken = decode(jwt);
    this.username = decodedToken.data.username;
    if (decodedToken.data.roles.length === 0 ) {
      this.roles = decodedToken.data.roles;
    } else {
      for (let i = 0 ; i < decodedToken.data.roles.length; i++) {
         if (i === decodedToken.data.roles.length - 1 ) {
           this.roles += decodedToken.data.roles[i] + '\n';
        } else {
           this.roles += decodedToken.data.roles[i] + '\n' ;
         }
      }
    }

  }

}
