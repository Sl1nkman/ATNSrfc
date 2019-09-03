// Created by Blaine Viljoen 28023374

import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {CCRPhase3} from '../../models/CCR-Phase3';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {Data, Router} from '@angular/router';
import {OAuth} from '../../models/OAuth';
import {OathService} from '../../services/oath.service';

@Component({
  selector: 'app-phase3',
  templateUrl: './phase3.component.html',
  styleUrls: ['./phase3.component.css']
})
export class Phase3Component implements OnInit {

  datepickerConfig: Partial<BsDatepickerConfig> ;
  dateRangePicker: Date;
  displayImpSuccess: boolean;
  showImpChange: boolean;
  showEvalChange: boolean;
  showSched: boolean;
  activateSubmitButton: boolean ;
  public files: NgxFileDropEntry[] [] = []  ;

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
    impSuccessReason: undefined,
    alreadyRegressed: true,
    additionalDocs: false,
    itemsUpdated: false,
    evalSuccess: false,
    ccrConfirmation: false,
    evalFailure: undefined
  };

    user: String = '';
    pass: String = '';
    OAuth: OAuth = {
        username: undefined,
        password: undefined
    };
    Token = null ;

  constructor(private OAuthService: OathService ,
              private router: Router) {
    this.datepickerConfig = Object.assign({},
        {containerClass: 'theme-dark-blue'},
        { dateInputFormat: 'YYYY-MM-DD'} ,
        {showWeekNumbers: false},
        {minDate: new Date()});
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
    if (this.phase3.abortRegressReason !== undefined) {
      if (this.phase3.abortRegressReason.includes('Abort')) {
        this.phase3.abort = true;
        this.phase3.regress = false;
        this.activateSubmitButton = true;
        this.phase3.abortRegressReason = undefined;
        this.phase3.alreadyRegressed = false;
        this.phase3.schedRegressionDate = undefined;
      } else if (this.phase3.abortRegressReason.includes('Regress')) {
        this.phase3.abort = false;
        this.phase3.regress = true;
        this.activateSubmitButton = false;
        this.phase3.abortRegressReason = undefined;
      }
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
      this.phase3.impSuccessReason = undefined;
      this.phase3.alreadyRegressed = true;
      this.activateSubmitButton = false;
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
      this.activateSubmitButton = false;
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
          this.activateSubmitButton = true;
          this.showSched = false;
      } else {
          this.phase3.alreadyRegressed = false;
          this.activateSubmitButton = true;
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
          this.activateSubmitButton = false;
      } else {
          this.phase3.evalSuccess = false;
          this.showEvalChange = true;
          this.phase3.ccrConfirmation = false;
          this.activateSubmitButton = true;
      }
  }

  onSelectConfirm(e) {
      if (e.target.value === 'Confirm') {
          this.phase3.ccrConfirmation = true;
          this.activateSubmitButton = true;
      } else {
          this.phase3.ccrConfirmation = false;
          this.activateSubmitButton = true;
      }
  }
  onSubmit() {
        console.log(JSON.stringify(this.phase3));

    }

  ngOnInit() {
      this.Token = this.OAuthService.getCSRFToken().subscribe( (data: Data) => {
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
        // this.displayEstimatedImpact = true;
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

}

// Created by Blaine Viljoen 28023374
