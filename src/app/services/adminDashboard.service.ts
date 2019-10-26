// Created by Blaine Viljoen
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root'
})

export class AdminDashboardService {

    public phpMyAdminUrl = 'http://35.197.228.135/phpmyadmin/';

    constructor(private http: HttpClient) {
    }

    getCSRFToken() {
        return this.http.get('/ATNSCCR_PHP/backend/api2/token.php'  , httpOptions );
    }

    getPhase2Docs(id) {
        const obj = {
            dataSelection: 'phase2Docs',
            ID: id
        };
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    getPhase3Docs(id) {
        const obj = {
            dataSelection: 'phase3Docs',
            ID: id
        };
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    getSpecialistData() {
        const obj = {
            dataSelection: 'specialist'
        };
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php' , obj , httpOptions);
    }

    editAlert(id, message, freq) {
        const obj = {updateSelection: 'alert', ID: id, message: message, frequency: freq};
        return this.http.post('/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
    }

    getAlert() {
        const obj = {dataSelection: 'alert'};
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    deleteDoc(obj) {
        return this.http.post('/ATNSCCR_PHP/backend/api2/removeFiles.php', obj, httpOptions);
    }

    editUserRole(user, role, operation) {
        if (operation === 'add') {
            const obj = {insertSelection: 'userRole', userID: user, roleID: role};
            return this.http.post('/ATNSCCR_PHP/backend/api2/insertData.php', obj, httpOptions);
        } else {
            const obj = {deleteSelection: 'userRole', userID: user, roleID: role};
            return this.http.post('/ATNSCCR_PHP/backend/api2/removeData.php', obj, httpOptions);
        }
    }

    assignEOS(user, eos, operation) {
        if (operation === 'add') {
            const obj = {insertSelection: 'eosAssign', userID: user, eosID: eos};
            return this.http.post('/ATNSCCR_PHP/backend/api2/insertData.php', obj, httpOptions);
        } else {
            const obj = {deleteSelection: 'eosAssign', userID: user, eosID: eos};
            return this.http.post('/ATNSCCR_PHP/backend/api2/removeData.php', obj, httpOptions);
        }
    }

    assignSite(user, site, operation) {
        if (operation === 'add') {
            const obj = {insertSelection: 'siteAssign', userID: user, siteID: site};
            return this.http.post('/ATNSCCR_PHP/backend/api2/insertData.php', obj, httpOptions);
        } else {
            const obj = {deleteSelection: 'siteAssign', userID: user, siteID: site};
            return this.http.post('/ATNSCCR_PHP/backend/api2/removeData.php', obj, httpOptions);
        }
    }

    getSiteUser() {
        const obj = {dataSelection: 'siteAssign'};
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    getEOSUser() {
        const obj = {dataSelection: 'eosAssign'};
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    insertTitle(type, description) {
        const obj = {insertSelection: 'title', type: type, description: description};
        return this.http.post('/ATNSCCR_PHP/backend/api2/insertData.php', obj , httpOptions);
    }

    deleteTitle(id) {
        const obj = {deleteSelection: 'title', ID: id};
        return this.http.post('/ATNSCCR_PHP/backend/api2/removeData.php', obj, httpOptions);
    }

    getTitle() {
        const obj = {dataSelection: 'title'};
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    insertManager(job, site, first, last, phone, email) {
        const obj = {insertSelection: 'manager', job: job, site: site, first: first, last: last, phone: phone, email: email};
        return this.http.post('/ATNSCCR_PHP/backend/api2/insertData.php', obj , httpOptions);
    }

    deleteManager(id) {
        const obj = {deleteSelection: 'manager', ID: id};
        return this.http.post('/ATNSCCR_PHP/backend/api2/removeData.php', obj, httpOptions);
    }

    getManager() {
        const obj = {dataSelection: 'manager'};
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    insertEOS(type, description) {
        const obj = {insertSelection: 'eos', type: type, description: description};
        return this.http.post('/ATNSCCR_PHP/backend/api2/insertData.php', obj , httpOptions);
    }

    deleteEOS(id) {
        const obj = {deleteSelection: 'eos', ID: id};
        return this.http.post('/ATNSCCR_PHP/backend/api2/removeData.php', obj, httpOptions);
    }

    getEOS() {
        const obj = {dataSelection: 'eos'};
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    getPageData() {
        const obj = {
            dataSelection: 'allCCR'
        };
        return this.http.post('/ATNSCCR_PHP/backend/api2/pageData.php', obj, httpOptions);
    }

    setNewSpecialist(id, specID, phase, CCR) {
        const obj = {
            updateSelection: 'specialist',
            ID: id,
            specialist: specID,
            phase: phase,
            CCR: CCR
        };
        return this.http.post('/ATNSCCR_PHP/backend/api2/updateData.php', obj, httpOptions);
    }
}
// Created by Blaine Viljoen
