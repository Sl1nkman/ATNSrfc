import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
};

@Injectable({
  providedIn: 'root'
})
export class OathService {
  public Token ;
  private loggedInStatus = false;
  constructor(private http: HttpClient ) { }

  get isLoggedIn() {
return this.loggedInStatus;
  }

  setLoggedIn(value: boolean ) {
    this.loggedInStatus = value;
  }

  getUserDetails(username , password , CSRF_token) {
    const obj = {
      username : username ,
      password: password ,
      CSRF_token: CSRF_token
    };
    return this.http.post( 'http://localhost/ATNSCCR_PHP/backend/api2/login.php', obj , httpOptions); ;
  }

  getCSRFToken() {
    return  this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
  }


}
