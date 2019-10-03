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

  private obj = null;
  private siteID = 0;
  constructor(private http: HttpClient ) {
  }

  submitRequest(phase1: RFC ) {

     return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/initiateRequest.php', phase1 , httpOptions);
  }

  updateRequest(phase1: RFC, ccrID) {
    const obj = {phase1: phase1, updateSelection: 'phase1', ID: ccrID};
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
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

  setobj(obj, siteID) {
    this.obj = obj;
    this.siteID = siteID;
  }

  getobj() {
    return this.obj;
  }

  getSite() {
    return this.siteID;
  }
}
