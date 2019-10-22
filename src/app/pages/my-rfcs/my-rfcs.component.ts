// Created by Blaine Viljoen
import { Component, OnInit } from '@angular/core';
import {MyRfcsService} from '../../services/MyRfcs.service';
import {Data} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Ccrphase1ContentComponent} from '../current-rfcs/ccrphase1-content/ccrphase1-content.component';
import {Ccrphase2ContentComponent} from '../current-rfcs/ccrphase2-content/ccrphase2-content.component';
import { SpecialistCommentsComponent } from '../current-rfcs/specialist-comments/specialist-comments.component';
import {Ccrphase3ContentComponent} from '../current-rfcs/ccrphase3-content/ccrphase3-content.component';
import {ManagerCommentsComponent} from '../current-rfcs/manager-comments/manager-comments.component';

@Component({
  selector: 'app-my-rfcs',
  templateUrl: './my-rfcs.component.html',
  styleUrls: ['./my-rfcs.component.scss']
})

export class MyRFCSComponent implements OnInit {

  private myCCRs ;

  constructor(private myRfcsService: MyRfcsService , private modalService: NgbModal) { }

  private displayPhase2: boolean;
  private displayPhase3: boolean;

    viewCcrPhase1(phase1) {
        const modalRef = this.modalService.open(Ccrphase1ContentComponent , { centered: true });
        modalRef.componentInstance.phase1 = phase1;
    }

    viewCcrPhase2(phase2) {
        const modalRef = this.modalService.open(Ccrphase2ContentComponent , { centered: true , size: 'lg'});
        modalRef.componentInstance.phase2 = phase2;
    }
    viewCcrPhase3(phase3) {
        const modalRef = this.modalService.open(Ccrphase3ContentComponent , { centered: true , size: 'lg'});
        modalRef.componentInstance.CCRPhase3Data = phase3;
    }

    viewSpecialistResponses(specialistResponses) {
        const modalRef = this.modalService.open(SpecialistCommentsComponent, { centered: true , size: 'lg'});
        modalRef.componentInstance.specialistResponses = specialistResponses;
    }
    viewManagerResponses(managerResponses) {
        const modalRef = this.modalService.open(ManagerCommentsComponent, {centered: true, size: 'lg'});
        modalRef.componentInstance.managerResponses = managerResponses;
    }


  ngOnInit() {
    this.myRfcsService.getMyCCRs().subscribe( (data: Data) => {
          this.myCCRs = data;
          console.log(this.myCCRs);
        }
    );
  }
}
// Created by Blaine Viljoen
