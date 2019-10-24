import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
};
@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private http: HttpClient ) { }

  sendChangePasswordEmail (username: String) {
    const obj = {
      username: username
    };
    return this.http.post('/ATNSCCR_PHP/backend/api2/requestPasswordChange.php' , obj , httpOptions);
  }

}
