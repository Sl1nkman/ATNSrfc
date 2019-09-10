import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-rfcs',
  templateUrl: './current-rfcs.component.html',
  styleUrls: ['./current-rfcs.component.css']
})
export class CurrentRFCSComponent implements OnInit {

  cardId: number;

  rfcs = [
    {id: 1, request: 'something', reason: 'Cause I said so ...'},
    {id: 2, request: 'something else', reason: 'Same as the last one ...'},
    {id: 3, request: 'one last thing', reason: 'Just do it ...'}
  ];

  onClick(index) {
    document.getElementById('test').innerHTML = 'You selected the card with id: ' + this.rfcs[index].id;
  }

  constructor() { }

  ngOnInit() {
  }

}
