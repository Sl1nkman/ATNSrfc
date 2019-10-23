/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import {Component, Input, OnInit} from '@angular/core';
import {CCRPhase3} from '../../../models/CCR-Phase3';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxFileDropEntry} from 'ngx-file-drop';

@Component({
  selector: 'app-ccrphase3-content',
  templateUrl: './ccrphase3-content.component.html',
  styleUrls: ['./ccrphase3-content.component.css']
})
export class Ccrphase3ContentComponent implements OnInit {

  public showImpChange: boolean ;
  public showEvalChange: boolean;
  public showSched: boolean;
  private files: NgxFileDropEntry[] [] = []  ;
  public filesForUpload = [];

  public abortOrRegress: String[] = ['Abort', 'Regress'];
  public datepickerConfig: Partial<BsDatepickerConfig> ;
  constructor(public activeModal: NgbActiveModal ) {
    this.datepickerConfig = Object.assign({},
        {containerClass: 'theme-dark-blue'},
        { dateInputFormat: 'YYYY-MM-DD'} ,
        {showWeekNumbers: false},
        {minDate: new Date()});
  }

  @Input() CCRPhase3Data;
  public phase3: CCRPhase3 = {
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
    CSRF_token: undefined
  };
  ngOnInit() {
    this.phase3.schedRegressionDate = this.CCRPhase3Data.scheduled_regression_date ;
    this.phase3.abortRegress = this.CCRPhase3Data.aborted_regressed ;
    this.phase3.abortRegressReason = this.CCRPhase3Data.reason_if_abort_regressed ;
    if (this.CCRPhase3Data.implementation_successful === '1') {
      this.phase3.implementationSuccessful = true ;
      this.showImpChange = true;
    }
    if (this.CCRPhase3Data.evaluation_success === '1') {
      this.phase3.evalFailure = this.CCRPhase3Data.reason_implementation_unsuccesful ;
      this.showEvalChange = true ;
    }

    if (this.CCRPhase3Data.regression_scheduled === '1') {
      this.phase3.regress = true ;
      this.showSched = true;
    }
    if (this.CCRPhase3Data.evaluation_success === '1') {
      this.phase3.evalSuccess = true;
    } else {
      this.phase3.evalFailure = this.CCRPhase3Data.evaluation_failure_reason;
    }
    if (this.CCRPhase3Data.additional_docs === '1') {
      this.phase3.additionalDocs = true;
    } else {
      this.phase3.additionalDocs = false;
    }
    if (this.CCRPhase3Data.items_updated === '1') {
      this.phase3.itemsUpdated = true;
    } else {
      this.phase3.itemsUpdated = false;
    }
    if (this.CCRPhase3Data.close_out_confirmed === '1') {
      this.phase3.ccrConfirmation = true ;
    } else {
      this.phase3.ccrConfirmation = false ;
    }
    if (this.CCRPhase3Data.already_regressed === '1') {
      this.phase3.alreadyRegressed = true ;
    } else {
      this.phase3.alreadyRegressed = false ;
    }
    this.phase3.tcbEvalStart = this.CCRPhase3Data.start_tcb_evaluation_date;
    this.phase3.tcbEvalEnd = this.CCRPhase3Data.end_tcb_evaluation_date;


  }
}
