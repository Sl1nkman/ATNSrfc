// Created by Blaine Viljoen 28023374

import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {CCRPhase3} from '../../models/CCR-Phase3';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {Data, Router} from '@angular/router';
import {Phase3Service} from '../../services/phase3.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-phase3',
  templateUrl: './phase3.component.html',
  styleUrls: ['./phase3.component.css']
})
export class Phase3Component implements OnInit {
  private  formData = new FormData();

  datepickerConfig: Partial<BsDatepickerConfig> ;
  dateRangePicker: Date;
  displayImpSuccess: boolean;
  showImpChange: boolean;
  showEvalChange: boolean;
  showSched: boolean;
  disableSubmitButton: boolean;
  private files: NgxFileDropEntry[] [] = []  ;

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
    documentIds: undefined
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

  removeFile(index){
      this.files.splice(index, 1);
  }

  onSelectTCBEval($event) {
      const startDate = $event[0];
      const endDate = $event[1];
      console.log(startDate);
      console.log(endDate);
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

  abortRegressReasonCheck(){
      if(this.phase3.abortRegressReason !== undefined && this.phase3.abortRegress.includes('Abort')){
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
      } else if(this.phase3.abortRegressReason !== undefined && this.phase3.alreadyRegressed){
          const submitButton = document.getElementById('submit');
          submitButton.classList.remove('disabled');
          this.disableSubmitButton = true;
      }
  }

  schedRegressCheck(){
      if(this.phase3.schedRegressionDate !== undefined){
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
      }).then((result) => { if (result.value) {
          this.phase3Service.upload(this.formData).subscribe((data: Data) => {
              if (data.success) {
                  this.phase3.documentIds = data.generatedName;
                  this.phase3Service.submitPhase3(this.phase3).subscribe((data1: Data) => {
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

  evalReasonCheck(){
      if (this.phase3.evalFailure !== undefined){
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
          this.Token = data.tokenValue ;
      });
  }

    public fileOver(event) {
        console.log(event);
    }

    public fileLeave(event) {
        console.log(event);
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

}

// Created by Blaine Viljoen 28023374
