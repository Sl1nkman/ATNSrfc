// Created by Blaine Viljoen
import { Component, OnInit } from '@angular/core';
import {CurrentCcrsService} from '../../services/current-ccrs.service';
import {Data} from '@angular/router';
import {Phase2Service} from '../../services/phase2.service';

@Component({
  selector: 'app-current-rfcs',
  templateUrl: './current-rfcs.component.html',
  styleUrls: ['./current-rfcs.component.css']
})
export class CurrentRFCSComponent implements OnInit {
  private myCCRs ;

  constructor(private currentccrsService: CurrentCcrsService, private  phase2service: Phase2Service) { }
  private displayPhase2: boolean;
  private displayPhase3: boolean;

  configureCCR(ccr) {
    this.phase2service.setObj(null , ccr , null);
    this.displayPhase2 = true;
  }
  ngOnInit() {
    this.currentccrsService.getMyCCRs().subscribe( (data: Data) => {
      this.myCCRs = data;
      console.log(this.myCCRs);
        }
    );
  }



}
