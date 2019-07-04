import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // Router import
import {Register} from '../../models/register'; // interface import
import swal from 'sweetalert2'; // Sweet Alerts import
import {TooltipPosition} from '@angular/material';
import {FormControl} from '@angular/forms';
import * as crypto from 'crypto-js';
import {RegistrationService} from '../../services/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[4]);

  // Boolean values for input validation
  showEmail: Boolean;
  showPassword: Boolean;
  showPasswordCheck: Boolean;
  showRegisterButton: Boolean;
  showPhone: Boolean;
  showEmpId: Boolean;

  // Password variables to validate password integrity
  password: string;
  passwordCheck: string;

  // Login object created from interface
  register: Register = {
    title: undefined,
    surname: undefined,
    name: undefined,
    employeeId: undefined ,
    email: undefined,
    contactNumber: undefined,
    permission: undefined,
    region: undefined,
    department: undefined,
    password: undefined
  };

  availableTitles: String [] = ['Mr' , 'Ms' , 'Regional manager']
  availablePermissions: String [] = ['Specialist', 'Manager' , 'Employee']; // to be delegated to database
  availableRegions: String [] = ['Northern', 'Southern', 'Both']; // to be delegated to database
  availableDepartments: String [] = ['Department1' , 'Department2', 'Department3']; // to be delegated to database
  constructor( private router: Router , private registration: RegistrationService) { }

  // Validates email input
  validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase()) === true) {
    this.showEmail = false;
  } else {
    this.showEmail = true;
  }
}


  onSelectTitle(value: string){
    this.register.title = value;
  }

  onSelectPermission(value: string) {
    this.register.permission = value ;
  }

  onSelectRegion(value: string) {
    this.register.region = value;
  }

  onSelectDepartment(value: string) {
    this.register.department =  value;
  }

  // Called on register button click this is where the data is stored in the database and the password is hashed and stored in the login object
  onRegister() {
    if (this.showRegisterButton === true) {
      const hash = crypto.MD5(this.passwordCheck);
      this.register.password = hash;
      this.registration.registerUser(this.register).subscribe(data => {
        swal('Success!', 'Thank you for registering.  ' + hash + this.register.password , 'success');
        this.router.navigate(['login']);
      });
    } else {

      swal('Failure', 'Please complete the registration form', 'error');

    }
  }
  // Validates password on input
  validatePassword(value: string) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.@#\$%\^&\*])(?=.{8,})/;
    if (re.test(String(value)) === true) {
      this.showPassword = true;
    } else {
      this.showPassword = false;
    }
  }
  // Validates phone number on input
  validatePhoneNumber(phone: string) {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (re.test(phone)) {
      this.showPhone = true;
    } else {
      this.showPhone = false;
    }
  }
  // Confirms the password is correctly chosen
  confirmPassword(value: string) {
if (this.password === value) {
  this.showPasswordCheck = true;
  this.showRegisterButton = true;
} else {
  this.showPasswordCheck = false;
  this.showRegisterButton = false;
}
  }
  // Validates that employee ID is of 4 character length
  validateEmpId(employeeId: number) {
    if (employeeId.toString().length === 4 ) {
      this.showEmpId = true;
    } else {
      this.showEmpId = false;
    }
  }
  ngOnInit() {

  }
}
