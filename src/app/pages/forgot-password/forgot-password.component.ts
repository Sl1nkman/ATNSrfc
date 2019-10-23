import { Component, OnInit } from '@angular/core';
import {ForgotpasswordService} from '../../services/forgotpassword.service';
import swal from 'sweetalert2';
import {Data, Router} from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public username;
  constructor(private forgotPasswordService: ForgotpasswordService, private router: Router) { }
  requestResetEmail() {
    swal({
      title: 'Are you sure this is your Username?',
      text: 'You won\'t receive an email if it isn\'t',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#5bc0de',
      cancelButtonColor: '#d9534f' ,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        if (this.username !== null || undefined) {
          this.forgotPasswordService.sendChangePasswordEmail(this.username).subscribe( (data: Data) => {
        if (data.success) {
          swal('Success' , data.message , 'success' );
        } else {
          swal('Failure' , data.message , 'error' );
          if (data.message === 'Session expired') {
            this.router.navigate(['login']);
          }
        }
      });
  }

      } else if (
          /* Read more about handling dismissals below */
          result.dismiss === swal.DismissReason.cancel
      ) {
        swal({
          title: 'Cancelled',
          text: 'Please Enter your correct Username',
          type: 'error',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }
  ngOnInit() {
  }

}
