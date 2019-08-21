import { Component, OnInit } from '@angular/core';
import {Data, Router} from '@angular/router'; // Router import
import {User} from '../../models/User'; // interface import
import swal from 'sweetalert2'; // Sweet Alerts import
import {RegistrationService} from '../../services/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // Boolean values for input validation
  private Token = null ;
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
  User: User = {
    title: undefined,
    surname: undefined,
    name: undefined,
    employeeId: undefined ,
    email: undefined,
    contactNumber: undefined,
    site: undefined,
    password: undefined ,
  };

  availableTitles: String [] = ['Mr' , 'Ms' , 'Regional manager'];
  availablePermissions: String [] = ['Specialist', 'Manager' , 'Employee']; // to be delegated to database
  availableRegions: String [] = ['Northern', 'Southern', 'Both']; // to be delegated to database
  availableSites: String [] = ['Site1' , 'Site2', 'Site3']; // to be delegated to database
  constructor( private router: Router , private registration: RegistrationService) { }

  onSelectTitle($event){
    if (!(this.User.title === undefined) &&
        !(this.User.site === undefined) &&
        !(this.User.email === undefined) &&
        !(this.User.employeeId === undefined) &&
        !(this.User.contactNumber === undefined) &&
        !(this.User.name === undefined) &&
        !(this.User.surname === undefined) &&
        !(this.password === undefined)
    ) {
      this.showRegisterButton = true;
    }
  }
  onSelectSite($event){
    if (!(this.User.title === undefined) &&
        !(this.User.site === undefined) &&
        !(this.User.email === undefined) &&
        !(this.User.employeeId === undefined) &&
        !(this.User.contactNumber === undefined) &&
        !(this.User.name === undefined) &&
        !(this.User.surname === undefined) &&
        !(this.password === undefined)
    ) {
      this.showRegisterButton = true;
    }
  }
  // Validates email input
  validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase()) === true) {
    this.showEmail = false;
  } else {
    this.showEmail = true;
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
    const registerButton = document.getElementById('submit');
    registerButton.classList.remove('disabled');
  this.showPasswordCheck = true;
  if (!(this.User.title === undefined) &&
      !(this.User.site === undefined) &&
      !(this.User.email === undefined) &&
      !(this.User.employeeId === undefined) &&
      !(this.User.contactNumber === undefined) &&
      !(this.User.name === undefined) &&
      !(this.User.surname === undefined) &&
      !(this.password === undefined)
  ) {
    this.showRegisterButton = true;
  }
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
  onCancel() {
    this.router.navigate(['login']);
  }
  // Called on register button click this is where the data is stored in the database and the password is hashed and stored in the login object
  onRegister() {
    if (this.showRegisterButton === true) {
      // const hash = crypto.MD5(this.passwordCheck);
      this.User.password = this.passwordCheck;
      console.log(this.User);
      this.registration.registerUser(this.User , this.Token).subscribe((data: Data) => {
        if (data.success) {
          swal('Success!', data.message, 'success');
          this.router.navigate(['login']);
        } else {
          this.registration.getCSRFToken().subscribe( (data1: Data) => {
            this.Token = data1.tokenValue ;
          });
          swal('Failure', data.message, 'error');
        }
      });
    } else {
      swal('Failure', 'Please complete the registration form', 'error');
    }
  }
  ngOnInit() {
     this.registration.getCSRFToken().subscribe( (data: Data) => {
       this.Token = data.tokenValue ;
     });
    this.registration.getPageData().subscribe((data: Data) => {
      this.availableSites = data[0];
      this.availableTitles = data[1];

    });
  }
}
