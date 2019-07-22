import { Component, OnInit } from '@angular/core';
import {OAuth} from '../../models/OAuth';
import swal from 'sweetalert2'; // Sweet Alerts import
import {OathService} from '../../services/oath.service';
import {Data, Router} from '@angular/router';


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
      this.OAuth.username = this.user;
      this.OAuth.password = this.pass ;

      this.OAuthService.getUserDetails(this.OAuth.username, this.OAuth.password.toString() ).subscribe((data: Data) => {
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
