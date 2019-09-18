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

    getUsers(){
        const obj = {
            dataSelection: 'currentUsers'
        };

        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    getPageData(userIDInput) {
        const obj = {
            dataSelection: 'myRfcs',
            userID: userIDInput
        };
        return this.http.post('http://localhost/ATNSCCR_PHP/backend/api2/pageData.php' , obj , httpOptions);
    }
}
// Created by Blaine Viljoen
