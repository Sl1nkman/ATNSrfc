/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { Component, OnInit } from '@angular/core';
import { RFC } from '../../models/RFC';
import {Phase1Service} from '../../services/phase1.service';
import {Data, Router} from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-create-rfcs',
  templateUrl: './phase1.component.html',
  styleUrls: ['./phase1.component.css']
})
export class Phase1Component implements OnInit {
  private usersSites ;
  private enableSubmitButton = false;
  constructor(private phase1Service: Phase1Service ,  private router: Router) { }
  private RFC: RFC  = {
    dateRequested: undefined,
    requestDescription: undefined,
    reasonForRequest: undefined,
    CSRF_token: undefined,
    site_ID: undefined
  };

  public onSelectSite($event) {
    this.RFC.site_ID = $event.target.value;
    localStorage.setItem('site' , $event.target.value);
  }
  public  requestedChange() {
    localStorage.setItem('request' , this.RFC.requestDescription);
  }
  public description() {
    localStorage.setItem('description' , this.RFC.reasonForRequest);
      const submitButton = document.getElementById('submit');
      if (this.RFC.requestDescription !== undefined && this.RFC.reasonForRequest !== undefined && this.RFC.site_ID !== undefined) {
        submitButton.classList.remove('disabled');
        this.enableSubmitButton = true;
      }
  }
  public onCancel() {

    swal({
      title: 'Are you sure?',
      text: 'You will lose this data',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#5bc0de',
      cancelButtonColor: '#d9534f' ,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('request');
        localStorage.removeItem('description');
        localStorage.removeItem('site');
        this.router.navigate(['home/myRFCS']);
      } else if (
          result.dismiss === swal.DismissReason.cancel
      ) {
        swal({
          title: 'Cancelled',
          text: 'Your may continue to make changes',
          type: 'error',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }
  public onSubmit() {

    swal({
      title: 'Are you sure?',
      text: "You won't be able make changes to your submission",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#5bc0de',
      cancelButtonColor: '#d9534f' ,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.phase1Service.submitRequest( this.RFC ).subscribe( (data: Data) => {
          if (data.success) {
            localStorage.removeItem('request');
            localStorage.removeItem('description');
            localStorage.removeItem('site');
            this.router.navigate(['home']);
            swal('Success' , data.message , 'success' );
          } else {
            swal('Failure' , data.message , 'error' );
            if (data.message === 'Session expired') {
              this.router.navigate(['login']);
            }
          }
        });
      } else if (
          /* Read more about handling dismissals below */
          result.dismiss === swal.DismissReason.cancel
      ) {
        swal({
          title: 'Cancelled',
          text: 'Your may continue to make changes',
          type: 'error',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }
  ngOnInit() {
    this.phase1Service.getCSRFToken().subscribe( (data: Data) => {
      this.RFC.CSRF_token = data.tokenValue ;
    });
    this.phase1Service.getPageData().subscribe((data: Data) => {
      this.usersSites = data ;
    });

    this.RFC.requestDescription = localStorage.getItem('request');
    this.RFC.reasonForRequest = localStorage.getItem('description');
    this.RFC.site_ID = localStorage.getItem('site');
  }

}
