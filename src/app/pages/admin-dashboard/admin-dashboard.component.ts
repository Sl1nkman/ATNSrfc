import { Component, OnInit } from '@angular/core';
import {AdminDashboardService} from '../../services/adminDashboard.service';
import {Data, Router} from '@angular/router';
import {Phase1Service} from '../../services/phase1.service';
import {Phase2Service} from '../../services/phase2.service';
import {Phase3Service} from '../../services/phase3.service';
import swal from 'sweetalert2';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  private selectedIndex = 0;
  private specialistPhase = '';

  private initiatedRFC = [];
  private phase2RFCs = [];
  private phase3RFCS = [];
  private sites = [];
  private users = [];
  private impactRisks = [];
  private eos = [];
  private priority = [];
  private changePeriods = [];
  private natureChange = [];
  private phase2Docs = [];
  private phase3Docs = [];
  private selectedUser;
  private displayCCR = false;

  private phase2Upload = [];
  private phase3Upload = [];

  private Token: null;
  private showSpecialist = false;
  private showEditDocs = false;
  private edit = false;
  private selectedPhase: String = '';
  private selectedCCR;
  private selectedEOS;
  private selectedPriority;
  private selectedPeriod;
  private selectedRisk;
  private selectedChange;
  private temporaryStartDate;
  private temporaryEndDate = 'none';
  private changeHW = 'none';
  private changeSW = 'none';
  private changeFW = 'none';
  private impactOps = 'none';
  private impactCli = 'none';
  private impactTech = 'none';
  private reasonUnsucc = 'none';
  private reportRaised = 'No';
  private preTest = 'No';
  private specialists = ['Liam McCabe'];
  private specialist = '';
  private specialistComm = 'none';


  constructor(private adminDashboardService: AdminDashboardService, private router: Router, private phase1: Phase1Service, private phase2: Phase2Service, private phase3: Phase3Service) {}

  public redirectSQL(){
    const url = 'http://localhost/phpmyadmin/db_sql.php?db=test';
    window.open(url, '_blank')
  }

  public fileOver(event) {
  }

  public fileLeave(event) {
  }

  removeFile(index, phase) {
    if (phase === '2') {
      this.phase2Upload.splice(index, 1);
    } else {
      this.phase3Upload.splice(index, 1);
    }
  }

  public dropped(files: NgxFileDropEntry[], phase) {

    const filesNgx: NgxFileDropEntry[] [] = [];

    filesNgx.push(files);
    if (phase === '2') {
      for (const droppedFile of files) {
        // Is it a file?
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            this.phase2Upload.push(file);
          });
        } else {
          // It was a directory (empty directories are added, otherwise only files)
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        }
      }
    } else {
      for (const droppedFile of files) {
        // Is it a file?
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            this.phase3Upload.push(file);
          });
        } else {
          // It was a directory (empty directories are added, otherwise only files)
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        }
      }
    }
  }

  showCCR(index) {
    this.displayCCR = true;
    this.selectedIndex = index;
    this.specialist = '';
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].ID === this.initiatedRFC[index].user_ID) {
        this.selectedUser = this.users[i].name;
      }
    }
    if (this.phase2RFCs[index].ID !== -1) {
      if (this.phase2RFCs[index].temporaryStartDate !== null) {
        this.temporaryStartDate = this.phase2RFCs[index].temporaryStartDate;
      }
      if (this.phase2RFCs[index].preTestSuccess !== '0') {
        this.preTest = 'Yes';
      }
      if (this.phase2RFCs[index].reportRaisedContractor !== '0') {
        this.reportRaised = 'Yes';
      }
      if (this.phase2RFCs[index].temporaryEndDate !== null) {
        this.temporaryEndDate = this.phase2RFCs[index].temporaryEndDate;
      }
      if (this.phase2RFCs[index].changeTypeHW !== '0') {
        this.changeHW = 'Yes';
      }
      if (this.phase2RFCs[index].changeTypeSW !== '0') {
        this.changeSW = 'Yes';
      }
      if (this.phase2RFCs[index].changeTypeFW !== '0') {
        this.changeFW = 'Yes';
      }
      if (this.phase2RFCs[index].impactOnOperations !== null) {
        this.impactOps = this.phase2RFCs[index].impactOnOperations;
      }
      if (this.phase2RFCs[index].impactOnClients !== null) {
        this.impactCli = this.phase2RFCs[index].impactOnClients;
      }
      if (this.phase2RFCs[index].impactonTech !== null) {
        this.impactTech = this.phase2RFCs[index].impactonTech;
      }
      if (this.phase2RFCs[index].reasonUnsuccesTest !== null) {
        this.reasonUnsucc = this.phase2RFCs[index].reasonUnsuccesTest;
      }
      if (this.phase2RFCs[index].specialist_comment !== null) {
        this.specialistComm = this.phase2RFCs[index].specialist_comment;
      }
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].ID === this.phase2RFCs[index].spec_ID) {
          this.specialist = this.users[i].name;
        }
      }
      for (let i = 0; i < this.eos.length; i++) {
        if (this.eos[i].ID === this.phase2RFCs[index].eos_ID) {
          this.selectedEOS = this.eos[i].description;
        }
      }
      for (let i = 0; i < this.priority.length; i++) {
        if (this.priority[i].ID === this.phase2RFCs[index].requestPriority_ID) {
          this.selectedPriority = this.priority[i].text;
        }
      }
      for (let i = 0; i < this.changePeriods.length; i++) {
        if (this.changePeriods[i].ID === this.phase2RFCs[index].changePeriod_ID) {
          this.selectedPeriod = this.changePeriods[i].text;
        }
      }
      for (let i = 0; i < this.impactRisks.length; i++) {
        if (this.impactRisks[i].ID === this.phase2RFCs[index].impactRisks_ID) {
          this.selectedRisk = this.impactRisks[i].text;
        }
      }
      for (let i = 0; i < this.natureChange.length; i++) {
        if (this.natureChange[i].ID === this.phase2RFCs[index].natureChange_ID) {
          this.selectedChange = this.natureChange[i].text;
        }
      }
    }
    if (this.phase3RFCS[index].ID !== -1) {

    }
  }

  openLink(index, phase) {
    let url = '';
    if (phase === '2') {
      url = 'http://localhost/ATNSCCR_PHP/backend/api2/uploads/' + this.phase2Docs[index].link;
    } else {
      url = 'http://localhost/ATNSCCR_PHP/backend/api2/uploads/' + this.phase3Docs[index].link;
    }
      window.open(url, '_blank');
  }

  editDocs(index) {
    if (this.phase2RFCs[index].ID !== -1) {
      this.adminDashboardService.getPhase2Docs(this.phase2RFCs[index].ID).toPromise().then((data => {
        if (data !== null) {
          this.phase2Docs = data[0];
        }
      }));
    }
    if (this.phase3RFCS[index].ID !== -1) {
      this.adminDashboardService.getPhase3Docs(this.phase3RFCS[index].ID).toPromise().then(data => {
        if (data !== null) {
          this.phase3Docs = data[0];
        }
      });

    }
    this.showEditDocs = true;
    this.selectedIndex = index;
  }

  deleteDoc(index, phase) {
    if (phase === '2') {
      const obj = {deleteSelection: 'phase2', document: this.phase2Docs[index]};
      this.adminDashboardService.deleteDoc(obj).toPromise().then((data: Data) => {
        if (data.success) {
          this.phase2Docs.splice(index, 1);
          swal({
            title: 'Deleted',
            text: 'Your file has been deleted',
            type: 'success',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          swal({
            title: 'Error',
            text: 'There was a problem deleting your file',
            type: 'error',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
      this.adminDashboardService.getPhase2Docs(this.phase2RFCs[index].ID).toPromise().then((data => {
        if (data !== null) {
          this.phase2Docs = data[0];
        }
      }));
    } else {
      const obj = {deleteSelection: 'phase3', document: this.phase3Docs[index]};
      this.adminDashboardService.deleteDoc(obj).toPromise().then((data: Data) => {
        if (data.success) {
          this.phase3Docs.splice(index, 1);
          swal({
            title: 'Deleted',
            text: 'Your file has been deleted',
            type: 'success',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          swal({
            title: 'Error',
            text: 'There was a problem deleting your file',
            type: 'error',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
      this.adminDashboardService.getPhase3Docs(this.phase3RFCS[index].ID).toPromise().then(data => {
        if (data !== null) {
          this.phase3Docs = data[0];
        }
      });
    }
  }

  public upload(phase) {
    if (phase === '2') {
      const formData = new FormData();
      for (let i = 0; i < this.phase2Upload.length; i++) {
        formData.append('file[]', this.phase2Upload[i], this.phase2Upload[i].name);
      }
      formData.append('passedID', this.phase2RFCs[this.selectedIndex].ID);
      this.phase2.upload(formData).subscribe((check: Data) => {
        if (check.success) {
          swal({
            title: 'Received',
            text: 'Your files have been received',
            type: 'success',
            showConfirmButton: false,
            timer: 1500
          });
          this.adminDashboardService.getPhase2Docs(this.phase2RFCs[this.selectedIndex].ID).toPromise().then((data => {
            if (data !== null) {
              this.phase2Docs = data[0];
            }
          }));
          this.phase2Upload = [];

        } else {
          swal({
            title: 'Files not uploaded',
            text: check.message,
            type: 'error',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    } else {
      const formData = new FormData();
      for (let i = 0; i < this.phase3Upload.length; i++) {
        formData.append('file[]', this.phase3Upload[i], this.phase3Upload[i].name);
      }
      formData.append('passedID', this.phase3RFCS[this.selectedIndex].ID);
      this.phase3.upload(formData).subscribe((data1: Data) => {
        if (data1.success) {
          swal({
            title: 'Received',
            text: 'Your files have been received',
            type: 'success',
            showConfirmButton: false,
            timer: 1500
          });
          this.adminDashboardService.getPhase3Docs(this.phase3RFCS[this.selectedIndex].ID).toPromise().then(data => {
            if (data !== null) {
              this.phase3Docs = data[0];
            }
          });
          this.phase3Upload = [];
        } else {
          swal({
            title: 'Files not uploaded',
            text: data1.message,
            type: 'error',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  }

  hideDocs() {
    this.showEditDocs = false;
    this.phase3Upload = [];
    this.phase2Upload = [];
  }

  hideCCR() {
    this.displayCCR = false;
  }

  selectedSpecialist(event) {
    this.specialist = event.target.value;
  }

  revealSpecialist(i) {
    if (this.phase2RFCs[i].ID !== -1) {
      this.showSpecialist = true;
      this.selectedCCR = this.phase2RFCs[i].ID;
      this.selectedIndex = i;
      this.specialistPhase = '2';
    } else {
      this.showSpecialist = true;
      this.selectedCCR = 0;
      this.selectedIndex = i;
      this.specialistPhase = '1';
    }
  }

  hideSpecialist() {
    this.showSpecialist = false;
  }

  setSpecialist() {
    this.showSpecialist = false;
    this.adminDashboardService.setNewSpecialist(this.selectedCCR, this.specialist, this.specialistPhase, this.initiatedRFC[this.selectedIndex]).subscribe((data: Data) => {
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
      this.phase3.setObj(this.phase3RFCS[index]);
    }

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
      this.impactRisks = data[5];
      this.eos = data[6];
      this.priority = data[7];
      this.changePeriods = data[8];
      this.natureChange = data[9];

      for (let i = 0; i < this.initiatedRFC.length; i++) {
        if (this.phase2RFCs.length !== this.initiatedRFC.length) {
          this.phase2RFCs.unshift({ID: -1, phase1_ID: -1});
        }
        if (this.phase3RFCS.length !== this.initiatedRFC.length) {
          this.phase3RFCS.unshift({ID: -1, phase1_ID: -1});
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
          if (this.phase2RFCs[i].ID === this.phase3RFCS[x].CCR_ID) {
            this.phase3RFCS.splice(i, 0, this.phase3RFCS.splice(x, 1)[0]);
          }
        }
      }
    });
  }

}

// Created by Blaine Viljoen
