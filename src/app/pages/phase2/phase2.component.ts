/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Component, OnInit } from '@angular/core';
import {CCRPhase2} from '../../models/CCR-Phase2';
import {RFC} from '../../models/RFC';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import swal from 'sweetalert2';
import {Data} from '@angular/router';
import {Phase2Service} from '../../services/phase2.service';


@Component({
    selector: 'app-phase2',
    templateUrl: './phase2.component.html',
    styleUrls: ['./phase2.component.css']
})
export class Phase2Component implements OnInit {

    private localObj;
    private  formData = new FormData();
    private datepickerConfig: Partial<BsDatepickerConfig> ;
    private files: NgxFileDropEntry[] [] = []  ;
    private filesForUpload = [];
    private user = undefined;


    private availableNumberOfTemporaryDays: String [] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
        '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    private availablePriorities: String [] = ['EMERGENCY', 'Urgent', 'Safety', 'Improvement', 'Other'];
    private availablePeriods: String [] = ['Permanent', 'Temporary', 'Trial'];
    private availableImpacts: String [] = ['CLIENTS', 'OPERATIONS', 'TECHNICAL'];
    private availableNatureOfChange: String [] = ['National', 'Local', 'Regional'];
    private availableEosSystems: String [] = ['AFTN', 'AMHS', 'ANAIS', 'A-SMGCS', 'ATIS', 'AWOS', 'CAD', 'CAMU', 'DAID', 'DATIS', 'DIESEL BACKUP',
        'DITTEL', 'DME', 'FRS', 'FWD RELAY', 'ILS', 'IVSAT', 'MLAT', 'NDB', 'OTN', 'OTN', 'RADAR', 'SATELLITE', 'SMR', 'SQUIB', 'TERNS',
        'TITAN', 'TOPSKY', 'UPS', 'VCCS', 'VHF', 'VOR', 'VPN'];

    // Form display boolean values
    private emergencySelected: boolean;
    private displayPredictedRisks: boolean;
    private displayChangePeriod: boolean;
    private displayNatureOfChange: boolean;
    private displayEOSystem: boolean;
    private displayTCB_CRF_ID: boolean;
    private displayConfigurationItems: boolean;
    private displayChangeType: boolean;
    private displaySelectTemporaryAmountOfDays: boolean ;
    private displayTemporaryDateSelection: boolean;
    private displayAdditionalAttachedDocuments: boolean ;
    private displayEstimatedImpact: boolean ;
    private displayEstimatedImpactOps: boolean;
    private displayEstimatedImpactClients: boolean;
    private displayEstimatedImpactTech: boolean;
    private displayProblemReportRaised: boolean ;
    private displayChangePreTested: boolean ;
    private displayChangeNotSuccessfullyTestedReason: boolean ;
    private displaySpecialistComments: boolean ;
    private displayProposedImplementationDate: boolean ;
    private displayRecommendOrOppose: boolean ;
    private activateSubmitButton: boolean ;

    private RFC: RFC = {
        dateRequested: undefined,
        requestDescription: undefined,
        reasonForRequest: undefined,
        CSRF_token: undefined ,
        site_ID: undefined
    };
    private phase2: CCRPhase2 = {
        TCB_CRF_ID: undefined,
        requestPriority: undefined,
        predictedImpact: undefined ,
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
        documentIds: undefined,
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
        recommend_oppose: undefined ,
        CSRF_token: undefined
    };

    constructor(private phase2service: Phase2Service ) {
        const minDate = new Date();

        this.datepickerConfig = Object.assign({},
            {containerClass: 'theme-dark-blue' },
            { dateInputFormat: 'YYYY-MM-DD' } ,
            { showWeekNumbers: false },
            { minDate: minDate });
    }



