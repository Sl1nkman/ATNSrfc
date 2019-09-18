import { Component, OnInit } from '@angular/core';
import {AdminDashboardService} from '../../services/adminDashboard.service';
import {Data} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  rfcs = [
    {id: 1, request: 'something', reason: 'Cause I said so ...'},
    {id: 2, request: 'something else', reason: 'Same as the last one ...'},
    {id: 3, request: 'one last thing', reason: 'Just do it ...'}
  ];

  private buttonSelected: boolean;
  private userID: number;
  private Token: null;
  private users: [];

  constructor(private adminDashboardService: AdminDashboardService){}

  edit(i){
    this.buttonSelected = true;
    document.getElementById('test').innerHTML = 'You have chosen to edit CCR ' + this.rfcs[i].id;
  }

  back(){
    this.buttonSelected = false;
    document.getElementById('test').innerHTML = '';
  }

  ngOnInit(){
    this.buttonSelected = false;

    this.adminDashboardService.getCSRFToken().subscribe( (data: Data) => {
      this.Token = data.tokenValue ;
    });
  }

}

// Created by Blaine Viljoen
