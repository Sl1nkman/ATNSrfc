import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CCRPhase2} from '../models/CCR-Phase2';

let httpOptions = {
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
    // httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data ' , 'Accept': 'application/json'})};
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/files.php' , formData  );
  }

  submitPhase2(phase2: CCRPhase2 , token ) {
    const obj = {
      TCB_CRF_ID: phase2.TCB_CRF_ID,
      requestPriority: phase2.requestPriority,
      predictedImpact: phase2.predictedImpact,
      changePeriod: phase2.changePeriod,
      temporaryPeriodStartDate: undefined,
      temporaryPeriodNumberOfDays: undefined,
      temporaryPeriodEndDate: undefined ,
      natureOfChange: undefined,
      eosSystem: undefined,
      configurationItems: undefined,
      change: {
        hardware: false,
        software: false,
        firmware: false
      },
      additionalDocuments: false,
      numberOfPages: undefined,
      estimatedImpacts: {
        operations: undefined,
        clients: undefined,
        technical: undefined
      },
      problemReportRaised: false,
      problemReportRef: undefined,
      changeSuccessfullyTested: undefined,
      changeNotSuccessfullyTestedReason: undefined,
      specialistComment: undefined,
      proposedImplementationDate: undefined,
      recommend_oppose: undefined,
      CSRF_token: token,
    };
    console.log(obj);
    return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/specialistConfiguration.php' , obj , httpOptions);
  }
}
