// Created by Blaine Viljoen
import { Component, OnInit } from '@angular/core';
import {CurrentCcrsService} from '../../services/current-ccrs.service';
import {Data} from '@angular/router';
import {Phase2Service} from '../../services/phase2.service';
import {Phase3Service} from '../../services/phase3.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ccrphase1ContentComponent } from './ccrphase1-content/ccrphase1-content.component';
import { Ccrphase2ContentComponent } from './ccrphase2-content/ccrphase2-content.component';

@Component({
  selector: 'app-current-rfcs',
  templateUrl: './current-rfcs.component.html',
  styleUrls: ['./current-rfcs.component.css'],
  styles: [`
    .modal-dialog{
      max-width: 100% !important;
      width: 100% !important;}
  `
  ]
})
export class CurrentRFCSComponent implements OnInit {
  private myCCRs ;

  constructor(private currentccrsService: CurrentCcrsService, private  phase2service: Phase2Service , private phase3service: Phase3Service , private modalService: NgbModal) { }
  private displayPhase2: boolean;
  private displayPhase3: boolean;

  configureCCR(ccr) {
    this.phase2service.setObj(null , ccr , null);
    this.displayPhase2 = true;
  }

  implementCCR(ccr) {
    this.phase3service.setphases(ccr);
    this.displayPhase3 = true;
  }

  viewCcrPhase1(phase1) {
    const modalRef = this.modalService.open(Ccrphase1ContentComponent , { centered: true });
    modalRef.componentInstance.phase1 = phase1;
  }
  viewCcrPhase2(phase2) {
    const modalRef = this.modalService.open(Ccrphase2ContentComponent , { centered: true , size: 'lg'});
    modalRef.componentInstance.phase2 = phase2;
  }
  ngOnInit() {
    this.currentccrsService.getMyCCRs().subscribe( (data: Data) => {
      this.myCCRs = data;
      console.log(this.myCCRs);
        }
    );
  }



}
