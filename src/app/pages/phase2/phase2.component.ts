import { Component, OnInit } from '@angular/core';
import {CCRPhase1} from '../../models/CCR-Phase1';
import {RFC} from '../../models/RFC';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';


@Component({
    selector: 'app-phase1',
    templateUrl: './phase2.component.html',
    styleUrls: ['./phase2.component.css']
})
export class Phase2Component implements OnInit {

    datepickerConfig: Partial<BsDatepickerConfig> ;
    startDate: Date;
    endDate: Date;
    startDateString: string;
    endDateString: string;
    dateRangePicker: Date;
    public files: NgxFileDropEntry[] [] = []  ;


    availableNumberOfTemporaryDays: String [] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
        '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    availablePriorities: String [] = ['EMERGENCY', 'Urgent', 'Safety', 'Improvement', 'Other'];
    availablePeriods: String [] = ['Permanent', 'Temporary', 'Trial'];
    availableImpacts: String [] = ['CLIENTS', 'OPERATIONS', 'TECHNICAL'];
    availableNatureOfChange: String [] = ['National', 'Local', 'Regional'];
    availableEosSystems: String [] = ['AFTN', 'AMHS', 'ANAIS', 'A-SMGCS', 'ATIS', 'AWOS', 'CAD', 'CAMU', 'DAID', 'DATIS', 'DIESEL BACKUP',
        'DITTEL', 'DME', 'FRS', 'FWD RELAY', 'ILS', 'IVSAT', 'MLAT', 'NDB', 'OTN', 'OTN', 'RADAR', 'SATELLITE', 'SMR', 'SQUIB', 'TERNS',
        'TITAN', 'TOPSKY', 'UPS', 'VCCS', 'VHF', 'VOR', 'VPN'];

    // Form boolean values
    emergencySelected: boolean;
    displayPredictedRisks: boolean;
    displayChangePeriod: boolean;
    displayNatureOfChange: boolean;
    displayEOSystem: boolean;
    displayTCB_CRF_ID: boolean;
    displayConfigurationItems: boolean;
    displayChangeType: boolean;
    displaySelectTemporaryAmountOfDays: boolean ;
    displayTemporaryDateSelection: boolean;

    displayAdditionalAttachedDocuments: boolean ;
    displayEstimatedImpact: boolean ;
    displayEstimatedImpactOps: boolean;
    displayEstimatedImpactClients: boolean;
    displayEstimatedImpactTech: boolean;
    displayProblemReportRaised: boolean ;
    displayChangePreTested: boolean ;
    displayChangeNotSuccessfullyTestedReason: boolean ;
    displaySpecialistComments: boolean ;
    displayProposedImplementationDate: boolean ;
    displayRecommendOrOppose: boolean ;
    activateSubmitButton: boolean ;

    RFC: RFC = {
        dateRequested: undefined,
        requestedChange: undefined,
        description: undefined
    };
    phase1: CCRPhase1 = {
        TCB_CRF_ID: undefined,
        requestPriority: undefined,
        predictedImpact: [],
        changePeriod: undefined,
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
        recommend_oppose: undefined
    };

    constructor( ) {
        const minDate = new Date();

        this.datepickerConfig = Object.assign({},
            {containerClass: 'theme-dark-blue'},
            { dateInputFormat: 'YYYY-MM-DD'} ,
            {showWeekNumbers: false},
            {minDate: minDate});

    }


    onSelectPriority($event) {
        const prioritySelect = document.getElementById('priority');
        if ($event.target.value === 'EMERGENCY') {
            prioritySelect.classList.add('text-danger');
            this.emergencySelected = true;
            this.displaySpecialistComments = true ;
            this.displayPredictedRisks = false;
            this.displayPredictedRisks = false;
            this.displayChangePeriod = false;
            this.displayNatureOfChange = false;
            this.displayEOSystem = false;
            this.displayTCB_CRF_ID = false;
            this.displayConfigurationItems = false;
            this.displayChangeType = false;
            this.displayTemporaryDateSelection = false;
            this.displayAdditionalAttachedDocuments = false ;
            this.displayEstimatedImpact = false ;
            this.displayEstimatedImpactOps = false;
            this.displayEstimatedImpactClients = false;
            this.displayEstimatedImpactTech = false;
            this.displayProblemReportRaised = false ;
            this.displayChangePreTested = false ;
            this.displayChangeNotSuccessfullyTestedReason = false ;
            this.displayProposedImplementationDate = false ;
        } else if (prioritySelect.classList.contains('text-danger') && $event.target.value !== 'Emergency') {
            this.displayPredictedRisks = true;
            this.displaySpecialistComments = false ;
            this.emergencySelected = false;
            prioritySelect.classList.remove('text-danger');
        } else {
            this.displayPredictedRisks = true;
            this.displaySpecialistComments = false ;
            this.emergencySelected = false;
        }
        this.phase1.requestPriority = $event.target.value;
    }

