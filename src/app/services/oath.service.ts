import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class OathService {

  private loggedInStatus = false;
  constructor(private http: HttpClient ) { }

  get isLoggedIn() {
return this.loggedInStatus;
  }

  setLoggedIn(value: boolean ) {
    this.loggedInStatus = value;
  }
  getUserDetails(username , password) {
    const obj = {username ,  password}
    return this.http.post( 'http://localhost/ATNS_RFC_php/api/login.php', obj , httpOptions);
  }
}
