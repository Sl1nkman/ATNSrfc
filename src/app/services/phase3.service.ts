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

    constructor(private http: HttpClient) {
    }

    getCSRFToken() {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
    }


    upload(formData: FormData) {
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/files.php' , formData  );
    }

    submitPhase3(phase3: CCRPhase3 ) {
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/specialistImplementation.php' , phase3 , httpOptions);
    }

    setObj(obj) {
        this.obj = obj;
    }

    getObj() {
        return this.obj;
    }
}
