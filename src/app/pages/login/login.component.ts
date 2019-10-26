/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Component, OnInit } from '@angular/core';
import {OAuth} from '../../models/OAuth';
import swal from 'sweetalert2'; // Sweet Alerts import
import {OathService} from '../../services/oath.service';
import {Data, Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private OAuthService: OathService ,
              private router: Router ,  private cookieService: CookieService) { }
  user: String = '';
  pass: String = '';
  OAuth: OAuth = {
    username: undefined,
    password: undefined
  };
  Token = null ;

  setUsername(user) {
    this.user = user;
  }
  setPassword(pass) {
    this.pass = pass;
  }
  onLogin(event) {
    const target = event.target;
      this.OAuth.username = this.user;
      this.OAuth.password = this.pass ;

      this.OAuthService.getUserDetails(this.OAuth.username, this.OAuth.password , this.Token ).subscribe((data: Data) => {
        if (data.success) {
          this.OAuthService.setLoggedIn(true);
          this.cookieService.set( 'jwt', data.jwt );

          this.router.navigate(['home']  );
          // swal('Logged In' , data.message , 'success' );
          swal({
            type: 'success',
            title: 'Logged In',
            text: data.message ,
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          this.OAuthService.getCSRFToken().subscribe( ( data1: Data) => {
            this.Token = data1.tokenValue ;
          });
          swal('Failure', data.message , 'error');
        }
      });

  }
  onForgotPassword() {
    this.router.navigate(['forgotPassword']);
  }
  ngOnInit() {
    this.OAuthService.getCSRFToken().subscribe( (data: Data) => {
      this.Token = data.tokenValue ;
    });
  }

}
