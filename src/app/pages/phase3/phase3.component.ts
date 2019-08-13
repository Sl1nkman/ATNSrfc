import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {CCRPhase3} from '../../models/CCR-Phase3';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';

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
    abortRegress: undefined,
    impSuccessReason: undefined,
    alreadyRegressed: true,
    additionalDocs: false,
    itemsUpdated: false,
    evalSuccess: false,
    ccrConfirmation: false,
    evalFailure: undefined
  };

  constructor() {
    this.datepickerConfig = Object.assign({},
        {containerClass: 'theme-dark-blue'},
        { dateInputFormat: 'YYYY-MM-DD'} ,
        {showWeekNumbers: false},
        {minDate: new Date()});
  }

  onSelectTCBEval($event) {
      let startDate = $event[0];
      let endDate = $event[1];
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
      } else if (this.phase3.abortRegress.includes('Regress')) {
        this.phase3.abort = false;
        this.phase3.regress = true;
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
    } else {
      this.phase3.implementationSuccessful = false;
      this.displayImpSuccess = true;
      this.showImpChange = true;
      this.showEvalChange = false;
      this.phase3.itemsUpdated = false;
      this.phase3.additionalDocs = false;

    }
  }
  
  onSelectAdditionalDocs(e) {
      if (e.target.value === 'yes') {
          this.phase3.additionalDocs = true;
      } else {
          this.phase3.additionalDocs = false;
      }
  }

  onSelectAlreadyRegressed(e) {
      if (e.target.value === 'yes') {
          this.phase3.alreadyRegressed = true;
      } else {
          this.phase3.alreadyRegressed = false;
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
      } else {
          this.phase3.evalSuccess = false;
          this.showEvalChange = true;
      }
  }

  onSelectConfirm(e){
      if (e.target.value === 'Confirm') {
          this.phase3.ccrConfirmation = true;
      } else {
          this.phase3.ccrConfirmation = false;
      }
  }

  ngOnInit() {
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
