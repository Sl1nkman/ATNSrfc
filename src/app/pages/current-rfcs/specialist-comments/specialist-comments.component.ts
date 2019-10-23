import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-specialist-comments',
  templateUrl: './specialist-comments.component.html',
  styleUrls: ['./specialist-comments.component.css']
})
export class SpecialistCommentsComponent implements OnInit {

  public specialistResponses;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.specialistResponses);
  }

}