    onSelectChangePeriod($event) {
        switch ($event.target.value) {
            case 'Temporary' :
                this.displaySelectTemporaryAmountOfDays = true ;
                this.displayNatureOfChange = false;
                break;
            case 'Trial':

                this.displayNatureOfChange = false;
                this.displaySelectTemporaryAmountOfDays = true ;
                break;
            case 'Permanent' :
                this.displayNatureOfChange = true;
                this.displaySelectTemporaryAmountOfDays = false ;
                break;
        }
        this.phase1.changePeriod = $event.target.value;
    }
    onSelectNumberOfTemporaryDays($event) {
        this.phase1.temporaryPeriodNumberOfDays = $event.target.value ;
        this.displayTemporaryDateSelection = true ;
    }
    onSelectTemporaryStartDate($event) {
        const maxDate = new Date() ;
        maxDate.setDate($event.getDate() + parseInt('' + this.phase1.temporaryPeriodNumberOfDays, 10));
        this.phase1.temporaryPeriodEndDate = maxDate;
        this.displayNatureOfChange = true ;

    }
    onSelectImpact($event) {
        console.log(this.phase1.predictedImpact);
        if (this.phase1.predictedImpact !== []) {
            this.displayChangePeriod = true;
            if (this.phase1.predictedImpact.includes('CLIENTS')) {
                this.displayEstimatedImpactClients = true;
            } else {
                this.displayEstimatedImpactClients = false;
            }
            if (this.phase1.predictedImpact.includes('TECHNICAL')) {
                this.displayEstimatedImpactTech = true;
            } else {
                this.displayEstimatedImpactTech = false;
            }
            if (this.phase1.predictedImpact.includes('OPERATIONS')) {
                this.displayEstimatedImpactOps = true;
            } else {
                this.displayEstimatedImpactOps = false;
            }
        } else {
            this.displayChangePeriod = false;
        }


    }
    onSelectNatureOfChange($event) {

        if (this.phase1.natureOfChange !== undefined ) {
            this.displayEOSystem = true ;
        } else {
            this.displayEOSystem = false ;
        }
    }

    onSelectEosSystem($event) {
        this.phase1.eosSystem = $event.target.value;
        this.phase1.TCB_CRF_ID = $event.target.value + '0001'; // database reference to eos tcb number + 1
        this.displayTCB_CRF_ID = true ;
        this.displayConfigurationItems = true;
    }

    onSelectChangeTypeHW(e) {

        if (e.target.checked) {
            this.phase1.change.hardware = true;
            console.log(this.phase1.change.hardware);
        } else {
            this.phase1.change.hardware = false ;
            console.log(this.phase1.change.hardware);
        }
        if (this.phase1.change.firmware || this.phase1.change.software || this.phase1.change.hardware ) {
            this.displayAdditionalAttachedDocuments = true ;
        } else { this.displayAdditionalAttachedDocuments = false ; }
    }

    onSelectChangeTypeSW(e) {
        if (e.target.checked) {
            this.phase1.change.software = true;
            console.log(this.phase1.change.software);
        } else {
            this.phase1.change.software = false ;
            console.log(this.phase1.change.software);
        }
        if (this.phase1.change.firmware || this.phase1.change.software || this.phase1.change.hardware ) {
            this.displayAdditionalAttachedDocuments = true ;
        } else { this.displayAdditionalAttachedDocuments = false ; }
    }

