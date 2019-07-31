import { Component, OnInit } from '@angular/core';
import { RFC } from '../../models/RFC';
import { User } from '../../models/User';

@Component({
  selector: 'app-create-rfcs',
  templateUrl: './create-rfcs.component.html',
  styleUrls: ['./create-rfcs.component.css']
})
export class CreateRfcsComponent implements OnInit {
  enableSubmitButton = false;
  constructor() { }
  RFC: RFC  = {
    dateRequested: undefined,
    requestedChange: undefined,
    description: undefined
  };
  User: User = {title: undefined,
    site: undefined,
    name: undefined,
    surname: undefined,
    employeeId: undefined,
    contactNumber: undefined,
    email: undefined,
    password: undefined
  };
  setRFCDate() {
    this.RFC.dateRequested =  new Date();
  }
  requestedChange() {

  }
  description() {
      const submitButton = document.getElementById('submit');
      if (this.RFC.requestedChange !== undefined && this.RFC.description !== undefined) {
        submitButton.classList.remove('disabled');
        this.enableSubmitButton = true;
      }
  }
  onSubmit() {
    this.setRFCDate();
    console.log(this.RFC.dateRequested);

  }
  ngOnInit() {
  }

}
