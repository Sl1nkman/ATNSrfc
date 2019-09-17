/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Component, OnInit , EventEmitter} from '@angular/core';
import {CCRPhase2} from '../../models/CCR-Phase2';
import {RFC} from '../../models/RFC';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import swal from 'sweetalert2';
import {Data} from '@angular/router';
import {Phase2Service} from '../../services/phase2.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-phase1',
    templateUrl: './phase2.component.html',
    styleUrls: ['./phase2.component.css']
})
export class Phase2Component implements OnInit {

    private  formData = new FormData();
    datepickerConfig: Partial<BsDatepickerConfig> ;
    private files: NgxFileDropEntry[] [] = []  ;
    private Token ;


    availableNumberOfTemporaryDays: String [] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
        '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    availablePriorities: String [] = ['EMERGENCY', 'Urgent', 'Safety', 'Improvement', 'Other'];
    availablePeriods: String [] = ['Permanent', 'Temporary', 'Trial'];
    availableImpacts: String [] = ['CLIENTS', 'OPERATIONS', 'TECHNICAL'];
    availableNatureOfChange: String [] = ['National', 'Local', 'Regional'];
    availableEosSystems: String [] = ['AFTN', 'AMHS', 'ANAIS', 'A-SMGCS', 'ATIS', 'AWOS', 'CAD', 'CAMU', 'DAID', 'DATIS', 'DIESEL BACKUP',
        'DITTEL', 'DME', 'FRS', 'FWD RELAY', 'ILS', 'IVSAT', 'MLAT', 'NDB', 'OTN', 'OTN', 'RADAR', 'SATELLITE', 'SMR', 'SQUIB', 'TERNS',
        'TITAN', 'TOPSKY', 'UPS', 'VCCS', 'VHF', 'VOR', 'VPN'];

    // Form display boolean values
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
    phase2: CCRPhase2 = {
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

    constructor(private phase2service: Phase2Service, private fb: FormBuilder ) {
        const minDate = new Date();

        this.datepickerConfig = Object.assign({},
            {containerClass: 'theme-dark-blue' },
            { dateInputFormat: 'YYYY-MM-DD' } ,
            { showWeekNumbers: false },
            { minDate: minDate });
    }



    onSelectPriority($event) {
        const prioritySelect = document.getElementById('priority');
        if ($event.target.value === '1') {
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
        this.phase2.requestPriority = $event.target.value;
    }

    onSelectChangePeriod($event) {
        switch ($event.target.value) {
            case '1' :
                this.displayNatureOfChange = true;
                this.displaySelectTemporaryAmountOfDays = false ;
                break;
            case '2' :
                this.displaySelectTemporaryAmountOfDays = true ;
                this.displayNatureOfChange = false;
                break;
            case '3':

                this.displayNatureOfChange = false;
                this.displaySelectTemporaryAmountOfDays = true ;
                break;
        }
        this.phase2.changePeriod = $event.target.value;
    }
    onSelectNumberOfTemporaryDays($event) {
        this.phase2.temporaryPeriodNumberOfDays = $event.target.value ;
        this.displayTemporaryDateSelection = true ;
    }
    onSelectTemporaryStartDate($event) {
        const maxDate = new Date() ;
        maxDate.setDate($event.getDate() + parseInt('' + this.phase2.temporaryPeriodNumberOfDays, 10));
        this.phase2.temporaryPeriodEndDate = maxDate;
        this.displayNatureOfChange = true ;

    }
    onSelectImpact($event) {
        if (this.phase2.predictedImpact !== []) {
            this.displayChangePeriod = true;
            if (this.phase2.predictedImpact.includes('CLIENTS')) {
                this.displayEstimatedImpactClients = true;
            } else {
                this.displayEstimatedImpactClients = false;
            }
            if (this.phase2.predictedImpact.includes('TECHNICAL')) {
                this.displayEstimatedImpactTech = true;
            } else {
                this.displayEstimatedImpactTech = false;
            }
            if (this.phase2.predictedImpact.includes('OPERATIONS')) {
                this.displayEstimatedImpactOps = true;
            } else {
                this.displayEstimatedImpactOps = false;
            }
        } else {
            this.displayChangePeriod = false;
        }


    }
    onSelectNatureOfChange($event) {

        if (this.phase2.natureOfChange !== undefined ) {
            this.displayEOSystem = true ;
        } else {
            this.displayEOSystem = false ;
        }
    }

    onSelectEosSystem($event) {
        this.phase2.eosSystem = $event.target.value;
        this.phase2.TCB_CRF_ID = $event.target.value + '0001'; // database reference to eos tcb number + 1
        this.displayTCB_CRF_ID = true ;
        this.displayConfigurationItems = true;
    }

    onSelectChangeTypeHW(e) {

        if (e.target.checked) {
            this.phase2.change.hardware = true;
        } else {
            this.phase2.change.hardware = false ;
        }
        if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware ) {
            this.displayAdditionalAttachedDocuments = true ;
        } else { this.displayAdditionalAttachedDocuments = false ; }
    }

    onSelectChangeTypeSW(e) {
        if (e.target.checked) {
            this.phase2.change.software = true;
        } else {
            this.phase2.change.software = false ;
        }
        if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware ) {
            this.displayAdditionalAttachedDocuments = true ;
        } else { this.displayAdditionalAttachedDocuments = false ; }
    }

