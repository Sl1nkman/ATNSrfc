// Created by Blaine Viljoen
import { Component, OnInit } from '@angular/core';
import {MyRfcsService} from '../../services/MyRfcs.service';
import {CookieService} from 'ngx-cookie-service';
import {Data} from '@angular/router';
import decode from 'jwt-decode';
import {CurrentCcrsService} from '../../services/current-ccrs.service';
import {Phase2Service} from '../../services/phase2.service';
import {Phase3Service} from '../../services/phase3.service';

@Component({
  selector: 'app-my-rfcs',
  templateUrl: './my-rfcs.component.html',
  styleUrls: ['./my-rfcs.component.scss']
})
export class MyRFCSComponent implements OnInit {

  private myCCRs ;

  constructor(private myRfcsService: MyRfcsService){ }

  private displayPhase2: boolean;
  private displayPhase3: boolean;

  ngOnInit() {
    this.myRfcsService.getMyCCRs().subscribe( (data: Data) => {
          this.myCCRs = data;
          console.log(this.myCCRs);
        }
    );
  }

}
// Created by Blaine Viljoen
