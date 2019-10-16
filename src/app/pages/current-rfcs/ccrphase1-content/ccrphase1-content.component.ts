/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ccrphase1-content',
  templateUrl: './ccrphase1-content.component.html',
  styleUrls: ['./ccrphase1-content.component.css']
})
export class Ccrphase1ContentComponent implements OnInit {

  @Input() public phase1 ;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.phase1);
  }

}
