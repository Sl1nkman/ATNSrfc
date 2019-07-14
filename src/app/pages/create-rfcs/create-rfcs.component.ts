import { Component, OnInit } from '@angular/core';
import { RFC } from '../../models/RFC';
import { User } from '../../models/User';

@Component({
  selector: 'app-create-rfcs',
  templateUrl: './create-rfcs.component.html',
  styleUrls: ['./create-rfcs.component.css']
})
export class CreateRfcsComponent implements OnInit {
  reqChange: string ;
  desc: string ;
  constructor() { }

  RFC: RFC  = {
    requestedChange: undefined,
    description: undefined
};

    User: User = {title: undefined,
      department: undefined,
      name: undefined,
      surname: undefined,
      employeeId: undefined,
      contactNumber: undefined,
      email: undefined,
      permission: undefined,
      region: undefined,
      password: undefined
  }

getRFC() {
    this.RFC.requestedChange = this.reqChange;
    this.RFC.description = this.desc;
}
  onSubmit() {
    this.getRFC();

  }
  ngOnInit() {
  }

}
