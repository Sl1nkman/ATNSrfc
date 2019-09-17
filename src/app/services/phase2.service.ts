import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CCRPhase2} from '../models/CCR-Phase2';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
};
@Injectable({
  providedIn: 'root'
})
export class Phase2Service {

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
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/files.php' , formData  );
  }

  submitPhase2(phase2: CCRPhase2 ) {
    console.log(phase2);
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/specialistConfiguration.php' , phase2 , httpOptions);
  }
}
