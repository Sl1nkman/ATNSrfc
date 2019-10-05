import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CCRPhase3} from '../models/CCR-Phase3';
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
    return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
  }
  getMyCCRs() {
    const obj = {
      dataSelection: 'currentRfcs'
    };
    return this.http.post('http://localhost/ATNSCCR_PHP/backent/api2/pageData.php' , obj , httpOptions);
}
}
