// Created by Blaine Viljoen 28023374 edited by Liam Mccabe 27455211

import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {CCRPhase3} from '../../models/CCR-Phase3';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {Data, Router} from '@angular/router';
import {Phase3Service} from '../../services/phase3.service';
import swal from 'sweetalert2';
import {CCRPhase2} from '../../models/CCR-Phase2';
import {Phase2Service} from '../../services/phase2.service';
import {toInteger} from '@ng-bootstrap/ng-bootstrap/util/util';
import {loadQueryList} from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-phase3',
  templateUrl: './phase3.component.html',
  styleUrls: ['./phase3.component.css']
})
export class Phase3Component implements OnInit {
  private  formData = new FormData();

  private localObj = null;
  private phase3ID = null;

  datepickerConfig: Partial<BsDatepickerConfig> ;
  displayImpSuccess: boolean;
  showImpChange: boolean;
  showTCBdatepicker: boolean;
  showEvalChange: boolean;
  showSched: boolean;
  disableSubmitButton: boolean;
  private files: NgxFileDropEntry[] [] = []  ;
  private filesForUpload = [];
  private numberOfDays: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ];
  private selectedNoDays: number;

    private availableNumberOfTemporaryDays: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    private availablePriorities: String [] = ['EMERGENCY', 'Urgent', 'Safety', 'Improvement', 'Other'];
    private availablePeriods: String [] = ['Permanent', 'Temporary', 'Trial'];
    private availableImpacts: String [] = ['CLIENTS', 'OPERATIONS', 'TECHNICAL'];
    private availableNatureOfChange: String [] = ['National', 'Local', 'Regional'];
    private availableEosSystems: String [] = ['AFTN', 'AMHS', 'ANAIS', 'A-SMGCS', 'ATIS', 'AWOS', 'CAD', 'CAMU', 'DAID', 'DATIS', 'DIESEL BACKUP',
        'DITTEL', 'DME', 'FRS', 'FWD RELAY', 'ILS', 'IVSAT', 'MLAT', 'NDB', 'OTN', 'OTN', 'RADAR', 'SATELLITE', 'SMR', 'SQUIB', 'TERNS',
        'TITAN', 'TOPSKY', 'UPS', 'VCCS', 'VHF', 'VOR', 'VPN'];


    abortOrRegress: String[] = ['Abort', 'Regress'];
    private phase2: CCRPhase2 = {
        CCR_ID: undefined,
        TCB_CRF_ID: undefined,
        requestPriority: undefined,
        predictedImpact: undefined,
        changePeriod: undefined,
        temporaryPeriodStartDate: undefined,
        temporaryPeriodNumberOfDays: undefined,
        temporaryPeriodEndDate: undefined,
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
        recommend_oppose: undefined,
        CSRF_token: undefined
    };

  phase3: CCRPhase3 = {
    CCR_ID: undefined,
    schedRegressionDate: undefined,
    tcbEvalStart: undefined,
    tcbEvalEnd: undefined,
    implementationSuccessful: undefined,
    abort: undefined,
    regress: undefined,
    abortRegressReason: undefined,
    abortRegress: undefined,
    alreadyRegressed: undefined,
    additionalDocs: undefined,
    itemsUpdated: undefined,
    evalSuccess: undefined,
    ccrConfirmation: undefined,
    evalFailure: undefined,
    documentIds: undefined,
    CSRF_token: undefined,
  };

    user: String = '';
    Token = null ;

  constructor(private phase3Service: Phase3Service, private phsae2service: Phase2Service , private router: Router) {
    this.datepickerConfig = Object.assign({},
        {containerClass: 'theme-dark-blue'},
        { dateInputFormat: 'YYYY-MM-DD'} ,
        {showWeekNumbers: false},
        {minDate: new Date()});
  }

  removeFile(index) {
      this.filesForUpload.splice(index, 1);
  }

    onSelectTCBNumberOfDays($event) {
      this.selectedNoDays = $event.target.value;
      localStorage.setItem('noDays', $event.target.value);
      this.showTCBdatepicker = true;
    }

  onSelectTCBEval($event) {
      const startDate = $event;
      const maxDate = new Date();
      maxDate.setDate($event.getDate() + parseInt( '' + this.selectedNoDays, 10));
      this.phase3.tcbEvalStart = startDate;
      localStorage.setItem('tcbEvalStart', this.phase3.tcbEvalStart.toString());
      this.phase3.tcbEvalEnd = maxDate;
      localStorage.setItem('tcbEvalEnd', this.phase3.tcbEvalEnd.toString());
  }

  onSelectAbortRegress($event) {
      localStorage.setItem('abortRegress', this.phase3.abortRegress);
    if (this.phase3.abortRegress !== undefined) {
      if (this.phase3.abortRegress.includes('Abort')) {
        this.phase3.abort = true;
        this.phase3.regress = false;
        this.phase3.abortRegressReason = undefined;
        this.phase3.alreadyRegressed = false;
        this.phase3.schedRegressionDate = undefined;
      } else if (this.phase3.abortRegress.includes('Regress')) {
        this.phase3.abort = false;
        this.phase3.regress = true;
        this.phase3.abortRegressReason = undefined;
      }
    }
  }

  abortRegressReasonCheck() {
      if (this.phase3.abortRegressReason !== undefined && this.phase3.abortRegress.includes('Abort')) {
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
          localStorage.setItem('abortRegressReason', this.phase3.abortRegressReason);
      } else if (this.phase3.abortRegressReason !== undefined && this.phase3.alreadyRegressed) {
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
          localStorage.setItem('abortRegressReason', this.phase3.abortRegressReason);
      }
  }

  schedRegressCheck() {
      if (this.phase3.schedRegressionDate !== undefined) {
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
          localStorage.setItem('schedRegressionDate', this.phase3.schedRegressionDate.toString());
      }
  }

  onSelectImplementationSuccessful(e) {
      localStorage.setItem('implementationSuccessful', e.target.value);
    if (e.target.value === 'yes') {
        localStorage.removeItem('abortRegress');
        localStorage.removeItem('abortRegressReason');
        localStorage.removeItem('schedRegressionDate');
        localStorage.removeItem('alreadyRegressed');
        localStorage.removeItem('schedRegressionDate');
        localStorage.removeItem('abortRegressReason');
      this.phase3.implementationSuccessful = true;
      this.displayImpSuccess = false;
      this.phase3.abort = false;
      this.phase3.regress = false;
      this.showImpChange = true;
      this.phase3.schedRegressionDate = undefined;
      this.phase3.abort = false;
      this.phase3.regress = false;
      this.phase3.abortRegressReason = undefined;
      this.phase3.abortRegress = undefined;
      this.phase3.alreadyRegressed = true;
    } else {
        localStorage.removeItem('additionalDocs');
        localStorage.removeItem('itemsUpdated');
        localStorage.removeItem('evalSuccess');
        localStorage.removeItem('confirm');
        localStorage.removeItem('evalFailure');
        localStorage.removeItem('noDays');
        localStorage.removeItem('tcbEvalStart');
        localStorage.removeItem('tcbEvalEnd');
        localStorage.removeItem('evalFailure');
      this.phase3.implementationSuccessful = false;
      this.displayImpSuccess = true;
      this.showImpChange = true;
      this.showEvalChange = false;
      this.phase3.itemsUpdated = false;
      this.phase3.additionalDocs = false;
      this.phase3.tcbEvalStart = undefined;
      this.phase3.tcbEvalEnd = undefined;
      this.phase3.additionalDocs = false;
      this.phase3.itemsUpdated = false;
      this.phase3.evalSuccess = false;
      this.phase3.ccrConfirmation = false;
      this.phase3.evalFailure = undefined;
      this.showEvalChange = false;
    }
  }
  
  onSelectAdditionalDocs(e) {
      localStorage.setItem('additionalDocs', e.target.value);
      if (e.target.value === 'yes') {
          this.phase3.additionalDocs = true;
      } else {
          this.phase3.additionalDocs = false;
          this.phase3.itemsUpdated = true;
      }
  }

  onSelectAlreadyRegressed(e) {
      localStorage.setItem('alreadyRegressed', e.target.value);
      if (e.target.value === 'yes') {
          this.phase3.alreadyRegressed = true;
          this.showSched = false;
      } else {
          this.phase3.alreadyRegressed = false;
          this.showSched = true;
      }

  }

  onSelectItemsUpdated(e) {
      localStorage.setItem('itemsUpdated', e.target.value);
      if (e.target.value === 'yes') {
          this.phase3.itemsUpdated = true;
      }
  }

  onSelectEvalSuccess(e) {
      localStorage.setItem('evalSuccess', e.target.value);
      if (e.target.value === 'yes') {
          this.phase3.evalSuccess = true;
          this.showEvalChange = true;
          this.phase3.evalFailure = undefined;
      } else {
          this.phase3.evalSuccess = false;
          this.showEvalChange = true;
          this.phase3.ccrConfirmation = false;
      }
  }

  onSelectConfirm(e) {
      localStorage.setItem('confirm', e.target.value);
      if (e.target.value === 'Confirm') {
          this.phase3.ccrConfirmation = true;
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
      } else {
          this.phase3.ccrConfirmation = false;
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
      }
  }
    public onCancel() {
        swal({
            title: 'Are you sure?',
            text: 'You will lose all progress on this form',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#5bc0de',
            cancelButtonColor: '#d9534f' ,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                localStorage.clear();
                this.router.navigate(['home']);
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

  onSubmit() {
      swal({
          title: 'Are you sure?',
          text: 'You won\'t be able make changes to your submission',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Submit',
          cancelButtonText: 'Cancel',
          confirmButtonColor: '#5bc0de',
          cancelButtonColor: '#d9534f' ,
          reverseButtons: true
      }).then((result) => { if (result.value) {
          if (this.localObj !== null) {
              this.phase3Service.updatePhase3(this.phase3, this.localObj.ID).subscribe((data: Data) => {
                  if (data.success) {
                      if (this.phase3.additionalDocs) {
                          this.populateForm();
                          this.formData.append('passedID', this.localObj.ID);
                          this.phase3Service.upload(this.formData).subscribe((data1: Data) => {
                              if (data1.success) {
                                  this.phase3.documentIds = data.generatedName;
                                  swal({
                                      title: 'Updated',
                                      text: 'Phase 3 successfully updated',
                                      type: 'success',
                                      showConfirmButton: false,
                                      timer: 1500
                                  });
                                  localStorage.clear();
                              } else {
                                  swal({
                                      title: 'Failure',
                                      text: data.message,
                                      type: 'error',
                                      showConfirmButton: false,
                                      timer: 1500
                                  });
                              }
                          });
                      }
                  }
              }  , error => {
                  console.log(error);
              });
          } else {
              this.phase3Service.submitPhase3(this.phase3).subscribe( (data: Data) => {
                  if (data.success) {
                      if (this.phase3.additionalDocs) {
                          this.populateForm();
                          this.formData.append('ID', this.phase2.CCR_ID);
                          this.phase3Service.upload(this.formData).subscribe((data1: Data) => {
                              if (data1.success) {
                                  this.phase3.documentIds = data.generatedName;
                                  swal({
                                      title: 'Submitted',
                                      text: data1.message,
                                      type: 'success',
                                      showConfirmButton: false,
                                      timer: 1500
                                  });
                                  localStorage.clear();
                                  this.router.navigate(['home']);
                              } else {
                                  swal({
                                      title: 'Failure',
                                      text: data1.message,
                                      type: 'error',
                                      showConfirmButton: false,
                                      timer: 1500
                                  });
                              }
                          });
                      } else {
                          swal('Success' , data.message , 'success' );
                          localStorage.clear();
                          this.router.navigate(['home']);
                      }
                  } else {
                      swal({
                          title: 'Failure',
                          text: data.message,
                          type: 'error',
                          showConfirmButton: false,
                          timer: 1500
                      });
                  }
              } , error => {
                  console.log(error);
              }) ;
          }

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

  evalReasonCheck() {
      if (this.phase3.evalFailure !== undefined) {
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
          localStorage.setItem('evalFailure', this.phase3.evalFailure);
      }
  }

  ngOnInit() {
      this.phsae2service.getPageData().subscribe((data: Data) => {
          this.availablePriorities = data[0];
          this.availableImpacts = data[1];
          this.availablePeriods = data[2];
          this.availableNatureOfChange = data[3];
          this.availableEosSystems = data[4];

      });

      if (this.phase3Service.phaseData !== null) {
          this.phase2.CCR_ID                            = this.phase3Service.phaseData[1][0].phase1_ID ;
          this.phase2.TCB_CRF_ID                        = this.phase3Service.phaseData[1][0].tcb_crf_ID;
          this.phase2.requestPriority                   = this.phase3Service.phaseData[1][0].requestPriority_ID;
          this.phase2.predictedImpact                   = this.phase3Service.phaseData[1][0].impactRisks_ID;
          this.phase2.changePeriod                      = this.phase3Service.phaseData[1][0].changePeriod_ID;
          this.phase2.temporaryPeriodStartDate          = this.phase3Service.phaseData[1][0].temporaryStartDate;
          this.phase2.temporaryPeriodNumberOfDays       = this.phase3Service.phaseData[1][0].temporaryNoOfDays;
          this.phase2.temporaryPeriodEndDate            = this.phase3Service.phaseData[1][0].temporaryEndDate;
          this.phase2.natureOfChange                    = this.phase3Service.phaseData[1][0].natureChange_ID;
          this.phase2.eosSystem                         = this.phase3Service.phaseData[1][0].eos_ID;
          this.phase2.configurationItems                = this.phase3Service.phaseData[1][0].configurationDescr;
          if (this.phase3Service.phaseData[1][0].changeTypeHW === '0') {
              this.phase2.change.hardware                   = false;
          } else {
              this.phase2.change.hardware                   = true ;
          }
          if (this.phase3Service.phaseData[1][0].changeTypeSW === '0') {
              this.phase2.change.software                   = false;
          } else {
              this.phase2.change.software                   = true ;
          }
          if (this.phase3Service.phaseData[1][0].changeTypeSW === '0') {
              this.phase2.change.firmware                   = false;
          } else {
              this.phase2.change.firmware                   = true ;
          }
          this.phase2.estimatedImpacts.operations       = this.phase3Service.phaseData[1][0].impactOnOperations;
          this.phase2.estimatedImpacts.clients          = this.phase3Service.phaseData[1][0].impactOnClients;
          this.phase2.estimatedImpacts.technical        = this.phase3Service.phaseData[1][0].impactOnTech;
          this.phase2.problemReportRaised               = this.phase3Service.phaseData[1][0].reportRaisedContractor;
          this.phase2.problemReportRef                  = this.phase3Service.phaseData[1][0].contractor_report_ref;
          this.phase2.changeSuccessfullyTested          = this.phase3Service.phaseData[1][0].pre_testSucces ;
          this.phase2.changeNotSuccessfullyTestedReason = this.phase3Service.phaseData[1][0].reasonUnsuccesTest;
          this.phase2.specialistComment                 = this.phase3Service.phaseData[1][0].specialist_comment;
          this.phase2.proposedImplementationDate        = this.phase3Service.phaseData[1][0].proposed_implementation_date;
          this.phase3.CCR_ID                            = this.phase3Service.phaseData[1][0].ID;
      }

      this.disableSubmitButton = false;
      const submitButton = document.getElementById('submit');
      submitButton.classList.add('disabled');

      this.Token = this.phase3Service.getCSRFToken().subscribe( (data: Data) => {
          this.phase3.CSRF_token = data.tokenValue ;
      });


      this.localObj = this.phase3Service.getObj();
      if (this.localObj !== null) {
          this.disableSubmitButton = true;
          submitButton.classList.remove('disabled');
          document.getElementById('cancel').classList.add('invisible');

          // tslint:disable-next-line:radix
          this.phase3ID = parseInt(this.localObj.ID);

          if (this.localObj.implementation_successful === '1') {
              this.phase3.implementationSuccessful = true;
          } else {
              this.phase3.implementationSuccessful = false;
          }
          if (this.phase3.implementationSuccessful) {
              this.displayImpSuccess = false;
              this.phase3.abort = false;
              this.phase3.regress = false;
              this.showImpChange = true;
              this.phase3.schedRegressionDate = undefined;
              this.phase3.abort = false;
              this.phase3.regress = false;
              this.phase3.abortRegressReason = undefined;
              this.phase3.abortRegress = undefined;
              this.phase3.alreadyRegressed = true;
              this.showTCBdatepicker = true;
          } else {
              this.displayImpSuccess = true;
              this.showImpChange = true;
              this.showEvalChange = false;
              this.phase3.itemsUpdated = false;
              this.phase3.additionalDocs = false;
              this.phase3.tcbEvalStart = undefined;
              this.phase3.tcbEvalEnd = undefined;
              this.phase3.additionalDocs = false;
              this.phase3.itemsUpdated = false;
              this.phase3.evalSuccess = false;
              this.phase3.ccrConfirmation = false;
              this.phase3.evalFailure = undefined;
              this.showEvalChange = false;
          }
          if (this.localObj.aborted_regressed !== '') {
              this.phase3.abortRegress = this.localObj.aborted_regressed;
              if (this.phase3.abortRegress !== undefined) {
                  if (this.phase3.abortRegress.includes('Abort')) {
                      this.phase3.abort = true;
                      this.phase3.regress = false;
                      this.phase3.abortRegressReason = undefined;
                      this.phase3.alreadyRegressed = false;
                      this.phase3.schedRegressionDate = undefined;
                  } else if (this.phase3.abortRegress.includes('Regress')) {
                      this.phase3.abort = false;
                      this.phase3.regress = true;
                      this.phase3.abortRegressReason = undefined;

                      if (this.localObj.already_regressed === '1') {
                          this.phase3.alreadyRegressed = true;
                          this.showSched = false;
                      } else {
                          this.phase3.alreadyRegressed = false;
                          this.showSched = true;
                          this.phase3.schedRegressionDate = this.localObj.scheduled_regression_date;
                      }
                  }
              }
              this.phase3.abortRegressReason = this.localObj.reason_if_abort_regressed;
          }
          if (this.localObj.aborted_regressed === '') {
              this.phase3.tcbEvalStart = this.localObj.start_tcb_evaluation_date;
              this.phase3.tcbEvalEnd = this.localObj.end_tcb_evaluation_date;
              if (this.localObj.items_updated === '1') {
                  this.phase3.itemsUpdated = true;
              }
              if (this.localObj.evaluation_success === '1') {
                  this.phase3.evalSuccess = true;
                  this.showEvalChange = true;
                  this.phase3.evalFailure = undefined;
                  if (this.localObj.close_out_confirmed === '1') {
                      this.phase3.ccrConfirmation = true;
                  } else {
                      this.phase3.ccrConfirmation = false;
                  }
              } else {
                  this.phase3.evalSuccess = false;
                  this.showEvalChange = true;
                  this.phase3.ccrConfirmation = false;
                  this.phase3.evalFailure = this.localObj.evaluation_failure_reason;
              }
          }
      } else {
          const event = {target: {value: null}};
          if (localStorage.getItem('implementationSuccessful') !== null) {
              event.target.value = localStorage.getItem('implementationSuccessful');
              this.onSelectImplementationSuccessful(event);
          }
          if (localStorage.getItem('abortRegress') !== null) {
              this.phase3.abortRegress = localStorage.getItem('abortRegress');
              this.onSelectAbortRegress(null);
              this.phase3.abortRegressReason = localStorage.getItem('abortRegressReason');
          }
          if (localStorage.getItem('alreadyRegressed') !== null) {
              event.target.value = localStorage.getItem('alreadyRegressed');
              this.onSelectAlreadyRegressed(event);
              if (!this.phase3.alreadyRegressed) {
                  this.phase3.schedRegressionDate = new Date(localStorage.getItem('schedRegressionDate'));
              }
          }
          if (localStorage.getItem('noDays') !== null) {
              event.target.value = localStorage.getItem('noDays');
              this.onSelectTCBNumberOfDays(event);
              this.phase3.tcbEvalStart = new Date(localStorage.getItem('tcbEvalStart'));
              this.phase3.tcbEvalEnd = new Date(localStorage.getItem('tcbEvalEnd'));
          }
          if (localStorage.getItem('additionalDocs') !== null) {
              event.target.value = localStorage.getItem('additionalDocs');
              this.onSelectAdditionalDocs(event);
          }
          if (localStorage.getItem('itemsUpdated') !== null) {
              event.target.value = localStorage.getItem('itemsUpdated');
              this.onSelectItemsUpdated(event);
          }
          if (localStorage.getItem('evalSuccess') !== null) {
              event.target.value = localStorage.getItem('evalSuccess');
              this.onSelectEvalSuccess(event);
              if (!this.phase3.evalSuccess) {
                  this.phase3.evalFailure = localStorage.getItem('evalFailure');
              }
          }
          if (localStorage.getItem('confirm') !== null) {
              event.target.value = localStorage.getItem('confirm');
              this.onSelectConfirm(event);
          }
      }
  }

    public fileOver(event) {
    }

    public fileLeave(event) {
    }

    public dropped(files: NgxFileDropEntry[]) {
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

    private populateForm() {
      for (let i = 0; i < this.filesForUpload.length; i++) {
          this.formData.append('file[]', this.filesForUpload[i], this.filesForUpload[i].name);
      }
    }

}

// Created by Blaine Viljoen 28023374 and edited by Liam Mccabe 27455211