    public onSelectPriority($event) {
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

    public onSelectChangePeriod($event) {
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
    public onSelectNumberOfTemporaryDays($event) {
        this.phase2.temporaryPeriodNumberOfDays = $event.target.value ;
        this.displayTemporaryDateSelection = true ;
    }
    public onSelectTemporaryStartDate($event) {
        const maxDate = new Date() ;
        maxDate.setDate($event.getDate() + parseInt('' + this.phase2.temporaryPeriodNumberOfDays, 10));
        this.phase2.temporaryPeriodEndDate = maxDate;
        this.displayNatureOfChange = true ;

    }
    public onSelectImpact($event) {
        this.phase2.predictedImpact = $event.target.value;
        if (this.phase2.predictedImpact !== undefined) {
            this.displayChangePeriod = true;
            console.log(this.phase2.predictedImpact);
            switch (this.phase2.predictedImpact) {
                case '1':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = true;
                    this.displayEstimatedImpactTech = false;
                    this.displayEstimatedImpactOps = false;
                    this.phase2.estimatedImpacts.technical = undefined;
                    this.phase2.estimatedImpacts.operations = undefined;
                    break;
                case '2':
                    this.displayProblemReportRaised = true;
                    this.displayEstimatedImpactClients = false;
                    this.displayEstimatedImpactTech = false;
                    this.displayEstimatedImpactOps = false;
                    this.phase2.estimatedImpacts.clients = undefined;
                    this.phase2.estimatedImpacts.technical = undefined;
                    this.phase2.estimatedImpacts.operations = undefined;
                    break;
                case '3':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = false;
                    this.displayEstimatedImpactTech = false;
                    this.displayEstimatedImpactOps = true;
                    this.phase2.estimatedImpacts.clients = undefined;
                    this.phase2.estimatedImpacts.technical = undefined;
                    break;
                case '4':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = true;
                    this.displayEstimatedImpactTech = false;
                    this.displayEstimatedImpactOps = true;
                    this.phase2.estimatedImpacts.technical = undefined;
                    break;
                case '5':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = false;
                    this.displayEstimatedImpactTech = true;
                    this.displayEstimatedImpactOps = true;
                    this.phase2.estimatedImpacts.clients = undefined;
                    break;
                case '6':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = true;
                    this.displayEstimatedImpactTech = true;
                    this.displayEstimatedImpactOps = true;
                    break;
                case '7':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = true;
                    this.displayEstimatedImpactTech = true;
                    this.displayEstimatedImpactOps = false;
                    this.phase2.estimatedImpacts.operations = undefined;
                    break;
                case '8':
                    this.displayProblemReportRaised = false;
                    this.displayEstimatedImpactClients = false;
                    this.displayEstimatedImpactTech = true;
                    this.displayEstimatedImpactOps = false;
                    this.phase2.estimatedImpacts.clients = undefined;
                    this.phase2.estimatedImpacts.operations = undefined;
                    break;
            }

        } else {
            this.displayChangePeriod = false;
        }


    }
    public onSelectNatureOfChange($event) {

        if (this.phase2.natureOfChange !== undefined ) {
            this.displayEOSystem = true ;
        } else {
            this.displayEOSystem = false ;
        }
    }

    public onSelectEosSystem($event) {
        this.phase2.eosSystem = $event.target.value;
        this.phase2.TCB_CRF_ID = $event.target.value + '0001'; // database reference to eos tcb number + 1
        this.displayTCB_CRF_ID = true ;
        this.displayConfigurationItems = true;
    }

    public onSelectChangeTypeHW(e) {

        if (e.target.checked) {
            this.phase2.change.hardware = true;
        } else {
            this.phase2.change.hardware = false ;
        }
        if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware ) {
            this.displayAdditionalAttachedDocuments = true ;
        } else { this.displayAdditionalAttachedDocuments = false ; }
    }

    public onSelectChangeTypeSW(e) {
        if (e.target.checked) {
            this.phase2.change.software = true;
        } else {
            this.phase2.change.software = false ;
        }
        if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware ) {
            this.displayAdditionalAttachedDocuments = true ;
        } else { this.displayAdditionalAttachedDocuments = false ; }
    }

