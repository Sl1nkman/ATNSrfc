

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../pages/registration/registration.component';
import { LoginComponent } from '../pages/login/login.component';
import {MyRFCSComponent} from '../pages/my-rfcs/my-rfcs.component';
import {CreateRfcsComponent} from '../pages/create-rfcs/create-rfcs.component';

import {HomeComponent} from '../pages/home/home.component';
import {CurrentRFCSComponent} from '../pages/current-rfcs/current-rfcs.component';
import {RFCsignoffComponent} from '../pages/rfcsignoff/rfcsignoff.component';
import {Phase1Component} from '../pages/phase1/phase1.component';
import {RouteGuard} from '../guards/route.guard';
import {AuthGuard} from '../guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path: 'phase1' , component: Phase1Component},
  { path: 'home' , component: HomeComponent, canActivate: [AuthGuard] ,
    canActivateChild: [RouteGuard],
    children: [
      { path: 'createRFC' ,   component: CreateRfcsComponent ,  data: { allowedRoles: ['1', '2', '5'] } },
      { path: 'myRFCS' ,      component: MyRFCSComponent ,      data: { allowedRoles: ['1', '2', '5'] } } ,
      { path: 'rfcsignoff' ,  component: RFCsignoffComponent ,  data: { allowedRoles: ['1', '2'] } },
      { path: 'currentrfcs' , component: CurrentRFCSComponent , data: { allowedRoles: ['1', '2'] }},
      {path: 'phase1' , component: Phase1Component , data: { allowedRoles: ['1', '2']}}
      ]},
  { path: '**', component: RegistrationComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