    onSelectChangeTypeFW(e) {
        if (e.target.checked) {
            this.phase1.change.firmware = true;
            console.log(this.phase1.change.firmware);
        } else {
            this.phase1.change.firmware = false ;
            console.log(this.phase1.change.firmware);
        }
        if (this.phase1.change.firmware || this.phase1.change.software || this.phase1.change.hardware ) {
            this.displayAdditionalAttachedDocuments = true ;
        } else { this.displayAdditionalAttachedDocuments = false ; }
    }
    onSelectAdditionalDocuments(e) {
        if (e.target.value === 'yes') {
            this.phase1.additionalDocuments = true;
            this.displayEstimatedImpact = false ;
            console.log('We have additional work');
        } else if (e.target.value === 'no') {
            this.files = [];
            this.phase1.additionalDocuments = false;
            this.phase1.numberOfPages = undefined ;
            this.displayEstimatedImpact = true ;
            console.log('No additional work');
        }
    }
    public dropped(files: NgxFileDropEntry[]) {
        this.displayEstimatedImpact = true;
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
    estimatedImpact($event) {
        if ( this.phase1.estimatedImpacts.technical !== undefined   ||
            this.phase1.estimatedImpacts.clients !== undefined   ||
            this.phase1.estimatedImpacts.operations !== undefined  ) {
             this.displayProblemReportRaised = true ;
        } else {
            this.displayProblemReportRaised = false ; }
    }
    onSelectReportRaised(e) {
        if (e.target.value === 'yes') {
            this.displayChangePreTested = false ;
            this.phase1.problemReportRaised = true;
        } else if (e.target.value === 'no') {
            this.displayChangePreTested = true ;
            this.phase1.problemReportRef = undefined;
            this.phase1.problemReportRaised = false;
        }
    }
    onInputProblemReportRef() {
        this.displayChangePreTested = true;
    }

    onSelectPreTested(e) {
        if (e.target.value === 'yes') {
            this.phase1.changeSuccessfullyTested = 'yes';
            this.displayChangeNotSuccessfullyTestedReason = false ;
            this.displaySpecialistComments = true ;
            this.phase1.changeNotSuccessfullyTestedReason = undefined ;
            if (this.displaySelectTemporaryAmountOfDays) {
                this.displayRecommendOrOppose = true ;
            }
        } else if (e.target.value === 'no') {
            this.phase1.changeNotSuccessfullyTestedReason = undefined;
            this.phase1.changeSuccessfullyTested = 'no';
            this.displayChangeNotSuccessfullyTestedReason = true ;
            this.displaySpecialistComments = false ;
            this.displayRecommendOrOppose = false ;
        } else if (e.target.value === 'na') {
            this.phase1.changeSuccessfullyTested = 'na';
            this.displayChangeNotSuccessfullyTestedReason = false ;
            this.displaySpecialistComments = true ;
            this.phase1.changeNotSuccessfullyTestedReason = undefined ;
            if (this.displaySelectTemporaryAmountOfDays) {
                this.displayRecommendOrOppose = true ;
            }
        }
    }
    onUnsuccessfulTestReason() {
        this.displaySpecialistComments = true ;
        if (this.displaySelectTemporaryAmountOfDays) {
            this.displayRecommendOrOppose = true ;
        }
    }

    onInputSpecialistComment() {
        this.displayProposedImplementationDate = true ;
    }

    onSelectProposedImplementationDate() {
        this.displayRecommendOrOppose = true ;
    }
    onSelectRecommendOrOppose($event) {
        this.phase1.recommend_oppose = $event.target.value;
        const submitButton = document.getElementById('submit');
        submitButton.classList.remove('disabled');
        this.activateSubmitButton = true;
    }
    // onSelectSubmittedToAllConcerned (e) {
    //     if (e.target.value === 'yes') {
    //         this.phase2.submittedToAllParties = true;
    //     } else if (e.target.value === 'no') {
    //         this.phase2.notSubmittedToAllPartiesReason = undefined;
    //         this.phase2.submittedToAllParties = false;
    //     }
    // }

    onSubmit() {


        console.log(JSON.stringify(this.phase1));

    }



    ngOnInit() {
        this.RFC.requestedChange = 'We need new laptops for engineering';
        this.RFC.description = 'The reason for this is some blah blah software that can only run on blah blah nonsens give me new ones. Newones forever been asldfnadsnfgjSDBNVL;Sndv;ljNF;Lhnl;gvnW;LFHoefhoUIHEFOJKnefHWEV         ERFG   wef  ew fwef    wef     wegf    wef     ';
        this.phase1.TCB_CRF_ID = 'Undefined' ;
    }

}
