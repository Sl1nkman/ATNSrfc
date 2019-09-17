/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RFC} from '../models/RFC';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class Phase1Service {

  constructor(private http: HttpClient ) {
  }

  submitRequest(phase1: RFC ) {

     return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/initiateRequest.php', phase1 , httpOptions);
  }
  getPageData() {
    const obj = {
      dataSelection: 'initiateCCR'
    };
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php' , obj , httpOptions);

  }
  getCSRFToken() {
    return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
  }
}
