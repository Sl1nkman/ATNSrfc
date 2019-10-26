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


  constructor(private adminDashboardService: AdminDashboardService, private router: Router, private phase1: Phase1Service, private phase2: Phase2Service, private phase3: Phase3Service) {}

  public managers = [];
  public showManagerEdit = false;
  public managerJob = null;
  public managerSite = null;
  public managerFirst = null;
  public managerLast = null;
  public managerPhone;
  public managerEmail;
  public selectedManager;
  public showPhone;
  public showEmail;

  public alerts = [];
  public alertMessage;
  public alertFreq;
  public selectedAlert;
  public showEditAlert = false;

  public eosType;
  public eosDescription;
  public editEOS = false;

  public showAssignEOS = false;
  public eosUser = [];

  public titles = [];
  public titleType;
  public titleDescription;
  public showTitleEdit = false;
  public selectedTitle;

  public showAssignSite = false;
  public allSites = [];
  public selectedSite;

  public selectedIndex = 0;
  public specialistPhase = '';

  public currentRoles = [];
  public currentUserRoles = [];
  public editUserRole = false;
  public deleteUserRole = false;
  public operation = '';

  public initiatedRFC = [];
  public phase2RFCs = [];
  public phase3RFCS = [];
  public userSites = [];
  public users = [];
  public impactRisks = [];
  public eos = [];
  public priority = [];
  public changePeriods = [];
  public natureChange = [];
  public phase2Docs = [];
  public phase3Docs = [];
  public selectedUser;
  public selectedRole;
  public displayCCR = false;

  public phase2Upload = [];
  public phase3Upload = [];

  public Token: null;
  public showSpecialist = false;
  public showEditDocs = false;
  public edit = false;
  public selectedPhase: String = '';
  public selectedCCR;
  public selectedEOS;
  public selectedPriority;
  public selectedPeriod;
  public selectedRisk;
  public selectedChange;
  public temporaryStartDate;
  public temporaryEndDate = 'none';
  public changeHW = 'none';
  public changeSW = 'none';
  public changeFW = 'none';
  public impactOps = 'none';
  public impactCli = 'none';
  public impactTech = 'none';
  public reasonUnsucc = 'none';
  public reportRaised = 'No';
  public preTest = 'No';
  public specialists = ['Liam McCabe'];
  public specialist = '';
  public specialistComm = 'none';

  validatePhoneNumber(phone: string) {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (re.test(phone)) {
      this.showPhone = true;
    } else {
      this.showPhone = false;
    }
  }

  validateEmail(email: string) {
    const re = /[!@#$%^&*(),.?"'~`:;{}|<>_+=[ ]/g;
    if (re.test(String(email).toLowerCase()) === true) {
      this.showEmail = false;
    } else {
      this.showEmail = true;
    }
  }

  public redirectSQL() {
    const url = this.adminDashboardService.phpMyAdminUrl;
    window.open(url, '_blank');
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
      this.phase2Docs.splice(index, 1);
    } else {
      const obj = {deleteSelection: 'phase3', document: this.phase3Docs[index]};
      this.adminDashboardService.deleteDoc(obj).toPromise().then((data: Data) => {
        if (data.success) {
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
      this.phase3Docs.splice(index, 1);
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
      for (let i = 0; i < this.userSites.length; i++) {
        if (this.initiatedRFC[i].user_ID === this.userSites[i].user_ID) {
          siteID = this.userSites[i].site_ID;
        }
      }
      this.phase1.setobj(this.initiatedRFC[index], siteID);
      console.log(this.allSites);
    } else if (this.selectedPhase === 'Phase2') {
      let user = '';
      for (let i = 0; i < this.users.length; i++) {
        if (this.initiatedRFC[index].user_ID === this.users[i].ID) {
          user = this.users[i].name;
        }
      }
      for (let i = 0; i < this.userSites.length; i++) {
        if (this.initiatedRFC[i].user_ID === this.userSites[i].user_ID) {
          siteID = this.userSites[i].site_ID;
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

  selectUser($event) {
    this.selectedUser = $event.target.value;
  }

  selectRole($event) {
    this.selectedRole = $event.target.value;
  }

  revealEditAlert() {
    this.showEditAlert = true;
  }

  hideEditAlert() {
    this.alertMessage = null;
    this.alertFreq = null;
    this.showEditAlert = false;
    this.selectedAlert = null;
  }

  editAlert() {
    this.adminDashboardService.editAlert(this.selectedAlert, this.alertMessage, this.alertFreq).subscribe((data: Data) => {
      if (data.success) {
        swal('Success' , 'The alert has been edited successfully' , 'success' );
        this.adminDashboardService.getAlert().toPromise().then(result => {
          this.alerts = result[0];
        });
      } else {
        swal('Failure' , 'There was a problem editing the alert' , 'error' );
      }
    });
  }

  revealAssignSite(operation) {
    this.showAssignSite = true;
    this.operation = operation;
  }

  hideAssignSite(operattion) {
    this.showAssignSite = false;
    this.selectedUser = null;
    this.selectedSite = null;
  }

  assignSite() {
    if (this.operation === 'add') {
      for (let i = 0; i < this.userSites.length; i++) {
        if (this.userSites[i].user_ID === this.selectedUser && this.userSites[i].site_ID === this.selectedSite) {
          swal('Failure' , 'The user already has this site' , 'error' );
          return;
        }
      }

      this.adminDashboardService.assignSite(this.selectedUser, this.selectedSite, this.operation).subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The user has been assigned the site successfully' , 'success' );
          this.adminDashboardService.getSiteUser().toPromise().then(result => {
            this.userSites = result[0];
          });
        } else {
          swal('Failure' , 'There was a problem assigning the user the site' , 'error' );
        }
      });

    } else {
      let check = false;
      for (let i = 0; i < this.userSites.length; i++) {
        if (this.userSites[i].user_ID === this.selectedUser && this.userSites[i].site_ID === this.selectedSite) {
          check = true;
        }
      }

      if (!check) {
        swal('Failure' , 'The user does not have this site' , 'error' );
        return;
      }

      this.adminDashboardService.assignSite(this.selectedUser, this.selectedSite, this.operation).subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The user\'s site has been removed successfully' , 'success' );
          this.adminDashboardService.getSiteUser().toPromise().then(result => {
            this.userSites = result[0];
          });
        } else {
          swal('Failure' , 'There was a problem removing the user\'s site' , 'error' );
        }
      });
    }
  }

  showManager(operation) {
    this.showManagerEdit = true;
    this.operation = operation;
  }

  hideManager() {
    this.showManagerEdit = false;
    this.managerLast = null;
    this.managerFirst = null;
    this.managerSite = null;
    this.managerJob = null;
    this.managerEmail = null;
    this.managerPhone = null;
    this.selectedManager = null;
  }

  editManager() {
    if (this.operation === 'add') {
      for (let i = 0; i < this.managers.length; i++) {
        if (this.managers[i].firstname === this.managerFirst && this.managers[i].lastname === this.managerLast) {
          swal('Failure' , 'The manager already exists' , 'error' );
          return;
        }
      }

      this.adminDashboardService.insertManager(this.managerJob, this.managerSite, this.managerFirst, this.managerLast, this.managerPhone, this.managerEmail).subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The manager has been added to the system' , 'success' );
          this.adminDashboardService.getManager().toPromise().then(result => {
            this.managers = result[0];
          });
        } else {
          swal('Failure' , 'There was a problem adding the manager' , 'error' );
        }
      });
    } else {
      this.adminDashboardService.deleteManager(this.selectedManager).subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The manager was removed successfully' , 'success' );
          this.adminDashboardService.getManager().toPromise().then(result => {
            this.managers = result[0];
          });
        } else {
          swal('Failure' , 'There was a problem removing the manager' , 'error' );
        }
      });
    }
  }

  revealAssignEOS(operation) {
    this.showAssignEOS = true;
    this.operation = operation;
  }

  hideAssignEOS() {
    this.showAssignEOS = false;
    this.selectedUser = null;
    this.selectedEOS = null;
  }

  assignEOS() {
    if (this.operation === 'add') {
      for (let i = 0; i < this.eosUser.length; i++) {
        if (this.eosUser[i].user_ID === this.selectedUser && this.eosUser[i].eos_ID === this.selectedEOS) {
          swal('Failure' , 'The user already has this system' , 'error' );
          return;
        }
      }

      this.adminDashboardService.assignEOS(this.selectedUser, this.selectedEOS, this.operation).subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The user has been assigned the EOS successfully' , 'success' );
          this.adminDashboardService.getEOSUser().toPromise().then(result => {
            this.eosUser = result[0];
          });
        } else {
          swal('Failure' , 'There was a problem assigning the user the EOS' , 'error' );
        }
      });
    } else {
      let check = false;
      for (let i = 0; i < this.eosUser.length; i++) {
        if (this.eosUser[i].user_ID === this.selectedUser && this.eosUser[i].eos_ID === this.selectedEOS) {
          check = true;
        }
      }

      if (!check) {
        swal('Failure' , 'The user does not have this EOS' , 'error' );
        return;
      }

      this.adminDashboardService.assignEOS(this.selectedUser, this.selectedEOS, this.operation).subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The user\'s EOS has been removed successfully' , 'success' );
          this.adminDashboardService.getEOSUser().toPromise().then(result => {
            this.eosUser = result[0];
          });
        } else {
          swal('Failure' , 'There was a problem removing the user\'s EOS' , 'error' );
        }
      });
    }
  }

  editRole(operation) {
    if (operation === 'add') {
      for (let i = 0; i < this.currentUserRoles.length; i++) {
        if (this.currentUserRoles[i].user_ID === this.selectedUser && this.currentUserRoles[i].role_ID === this.selectedRole) {
          swal('Failure' , 'The user already has this role' , 'error' );
          return;
        }
      }

      this.adminDashboardService.editUserRole(this.selectedUser, this.selectedRole, 'add').subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The user has been assigned the role successfully' , 'success' );
        } else {
          swal('Failure' , 'There was a problem assigning the user the role' , 'error' );
        }
      });
    } else {
      let check = false;
      for (let i = 0; i < this.currentUserRoles.length; i++) {
        if (this.currentUserRoles[i].user_ID === this.selectedUser && this.currentUserRoles[i].role_ID === this.selectedRole) {
          check = true;
        }
      }

      if (!check) {
        swal('Failure' , 'The user does not have this role' , 'error' );
        return;
      }

      this.adminDashboardService.editUserRole(this.selectedUser, this.selectedRole, 'delete').subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The user\'s role has been removed successfully' , 'success' );
        } else {
          swal('Failure' , 'There was a problem removing the user\'s role' , 'error' );
        }
      });
    }

  }

  titleShow(operation) {
    this.operation = operation;
    this.showTitleEdit = true;
  }

  hideTitle() {
    this.showTitleEdit = false;
    this.titleType = null;
    this.titleDescription = null;
    this.selectedTitle = null;
  }

  editTitle() {
    if (this.operation === 'add') {
      for (let i = 0; i < this.titles.length; i++) {
        if (this.titles[i].type === this.titleType) {
          swal('Failure' , 'Title already exists' , 'error' );
          return;
        }
      }

      this.adminDashboardService.insertTitle(this.titleType, this.titleDescription).subscribe((data: Data) => {
          if (data.success) {
            swal('Success' , 'The title has been added successfully' , 'success' );
            this.adminDashboardService.getTitle().toPromise().then(result => {
              this.titles = result[0];
            });
          } else {
            swal('Failure' , 'The title has not been added successfully' , 'error' );
          }
      });
    } else {
      let check = false;
      for (let i = 0; i < this.titles.length; i++) {
        if (this.titles[i].ID === this.selectedTitle) {
          check = true;
        }
      }

      if (!check) {
        swal('Failure' , 'Title does not exist' , 'error' );
        return;
      }

      this.adminDashboardService.deleteTitle(this.selectedTitle).subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The title has been deleted successfully' , 'success' );
          this.adminDashboardService.getTitle().toPromise().then(result => {
            this.titles = result[0];
          });
        } else {
          swal('Failure' , 'The title has not been deleted successfully' , 'error' );
        }
      });
    }
  }

  eosShow(operation) {
    this.operation = operation;
    this.editEOS = true;
  }

  hideEOS() {
    this.editEOS = false;
    console.log(this.eosType);
    this.eosType = null;
    this.eosDescription = null;
  }

  editEOSSystems() {
    if (this.operation === 'add') {
      for (let i = 0; i < this.eos.length; i++) {
        if (this.eos[i].type === this.eosType) {
          swal('Failure' , 'System already exists' , 'error' );
          return;
        }
      }

      this.adminDashboardService.insertEOS(this.eosType, this.eosDescription).subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The EOS has been added successfully' , 'success' );
          this.adminDashboardService.getEOS().toPromise().then(result => {
            this.eos = result[0];
          });
        } else {
          swal('Failure' , 'The EOS has not been added successfully' , 'error' );
        }
      });
    } else {
      let id = -1;
      for (let i = 0; i < this.eos.length; i++) {
        if (this.eos[i].type === this.eosType) {
          id = this.eos[i].ID;
        }
      }

      if (id === -1) {
        swal('Failure' , 'System does not exist' , 'error' );
        return;
      }
      console.log(id);
      this.adminDashboardService.deleteEOS(id).subscribe((data: Data) => {
        if (data.success) {
          swal('Success' , 'The EOS has been deleted successfully' , 'success' );
          this.adminDashboardService.getEOS().toPromise().then(result => {
            this.eos = result[0];
          });
        } else {
          swal('Failure' , 'The EOS has not been deleted successfully' , 'error' );
        }
      });
    }
  }

  userRoleShow(operation) {
    this.operation = operation;
    this.editUserRole = true;
  }

  hideUserRole() {
    this.editUserRole = false;
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
      this.userSites = data[3];
      this.users = data[4];
      this.impactRisks = data[5];
      this.eos = data[6];
      this.priority = data[7];
      this.changePeriods = data[8];
      this.natureChange = data[9];
      this.currentRoles = data[10];
      this.currentUserRoles = data[11];
      this.eosUser = data[12];
      this.allSites = data[13];
      this.titles = data[14];
      this.managers = data[15];
      this.alerts = data[16];

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
