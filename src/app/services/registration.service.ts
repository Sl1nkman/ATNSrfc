import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/User';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  registerUser(user: User , token) {
    const obj = {
      title: user.title,
      surname: user.surname,
      name: user.name,
      employee_ID: user.employeeId ,
      username : user.email,
      contactNum: user.contactNumber,
      site: user.site,
      password: user.password,
      CSRF_token : token
    };

    return this.http.post('/ATNSCCR_PHP/backend/api2/register.php', obj, httpOptions);
  }
  getCSRFToken() {
    return this.http.get('/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
  }
  getPageData() {
    const obj = {
      dataSelection: 'registration'
    };
    return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php' , obj , httpOptions);
  }
}
