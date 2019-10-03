import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CCRPhase2} from '../models/CCR-Phase2';
import {RFC} from '../models/RFC';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
};
@Injectable({
  providedIn: 'root'
})
export class Phase2Service {

  private obj = null;
  private phase1 = null;
  private user = null;

  constructor(private http: HttpClient ) { }

  getCSRFToken() {
    return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
  }
  getPageData() {
    const obj = {
      dataSelection: 'phase2'
    };
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php' , obj , httpOptions);
  }
  upload(formData: FormData) {
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/files.php' , formData);
  }

  submitPhase2(phase2: CCRPhase2 ) {
    console.log(phase2);
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/specialistConfiguration.php' , phase2 , httpOptions);
  }

  updatePhase2(phase2: CCRPhase2, ccrID) {
    const obj = {phase2: phase2, updateSelection: 'phase2', ID: ccrID};
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
  }

  setObj(obj, phase1, user) {
    this.obj = obj;
    this.phase1 = phase1;
    this.user = user;
  }

  getObj() {
    return this.obj;
  }

  getPhase1(){
    return this.phase1;
  }

  getUser(){
    return this.user;
  }
}