    onSelectChangeTypeFW(e) {
        if (e.target.checked) {
            this.phase2.change.firmware = true;
        } else {
            this.phase2.change.firmware = false ;
        }
        if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware ) {
            this.displayAdditionalAttachedDocuments = true ;
        } else { this.displayAdditionalAttachedDocuments = false ; }
    }
    onSelectAdditionalDocuments(e) {
        if (e.target.value === 'yes') {
            this.phase2.additionalDocuments = true;
            this.displayEstimatedImpact = false ;
        } else if (e.target.value === 'no') {
            // this.files = [];
            this.phase2.additionalDocuments = false;
            this.phase2.numberOfPages = undefined ;
            this.displayEstimatedImpact = true ;
        }
    }

    // first file uploader start
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
                    // console.log(droppedFile.relativePath, file);

                     this.formData.append('file', file, droppedFile.relativePath );
                     console.log(this.formData.getAll('file'));
                });
            } else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
            }
        }
    }
    public fileOver(event) {
        console.log(event);
    }

    public fileLeave(event) {
        console.log(event);
    }
    public uploadFiles() {

    }

    // first file uploader end
    estimatedImpact($event) {
        if ( this.phase2.estimatedImpacts.technical !== undefined   ||
            this.phase2.estimatedImpacts.clients !== undefined   ||
            this.phase2.estimatedImpacts.operations !== undefined  ) {
             this.displayProblemReportRaised = true ;
        } else {
            this.displayProblemReportRaised = false ; }
    }
    onSelectReportRaised(e) {
        if (e.target.value === 'yes') {
            this.displayChangePreTested = false ;
            this.phase2.problemReportRaised = true;
        } else if (e.target.value === 'no') {
            this.displayChangePreTested = true ;
            this.phase2.problemReportRef = undefined;
            this.phase2.problemReportRaised = false;
        }
    }
    onInputProblemReportRef() {
        this.displayChangePreTested = true;
    }

    onSelectPreTested(e) {
        if (e.target.value === 'yes') {
            this.phase2.changeSuccessfullyTested = 'yes';
            this.displayChangeNotSuccessfullyTestedReason = false ;
            this.displaySpecialistComments = true ;
            this.phase2.changeNotSuccessfullyTestedReason = undefined ;
            if (this.displaySelectTemporaryAmountOfDays) {
                this.displayRecommendOrOppose = true ;
            }
        } else if (e.target.value === 'no') {
            this.phase2.changeNotSuccessfullyTestedReason = undefined;
            this.phase2.changeSuccessfullyTested = 'no';
            this.displayChangeNotSuccessfullyTestedReason = true ;
            this.displaySpecialistComments = false ;
            this.displayRecommendOrOppose = false ;
        } else if (e.target.value === 'na') {
            this.phase2.changeSuccessfullyTested = 'na';
            this.displayChangeNotSuccessfullyTestedReason = false ;
            this.displaySpecialistComments = true ;
            this.phase2.changeNotSuccessfullyTestedReason = undefined ;
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
        this.phase2.recommend_oppose = $event.target.value;
        const submitButton = document.getElementById('submit');
        submitButton.classList.remove('disabled');
        this.activateSubmitButton = true;
    }


    onSubmit() {
        swal({
            title: 'Are you sure?',
            text: "You won't be able make changes to your submission",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f' ,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                this.phase2service.upload(this.formData).subscribe((data: Data) => {
                    if (data.success) {

                        this.phase2service.submitPhase2(this.phase2 , this.Token ).subscribe((data1: Data) => {
                            if (data1.success) {
                                swal({
                                    title: 'Received',
                                    text: 'Your files have been received',
                                    type: 'success',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            } else {
                                swal({
                                    title: 'Failed',
                                    text: data.message,
                                    type: 'error',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        });
                    } else {
                        swal({
                            title: 'Files not uploaded',
                            text: data.message,
                            type: 'error',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });


            } else if (
                result.dismiss === swal.DismissReason.cancel
            ) {
                swal({
                    title: 'Cancelled',
                    text: 'Your may continue to make changes',
                    type: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }




    ngOnInit() {
        this.phase2service.getCSRFToken().subscribe( (data: Data) => {
            this.Token = data.tokenValue ;
        });
        this.phase2service.getPageData().subscribe((data: Data) => {
            this.availablePriorities     = data[0];
            this.availableImpacts        = data[1];
            this.availablePeriods        = data[2];
            this.availableNatureOfChange = data[3];
            this.availableEosSystems     = data[4];

        });
        this.RFC.requestedChange = 'We need new laptops for engineering';
        this.RFC.description = 'The reason for this is some blah blah software that can only run on blah blah nonsens give me new ones. Newones forever been asldfnadsnfgjSDBNVL;Sndv;ljNF;Lhnl;gvnW;LFHoefhoUIHEFOJKnefHWEV         ERFG   wef  ew fwef    wef     wegf    wef     ';
        this.phase2.TCB_CRF_ID = 'Undefined' ;
    }

}
