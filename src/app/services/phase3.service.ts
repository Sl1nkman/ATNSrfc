import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CCRPhase3} from '../models/CCR-Phase3';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
};
@Injectable({
    providedIn: 'root'
})

export class Phase3Service {

    private obj = null;
    public phaseData = null;

    constructor(private http: HttpClient) {
    }

    getCSRFToken() {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
    }


    upload(formData: FormData) {
        formData.append('phase', 'phase3');
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/files.php' , formData  );
    }

    submitPhase3(phase3: CCRPhase3 ) {
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/specialistImplementation.php' , phase3 , httpOptions);
    }

    updatePhase3(phase3: CCRPhase3, ccrID) {
        const obj = {phase3: phase3, updateSelection: 'phase3', ID: ccrID};
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
    }

    setObj(obj) {
        this.obj = obj;
    }

    getObj() {
        return this.obj;
    }

    setphases(phaseData) {
        this.phaseData = phaseData ;
        console.log(this.phaseData);
    }
}
