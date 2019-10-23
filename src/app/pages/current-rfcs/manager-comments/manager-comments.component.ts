import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manager-comments',
  templateUrl: './manager-comments.component.html',
  styleUrls: ['./manager-comments.component.css']
})
export class ManagerCommentsComponent implements OnInit {

  public managerResponses ;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
