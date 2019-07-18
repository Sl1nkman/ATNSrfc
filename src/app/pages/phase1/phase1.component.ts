import { Component, OnInit } from '@angular/core';
import {CCRPhase1} from '../../models/CCR-Phase1';
import {RFC} from '../../models/RFC';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
    selector: 'app-phase1',
    templateUrl: './phase1.component.html',
    styleUrls: ['./phase1.component.css']
})
export class Phase1Component implements OnInit {

    public files: NgxFileDropEntry[] [] = [];
    displayTemporaryDateSelection: boolean ;

    availablePriorities: String [] = ['Emergency', 'Urgent', 'Safety', 'Improvement', 'Other'];
    availablePeriods: String [] = [ 'Permanent', 'Temporary', 'Trial'];
    availableImpacts: String [] = ['CLIENTS', 'NONE' , 'OPERATIONS(OPS)' , 'OPS and CLIENTS' , 'OPS and TECH' , 'OPS,TECH and CLIENTS' , 'TECH and CLIENTS' , 'TECHNICAL(TECH)'];
    availableNatureOfChange: String [] = ['National' , 'Local' , 'Regional'];
    availableEosSystems: String [] = ['AFTN' , 'AMHS' , 'ANAIS' , 'A-SMGCS' , 'ATIS' , 'AWOS' , 'CAD' , 'CAMU' , 'DAID' , 'DATIS' , 'DIESEL BACKUP' ,
        'DITTEL' , 'DME' , 'FRS' , 'FWD RELAY' , 'ILS' , 'IVSAT' , 'MLAT' , 'NDB' , 'OTN' , 'OTN' , 'RADAR' , 'SATELLITE' , 'SMR' , 'SQUIB' , 'TERNS' ,
        'TITAN' , 'TOPSKY' , 'UPS' , 'VCCS' , 'VHF' , 'VOR' , 'VPN'];


    RFC: RFC = {
        dateRequested: undefined,
        requestedChange: undefined,
        description: undefined
    };
    phase1: CCRPhase1 = {
    TCB_CRF_ID: undefined,
    requestPriority: undefined,
    predictedImpact: '',
    changePeriod: undefined,
    temporaryPeriod: undefined,
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
    changeSuccessfullyTested: false,
    changeNotSuccessfullyTestedReason: undefined,
    submittedToAllParties: false,
    notSubmittedToAllPartiesReason: undefined,
    specialistComment: undefined,
    proposedImplementationDate: undefined,
    };
    constructor() {
    }

    temporarySelected() {
        if (this.phase1.changePeriod === 'Temporary') {
            this.displayTemporaryDateSelection = true;
        } else {
            this.phase1.temporaryPeriod = undefined;
            this.displayTemporaryDateSelection = false; }
}
    onSelectPriority(value: string) {
        this.phase1.requestPriority = value;
    }

    onSelectChangePeriod(value: string) {
        this.phase1.changePeriod = value;
        this.temporarySelected();
    }

    onSelectImpact(value: string) {
        this.phase1.predictedImpact = value;
    }

    onSelectNatureOfChange(value: string) {
        this.phase1.natureOfChange = value;
    }

    onSelectEosSystem(value: string) {
        this.phase1.eosSystem = value;
        this.phase1.TCB_CRF_ID = value + '0001'; // database reference to eos tcb number + 1
    }

    onSelectChangeTypeHW(e) {
        if (e.target.checked) {
            this.phase1.change.hardware = true;
            console.log(this.phase1.change.hardware);
        } else {
            this.phase1.change.hardware = false ;
            console.log(this.phase1.change.hardware);
        }
    }

    onSelectChangeTypeSW(e) {
        if (e.target.checked) {
            this.phase1.change.software = true;
            console.log(this.phase1.change.software);
        } else {
            this.phase1.change.software = false ;
            console.log(this.phase1.change.software);
        }
    }

    onSelectChangeTypeFW(e) {
        if (e.target.checked) {
            this.phase1.change.firmware = true;
            console.log(this.phase1.change.firmware);
        } else {
            this.phase1.change.firmware = false ;
            console.log(this.phase1.change.firmware);
        }
    }

    onSelectAdditionalDocuments(e) {
        if (e.target.value === 'yes') {
            this.phase1.additionalDocuments = true;
            console.log('We have additional work');
        } else if (e.target.value === 'no') {
            this.phase1.additionalDocuments = false;
            console.log('No additional work');
        }
    }
    onSelectReportRaised(e) {
        if (e.target.value === 'yes') {
            this.phase1.problemReportRaised = true;
        } else if (e.target.value === 'no') {
            this.phase1.problemReportRef = undefined;
            this.phase1.problemReportRaised = false;
        }
    }

    onSelectPreTested(e) {
        if (e.target.value === 'yes') {
            this.phase1.changeSuccessfullyTested = true;
        } else if (e.target.value === 'no') {
            this.phase1.changeNotSuccessfullyTestedReason = undefined;
            this.phase1.changeSuccessfullyTested = false;
        }
    }
    onSelectSubmittedToAllConcerned (e) {
        if (e.target.value === 'yes') {
            this.phase1.submittedToAllParties = true;
        } else if (e.target.value === 'no') {
            this.phase1.notSubmittedToAllPartiesReason = undefined;
            this.phase1.submittedToAllParties = false;
        }
    }

    onSubmit() {

    }
    public dropped(files: NgxFileDropEntry[]) {
        // this.files = files;
        this.files.push(files);
        for (const droppedFile of files) {

            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {

                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);

                    /**
                     // You could upload it like this:
                     const formData = new FormData()
                     formData.append('logo', file, relativePath)

                     // Headers
                     const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

                     this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
                     .subscribe(data => {
            // Sanitized logo returned from backend
          })
                     **/

                });
            } else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        }
    }

    public fileOver(event) {
        console.log(event);
    }

    public fileLeave(event) {
        console.log(event);
    }


    ngOnInit() {
        this.RFC.requestedChange = 'We need new laptops for engineering';
        this.RFC.description = 'The reason for this is some blah blah software that can only run on blah blah nonsens give me new ones. Newones forever been asldfnadsnfgjSDBNVL;Sndv;ljNF;Lhnl;gvnW;LFHoefhoUIHEFOJKnefHWEV         ERFG   wef  ew fwef    wef     wegf    wef     ';
        this.phase1.TCB_CRF_ID = 'Undefined' ;
    }

}
