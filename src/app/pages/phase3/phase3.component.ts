// Created by Blaine Viljoen 28023374

import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {CCRPhase3} from '../../models/CCR-Phase3';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {Data} from '@angular/router';
import {Phase3Service} from '../../services/phase3.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-phase3',
  templateUrl: './phase3.component.html',
  styleUrls: ['./phase3.component.css']
})
export class Phase3Component implements OnInit {
  private  formData = new FormData();

  private localObj;

  datepickerConfig: Partial<BsDatepickerConfig> ;
  dateRangePicker: Date;
  displayImpSuccess: boolean;
  showImpChange: boolean;
  showEvalChange: boolean;
  showSched: boolean;
  disableSubmitButton: boolean;
  private files: NgxFileDropEntry[] [] = []  ;
  private filesForUpload = [];

  abortOrRegress: String[] = ['Abort', 'Regress'];

  phase3: CCRPhase3 = {
    schedRegressionDate: undefined,
    tcbEvalStart: undefined,
    tcbEvalEnd: undefined,
    implementorName: undefined,
    implementationSuccessful: true,
    abort: false,
    regress: false,
    abortRegressReason: undefined,
    abortRegress: undefined,
    alreadyRegressed: true,
    additionalDocs: false,
    itemsUpdated: false,
    evalSuccess: false,
    ccrConfirmation: false,
    evalFailure: undefined,
    documentIds: undefined,
    CSRF_token: undefined
  };

    user: String = '';
    Token = null ;

  constructor(private phase3Service: Phase3Service) {
    this.datepickerConfig = Object.assign({},
        {containerClass: 'theme-dark-blue'},
        { dateInputFormat: 'YYYY-MM-DD'} ,
        {showWeekNumbers: false},
        {minDate: new Date()});
  }

  removeFile(index) {
      this.filesForUpload.splice(index, 1);
  }

  onSelectTCBEval($event) {
      const startDate = $event[0];
      const endDate = $event[1];
      this.phase3.tcbEvalStart = startDate;
      this.phase3.tcbEvalEnd = endDate;
  }

  onSelectAbortRegress($event) {
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
      } else if (this.phase3.abortRegressReason !== undefined && this.phase3.alreadyRegressed) {
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
      }
  }

  schedRegressCheck() {
      if (this.phase3.schedRegressionDate !== undefined) {
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
      }
  }

  onSelectImplementationSuccessful(e) {
    if (e.target.value === 'yes') {
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
      if (e.target.value === 'yes') {
          this.phase3.additionalDocs = true;
      } else {
          this.phase3.additionalDocs = false;
          this.phase3.itemsUpdated = true;
      }
  }

  onSelectAlreadyRegressed(e) {
      if (e.target.value === 'yes') {
          this.phase3.alreadyRegressed = true;
          this.showSched = false;
      } else {
          this.phase3.alreadyRegressed = false;
          this.showSched = true;
      }

  }

  onSelectItemsUpdated(e) {
      if (e.target.value === 'yes') {
          this.phase3.itemsUpdated = true;
      }
  }

  onSelectEvalSuccess(e) {
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
          this.phase3Service.submitPhase3(this.phase3).subscribe( (data: Data) => {
              if (data.success) {
               console.log('we have post');
                  if (this.phase3.additionalDocs) {
                      this.populateForm();
                      this.phase3Service.upload(this.formData).subscribe((data1: Data) => {
                          if (data1.success) {
                              this.phase3.documentIds = data.generatedName;
                              console.log(this.phase3.documentIds);
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

  evalReasonCheck() {
      if (this.phase3.evalFailure !== undefined) {
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
      }
  }

  ngOnInit() {
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

// Created by Blaine Viljoen 28023374
