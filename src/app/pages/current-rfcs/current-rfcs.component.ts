// Created by Blaine Viljoen
import {Component, OnInit} from '@angular/core';
import {CurrentCcrsService} from '../../services/current-ccrs.service';
import {Data} from '@angular/router';
import {Phase2Service} from '../../services/phase2.service';
import {Phase3Service} from '../../services/phase3.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Ccrphase1ContentComponent} from './ccrphase1-content/ccrphase1-content.component';
import {Ccrphase2ContentComponent} from './ccrphase2-content/ccrphase2-content.component';
import {Ccrphase3ContentComponent} from './ccrphase3-content/ccrphase3-content.component';
import {SpecialistCommentsComponent} from './specialist-comments/specialist-comments.component';
import {ManagerCommentsComponent} from './manager-comments/manager-comments.component';

@Component({
    selector: 'app-current-rfcs',
    templateUrl: './current-rfcs.component.html',
    styleUrls: ['./current-rfcs.component.css'],
})
export class CurrentRFCSComponent implements OnInit {
    private myCCRs;

    constructor(private currentccrsService: CurrentCcrsService, private  phase2service: Phase2Service, private phase3service: Phase3Service, private modalService: NgbModal) {
    }

    public displayPhase2: boolean;
    public displayPhase3: boolean;

    configureCCR(ccr) {
        this.phase2service.setObj(null, ccr, null);
        this.displayPhase2 = true;
    }

    implementCCR(ccr) {
        this.phase3service.setphases(ccr);
        this.displayPhase3 = true;
    }

    viewCcrPhase1(phase1) {
        const modalRef = this.modalService.open(Ccrphase1ContentComponent, {centered: true});
        modalRef.componentInstance.phase1 = phase1;
    }

    viewCcrPhase2(phase2) {
        const modalRef = this.modalService.open(Ccrphase2ContentComponent, {centered: true, size: 'lg'});
        modalRef.componentInstance.phase2 = phase2;
    }

    viewCcrPhase3(phase3) {
        const modalRef = this.modalService.open(Ccrphase3ContentComponent, {centered: true, size: 'lg'});
        modalRef.componentInstance.CCRPhase3Data = phase3;
    }

    viewSpecialistResponses(specialistResponses) {
        const modalRef = this.modalService.open(SpecialistCommentsComponent, {centered: true, size: 'lg'});
        modalRef.componentInstance.specialistResponses = specialistResponses;
    }
    viewManagerResponses(managerResponses) {
        const modalRef = this.modalService.open(ManagerCommentsComponent, {centered: true, size: 'lg'});
        modalRef.componentInstance.managerResponses = managerResponses;
    }

    ngOnInit() {
        this.currentccrsService.getMyCCRs().subscribe((data: Data) => {
                this.myCCRs = data;
                console.log(this.myCCRs);
            }
        );
    }
}
