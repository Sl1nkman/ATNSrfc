import { Component, OnInit } from '@angular/core';
import {OAuth} from '../../models/OAuth';
import swal from 'sweetalert2'; // Sweet Alerts import
import * as crypto from 'crypto-js';
import {OathService} from '../../services/oath.service';
import {Router } from '@angular/router';
import {json} from '@angular-devkit/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private OAuthService: OathService ,
              private router: Router) { }

  user: String = '';
  pass: String = '';
  OAuth: OAuth = {
    username: undefined,
    password: undefined
  };

  setUsername(user) {
    this.user = user;
  }
  setPassword(pass) {
    this.pass = pass;
  }
  onLogin(event) {
    const target = event.target;
      const hash = crypto.MD5(this.pass);
      this.OAuth.username = this.user;
      this.OAuth.password = hash ;

      this.OAuthService.getUserDetails(this.OAuth.username, this.OAuth.password.toString() ).subscribe(data => {
        if (data.success) {
          this.OAuthService.setLoggedIn(true);
          this.router.navigate(['home']);
          swal('Logged In' , data.message , 'success' );
        } else {
          swal('Failure', data.message , 'error');
        }
      });

  }
  ngOnInit() {

  }

}
