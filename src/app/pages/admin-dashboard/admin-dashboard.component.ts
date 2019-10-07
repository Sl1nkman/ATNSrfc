import { Component, OnInit } from '@angular/core';
import {AdminDashboardService} from '../../services/adminDashboard.service';
import {Data, Router} from '@angular/router';
import {Phase1Service} from '../../services/phase1.service';
import {Phase2Service} from '../../services/phase2.service';
import {Phase3Service} from '../../services/phase3.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  private rfcs = [
    {id: 1, request: 'something', reason: 'Cause I said so ...', site: 'FABL'},
    {id: 2, request: 'something else', reason: 'Same as the last one ...', site: 'FABL'},
    {id: 3, request: 'one last thing', reason: 'Just do it ...', site: 'FABL'}
  ];

  private selectedIndex = 0;

  private initiatedRFC = [];
  private phase2RFCs = [];
  private phase3RFCS = [];
  private sites = [];
  private users = [];
  private selectedUser;
  private displayCCR = false;

  private Token: null;
  private showSpecialist = false;
  private edit = false;
  private selectedPhase: String = '';
  private selectedCCR;
  private specialists = ['Liam McCabe'];
  private specialist = '';

  constructor(private adminDashboardService: AdminDashboardService, private router: Router, private phase1: Phase1Service, private phase2: Phase2Service, private phase3: Phase3Service) {}

  showCCR(index) {
    this.displayCCR = true;
    this.selectedIndex = index;
    this.specialist = '';
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].ID === this.initiatedRFC[index].user_ID) {
        this.selectedUser = this.users[i].name;
      }
    }
    if (this.phase2RFCs[index].ID !== 0) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].ID === this.phase2RFCs[index].spec_ID) {
          this.specialist = this.users[i].name;
        }
      }
    }
  }

  hideCCR() {
    this.displayCCR = false;
  }

  selectedSpecialist(event) {
    this.specialist = event.target.value;
  }

  revealSpecialist(i) {
    console.log(i);
    if (this.phase2RFCs[i].ID !== 0) {
      this.showSpecialist = true;
      this.selectedCCR = this.phase2RFCs[i].ID;
    } else {
      swal('Failure' , 'A specialist has not yet processed this CCR' , 'error' );
    }
  }

  hideSpecialist() {
    this.showSpecialist = false;
  }

  setSpecialist() {
    this.showSpecialist = false;
    this.adminDashboardService.setNewSpecialist(this.selectedCCR, this.specialist).subscribe((data: Data) => {
      if (data.success) {
        swal('Success' , data.message , 'success' );
      } else {
        swal('Failure' , data.message , 'error' );
      }
    });
  }

  editCCR(index, phase) {
    this.selectedPhase = phase;
    this.selectedCCR = this.initiatedRFC[index];
    this.edit = true;
    let siteID = 0;

    if (this.selectedPhase === 'Phase1') {
      for (let i = 0; i < this.sites.length; i++) {
        if (this.initiatedRFC[i].user_ID === this.sites[i].user_ID) {
          siteID = this.sites[i].site_ID;
        }
      }
      this.phase1.setobj(this.initiatedRFC[index], siteID);
    } else if (this.selectedPhase === 'Phase2') {
      let user = '';
      for (let i = 0; i < this.users.length; i++) {
        if (this.initiatedRFC[index].user_ID === this.users[i].ID) {
          user = this.users[i].name;
        }
      }
      for (let i = 0; i < this.sites.length; i++) {
        if (this.initiatedRFC[i].user_ID === this.sites[i].user_ID) {
          siteID = this.sites[i].site_ID;
        }
      }
      this.phase2.setObj(this.phase2RFCs[index], this.initiatedRFC[index], user);
    } else if (this.selectedPhase === 'Phase3') {
      this.phase3.setObj(this.initiatedRFC[index]);
    }

    console.log(this.initiatedRFC);
    console.log(this.phase2RFCs);
    console.log(this.phase3RFCS);

  }

  back() {
    this.selectedPhase = '';
    this.edit = false;
    this.phase1.setobj(null, 0);
    this.phase2.setObj(null, null, null);
    this.phase3.setObj(null);

    this.setUp();
  }

  ngOnInit() {

    this.adminDashboardService.getCSRFToken().subscribe( (data: Data) => {
      this.Token = data.tokenValue ;
    });

    this.adminDashboardService.getSpecialistData().subscribe((data: Data) => {
      this.specialists = data[0];
    });

    this.setUp();

  }

  setUp() {
    this.adminDashboardService.getPageData().toPromise().then(data => {
      this.initiatedRFC = data[0];
      this.phase2RFCs = data[1];
      this.phase3RFCS = data[2];
      this.sites = data[3];
      this.users = data[4];

      for (let i = 0; i < this.initiatedRFC.length; i++) {
        if (this.phase2RFCs.length !== this.initiatedRFC.length) {
          this.phase2RFCs.push({ID: 0, phase1_ID: 0});
        }
        if (this.phase3RFCS.length !== this.initiatedRFC.length) {
          this.phase3RFCS.push({ID: 0, phase1_ID: 0});
        }
      }

      for (let i = 0; i < this.initiatedRFC.length; i++) {
        for (let x = 0; x < this.phase2RFCs.length; x++) {
          if (this.initiatedRFC[i].ID === this.phase2RFCs[x].phase1_ID) {
            this.phase2RFCs.splice(i, 0, this.phase2RFCs.splice(x, 1)[0]);
          }
        }
      }

      for (let i = 0; i < this.initiatedRFC.length; i++) {
        for (let x = 0; x < this.phase3RFCS.length; x++) {
          if (this.initiatedRFC[i].ID === this.phase3RFCS[x].CCR_ID) {
            this.phase3RFCS.splice(i, 0, this.phase3RFCS.splice(x, 1)[0]);
          }
        }
      }
    });
  }

}

// Created by Blaine Viljoen
