/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Component, Input , OnInit } from '@angular/core';
import {CCRPhase2} from '../../../models/CCR-Phase2';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Data} from '@angular/router';
import {Phase2Service} from '../../../services/phase2.service';
@Component({
  selector: 'app-ccrphase2-content',
  templateUrl: './ccrphase2-content.component.html',
  styleUrls: ['./ccrphase2-content.component.css']
})
export class Ccrphase2ContentComponent implements OnInit {

  public datepickerConfig: Partial<BsDatepickerConfig> ;
  public availableNumberOfTemporaryDays: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  public availablePriorities: String [] = ['EMERGENCY', 'Urgent', 'Safety', 'Improvement', 'Other'];
  public availablePeriods: String [] = ['Permanent', 'Temporary', 'Trial'];
  public availableImpacts: String [] = ['CLIENTS', 'OPERATIONS', 'TECHNICAL'];
  public availableNatureOfChange: String [] = ['National', 'Local', 'Regional'];
  public availableEosSystems: String [] = ['AFTN', 'AMHS', 'ANAIS', 'A-SMGCS', 'ATIS', 'AWOS', 'CAD', 'CAMU', 'DAID', 'DATIS', 'DIESEL BACKUP',
    'DITTEL', 'DME', 'FRS', 'FWD RELAY', 'ILS', 'IVSAT', 'MLAT', 'NDB', 'OTN', 'OTN', 'RADAR', 'SATELLITE', 'SMR', 'SQUIB', 'TERNS',
    'TITAN', 'TOPSKY', 'UPS', 'VCCS', 'VHF', 'VOR', 'VPN'];


  constructor(public activeModal: NgbActiveModal , private phase2service: Phase2Service) {
    this.datepickerConfig = Object.assign({},
        {containerClass: 'theme-dark-blue'},
        { dateInputFormat: 'YYYY-MM-DD'} ,
        {showWeekNumbers: false},
        {minDate: new Date()});
  }

  @Input() public phase2;
  public phase2Data: CCRPhase2 = {
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
  ngOnInit() {

    this.phase2service.getPageData().subscribe((data: Data) => {
      this.availablePriorities = data[0];
      this.availableImpacts = data[1];
      this.availablePeriods = data[2];
      this.availableNatureOfChange = data[3];
      this.availableEosSystems = data[4];

    });
    if (this.phase2) {
      this.phase2Data.CCR_ID = this.phase2.phase1_ID;
      this.phase2Data.TCB_CRF_ID = this.phase2.tcb_crf_ID;
      this.phase2Data.requestPriority = this.phase2.requestPriority_ID;
      this.phase2Data.predictedImpact = this.phase2.impactRisks_ID;
      this.phase2Data.changePeriod = this.phase2.changePeriod_ID;
      this.phase2Data.temporaryPeriodStartDate = this.phase2.temporaryStartDate;
      this.phase2Data.temporaryPeriodNumberOfDays = this.phase2.temporaryNoOfDays;
      this.phase2Data.temporaryPeriodEndDate = this.phase2.temporaryEndDate;
      this.phase2Data.natureOfChange = this.phase2.natureChange_ID;
      this.phase2Data.eosSystem = this.phase2.eos_ID;
      this.phase2Data.configurationItems = this.phase2.configurationDescr;
      if (this.phase2.changeTypeHW === '0') {
        this.phase2Data.change.hardware = false;
      } else {
        this.phase2Data.change.hardware = true;
      }
      if (this.phase2.changeTypeSW === '0') {
        this.phase2Data.change.software = false;
      } else {
        this.phase2Data.change.software = true;
      }
      if (this.phase2.changeTypeSW === '0') {
        this.phase2Data.change.firmware = false;
      } else {
        this.phase2Data.change.firmware = true;
      }
      if ( this.phase2.reportRaisedContractor === '1') {
        this.phase2Data.problemReportRaised = true;
      } else {
        this.phase2Data.problemReportRaised = false;
      }
      this.phase2Data.estimatedImpacts.operations = this.phase2.impactOnOperations;
      this.phase2Data.estimatedImpacts.clients = this.phase2.impactOnClients;
      this.phase2Data.estimatedImpacts.technical = this.phase2.impactOnTech;

      this.phase2Data.problemReportRef = this.phase2.contractor_report_ref;
      this.phase2Data.changeSuccessfullyTested = this.phase2.pre_testSucces;
      this.phase2Data.changeNotSuccessfullyTestedReason = this.phase2.reasonUnsuccesTest;
      this.phase2Data.specialistComment = this.phase2.specialist_comment;
      this.phase2Data.proposedImplementationDate = this.phase2.proposed_implementation_date;
    }
  }

}
