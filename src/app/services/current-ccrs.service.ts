import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
};
@Injectable({
  providedIn: 'root'
})
export class CurrentCcrsService {

  constructor(private http: HttpClient) {
  }
  getCSRFToken() {
    return this.http.get('/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
  }
  getMyCCRs() {
    const obj = {
      dataSelection: 'currentRfcs'
    };
    return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php' , obj , httpOptions);
  }
}
