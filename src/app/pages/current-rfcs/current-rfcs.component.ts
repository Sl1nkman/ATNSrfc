import { Component, OnInit } from '@angular/core';
import {CurrentRfcsService} from '../../services/currentRfcs.service';
import {Data} from '@angular/router';

@Component({
  selector: 'app-current-rfcs',
  templateUrl: './current-rfcs.component.html',
  styleUrls: ['./current-rfcs.component.css']
})
export class CurrentRFCSComponent implements OnInit {

  Token = null;

  rfcs = [
    {id: 1, request: 'something', reason: 'Cause I said so ...'},
    {id: 2, request: 'something else', reason: 'Same as the last one ...'},
    {id: 3, request: 'one last thing', reason: 'Just do it ...'}
  ];

  onClick(index) {
    document.getElementById('test').innerHTML = 'You selected the card with id: ' + this.rfcs[index][0];
  }

  constructor(private CurrentRfcsService: CurrentRfcsService) { }

  ngOnInit() {
     this.CurrentRfcsService.getCSRFToken().subscribe( (data: Data) => {
         this.Token = data.tokenValue ;
     });
     this.CurrentRfcsService.getPageData().subscribe((data:Data) => {
        this.rfcs = data[0];
        console.log(this.rfcs);
     });
  }

}
