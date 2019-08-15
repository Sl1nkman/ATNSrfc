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
  enableSubmitButton = false;
  private Token ;
  constructor(private phase1Service: Phase1Service ,  private router: Router) { }
  RFC: RFC  = {
    dateRequested: undefined,
    requestedChange: undefined,
    description: undefined
  };
  // User: User = {title: undefined,
  //   site: undefined,
  //   name: undefined,
  //   surname: undefined,
  //   employeeId: undefined,
  //   contactNumber: undefined,
  //   email: undefined,
  //   password: undefined
  // };
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
  onCancel() {
      this.router.navigate(['home']);
  }
  onSubmit() {
    this.setRFCDate();
    this.phase1Service.submitRequest( this.RFC , this.Token).subscribe( (data: Data) => {
      if (data.success) {
        this.router.navigate(['home']);
        swal('Success' , data.message , 'success' );
      } else {
        swal('Failure' , data.message , 'error' );
      }
    });
  }
  ngOnInit() {
    this.phase1Service.getCSRFToken().subscribe( (data: Data) => {
      this.Token = data.tokenValue ;
    });
  }

}
