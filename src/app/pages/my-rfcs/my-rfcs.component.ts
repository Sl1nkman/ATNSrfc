// Created by Blaine Viljoen
import { Component, OnInit } from '@angular/core';
import {MyRfcsService} from '../../services/MyRfcs.service';
import {CookieService} from 'ngx-cookie-service';
import {Data} from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-my-rfcs',
  templateUrl: './my-rfcs.component.html',
  styleUrls: ['./my-rfcs.component.scss']
})
export class MyRFCSComponent implements OnInit {

  private userID: string;
  private links = [];

  Token = null;

  rfcs = [
    {id: 1, request: 'something', reason: 'Cause I said so ...'},
    {id: 2, request: 'something else', reason: 'Same as the last one ...'},
    {id: 3, request: 'one last thing', reason: 'Just do it ...'}
  ];

  onClick(index) {
    document.getElementById('test').innerHTML = 'You selected the card with id: ' + this.rfcs[index][0];
  }

  constructor(private myRfcsService: MyRfcsService, private cookieService: CookieService) { }

  ngOnInit() {
    const jwt  = this.cookieService.get('jwt');
    const decodedToken = decode(jwt);
    this.userID = decodedToken.data.id;


    this.myRfcsService.getCSRFToken().subscribe( (data: Data) => {
      this.Token = data.tokenValue ;
    });
    this.myRfcsService.getPageData(this.userID.toString()).subscribe((data:Data) => {
      this.rfcs = data[0];
    });

    this.myRfcsService.getFiles().subscribe((data:Data) => {
      this.links = data[0];
    });
  }

}
// Created by Blaine Viljoen
