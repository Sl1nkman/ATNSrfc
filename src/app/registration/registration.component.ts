import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // Router import
import {Login} from '../../models/login'; // interface import
import swal from 'sweetalert2'; // Sweet Alerts import
import * as crypto from 'crypto-js';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


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
  login: Login = {
    name: undefined,
    surname: undefined,
    employeeId: undefined ,
    email: undefined,
    contactNumber: undefined,
    permission: undefined,
    region: undefined,
    department: undefined,
    password: undefined
  };
  availablePermissions: String [] = ['Specialist', 'Manager' , 'Employee']; // to be delegated to database
  availableRegions: String [] = ['Northern', 'Southern', 'Both']; // to be delegated to database
  availableDepartments: String [] = ['Department1' , 'Department2', 'Department3']; // to be delegated to database
  constructor( private router: Router) { }

  // Validates email input
  validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase()) === true) {
    this.showEmail = false;
  } else {
    this.showEmail = true;
  }
}


  onSelectPermission(value: string) {
    this.login.permission = value ;
  }

  onSelectRegion(value: string) {
    this.login.region = value;
  }

  onSelectDepartment(value: string) {
    this.login.department =  value;
  }

  // Called on register button click this is where the data is stored in the database and the password is hashed and stored in the login object
  onRegister() {
    if (this.showRegisterButton === true) {
      const hash = crypto.MD5(this.passwordCheck);
      this.login.password = hash;
      swal('Success!', 'Thank you for registering.  ' + hash + this.login.password , 'success');
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