    public onSelectChangeTypeFW(e) {
        if (e.target.checked) {
            this.phase2.change.firmware = true;
        } else {
            this.phase2.change.firmware = false ;
        }
        if (this.phase2.change.firmware || this.phase2.change.software || this.phase2.change.hardware ) {
            this.displayAdditionalAttachedDocuments = true ;
        } else { this.displayAdditionalAttachedDocuments = false ; }
    }
    public onSelectAdditionalDocuments(e) {
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
                    this.filesForUpload.push(file);
                });
            } else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
            }
        }
    }
    public fileOver(event) {
    }

    private populateForm() {
        for (let i = 0; i < this.filesForUpload.length; i++) {
            this.formData.append('file[]', this.filesForUpload[i], this.filesForUpload[i].name);
        }
    }

    removeFile(index) {
        this.filesForUpload.splice(index, 1);
    }

    public fileLeave(event) {
    }
    // first file uploader end
    public estimatedImpact($event) {
        if ( this.phase2.estimatedImpacts.technical !== undefined   ||
            this.phase2.estimatedImpacts.clients !== undefined   ||
            this.phase2.estimatedImpacts.operations !== undefined  ) {
             this.displayProblemReportRaised = true ;
        } else {
            this.displayProblemReportRaised = false ; }
    }
    public onSelectReportRaised(e) {
        if (e.target.value === 'yes') {
            this.displayChangePreTested = false ;
            this.phase2.problemReportRaised = true;
        } else if (e.target.value === 'no') {
            this.displayChangePreTested = true ;
            this.phase2.problemReportRef = undefined;
            this.phase2.problemReportRaised = false;
        }
    }
    public onInputProblemReportRef() {
        this.displayChangePreTested = true;
    }

    public onSelectPreTested(e) {
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
    public onUnsuccessfulTestReason() {
        this.displaySpecialistComments = true ;
        if (this.displaySelectTemporaryAmountOfDays) {
            this.displayRecommendOrOppose = true ;
        }
    }

    public onInputSpecialistComment() {
        this.displayProposedImplementationDate = true ;
    }

    public onSelectProposedImplementationDate() {
        this.displayRecommendOrOppose = true ;
    }
    public onSelectRecommendOrOppose($event) {
        this.phase2.recommend_oppose = $event.target.value;
        const submitButton = document.getElementById('submit');
        submitButton.classList.remove('disabled');
        this.activateSubmitButton = true;
    }

    public onCancel() {
        swal({
            title: 'Are you sure?',
            text: "You will lose all progress on this form",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f' ,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {

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

    public onSubmit() {
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
                    this.phase2service.submitPhase2(this.phase2).subscribe((data1: Data) => {
                        if (data1.success) {
                            if (this.phase2.additionalDocuments === true) {
                                this.populateForm();
                                this.phase2service.upload(this.formData).subscribe((data: Data) => {
                                    if (data.success) {
                                        this.phase2.documentIds = data.generatedName;
                                        swal({
                                            title: 'Received',
                                            text: 'Your files have been received',
                                            type: 'success',
                                            showConfirmButton: false,
                                            timer: 1500
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
                            }

                        } else {
                            swal({
                                title: 'Failed',
                                text: data1.message,
                                type: 'error',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        this.phase2service.submitPhase2(this.phase2).subscribe((data1: Data) => {
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
            this.phase2.CSRF_token = data.tokenValue ;
        });
        this.phase2service.getPageData().subscribe((data: Data) => {
            this.availablePriorities     = data[0];
            this.availableImpacts        = data[1];
            this.availablePeriods        = data[2];
            this.availableNatureOfChange = data[3];
            this.availableEosSystems     = data[4];

        });
        this.RFC.requestDescription = 'We need new laptops for engineering';
        this.RFC.reasonForRequest = 'The reason for this is some blah blah software that can only run on blah blah nonsens give me new ones. Newones forever been asldfnadsnfgjSDBNVL;Sndv;ljNF;Lhnl;gvnW;LFHoefhoUIHEFOJKnefHWEV         ERFG   wef  ew fwef    wef     wegf    wef     ';
        this.phase2.TCB_CRF_ID = 'Undefined' ;

        this.localObj = this.phase2service.getObj();
        if (this.localObj !== null) {
            let phase1 = this.phase2service.getPhase1();
            this.RFC.requestedChange = phase1.requested_change;
            this.RFC.description = phase1.description;
            this.phase2.TCB_CRF_ID = this.localObj.tcb_crf_id;
            this.RFC.dateRequested = phase1.start_time;
            this.user = this.phase2service.getUser();

            this.phase2.requestPriority = this.localObj.requestPriority_ID;
            if(this.phase2.requestPriority === '1'){
                document.getElementById('priority').classList.add('text-danger');
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
            } else if (document.getElementById('priority').classList.contains('text-danger') && this.phase2.requestPriority !== 'Emergency') {
                this.displayPredictedRisks = true;
                this.displaySpecialistComments = false ;
                this.emergencySelected = false;
                document.getElementById('priority').classList.remove('text-danger');
            } else {
                this.displayPredictedRisks = true;
                this.displaySpecialistComments = false ;
                this.emergencySelected = false;
            }

            if(this.localObj.impactOnClients !== null){
                this.displayChangePeriod = true;
                this.displayEstimatedImpactClients = true;
                this.phase2.predictedImpact.push('CLIENTS');
            } else {
                this.displayEstimatedImpactClients = false;
            }
            if(this.localObj.impactOnOperations !== null){
                this.displayChangePeriod = true;
                this.displayEstimatedImpactOps = true;
                this.phase2.predictedImpact.push('OPERATIONS');
            } else {
                this.displayEstimatedImpactOps = false;
            }
            if(this.localObj.impactonTech !== null){
                this.displayChangePeriod = true;
                this.displayEstimatedImpactTech = true;
                this.phase2.predictedImpact.push('TECHNICAL');
            } else {
                this.displayEstimatedImpactTech = false;
            }

            this.phase2.changePeriod = this.localObj.changePeriod_ID;
            switch (this.phase2.changePeriod) {
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

            if(this.localObj.temporaryStartDate !== null && this.localObj.temporaryEndDate !== null){
                this.phase2.temporaryPeriodStartDate = this.localObj.temporaryStartDate;
                this.phase2.temporaryPeriodEndDate = this.localObj.temporaryEndDate;
                this.displayNatureOfChange = true;
            }

            this.phase2.natureOfChange = this.localObj.natureChange_ID;
            if (this.phase2.natureOfChange !== undefined ) {
                this.displayEOSystem = true ;
            } else {
                this.displayEOSystem = false ;
            }

            this.phase2.eosSystem = this.localObj.eos_ID;
            this.phase2.TCB_CRF_ID = this.localObj.tcb_crf_ID;
            this.displayTCB_CRF_ID = true ;
            this.displayConfigurationItems = true;

            this.activateSubmitButton = true;
            const submitButton = document.getElementById('submit');
            submitButton.classList.remove('disabled');
            document.getElementById('cancel').classList.add('invisible');
        }
    }

}
