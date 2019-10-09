// Created by Blaine Viljoen
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root'
})

export class AdminDashboardService{

    constructor(private http: HttpClient) {
    }

    getCSRFToken() {
        return this.http.get('http://localhost/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
    }

    getPhase2Docs(id) {
        const obj = {
            dataSelection: 'phase2Docs',
            ID: id
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    getPhase3Docs(id) {
        const obj = {
            dataSelection: 'phase3Docs',
            ID: id
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    getSpecialistData() {
        const obj = {
            dataSelection: 'specialist'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php' , obj , httpOptions);
    }

    deleteDoc(obj){
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/removeFiles.php', obj, httpOptions);
    }

    getPageData() {
        const obj = {
            dataSelection: 'allCCR'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    setNewSpecialist(id, specID, phase, CCR) {
        const obj = {
            updateSelection: 'specialist',
            ID: id,
            specialist: specID,
            phase: phase,
            CCR: CCR
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
    }
}
// Created by Blaine Viljoen
