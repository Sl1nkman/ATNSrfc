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

    getSpecialistData() {
        const obj = {
            dataSelection: 'specialist'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php' , obj , httpOptions);
    }

    getPageData() {
        const obj = {
            dataSelection: 'allCCR'
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    setNewSpecialist(id, specID) {
        const obj = {
            updateSelection: 'specialist',
            ID: id,
            specialist: specID
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
    }
}
// Created by Blaine Viljoen
