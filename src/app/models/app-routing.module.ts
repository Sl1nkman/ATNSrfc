

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../pages/registration/registration.component';
import { LoginComponent } from '../pages/login/login.component';
import {MyRFCSComponent} from '../pages/my-rfcs/my-rfcs.component';
import {CreateRfcsComponent} from '../pages/create-rfcs/create-rfcs.component';
import {AuthGuard} from '../guards/auth.guard';
import {HomeComponent} from '../pages/home/home.component';
import {CurrentRFCSComponent} from '../pages/current-rfcs/current-rfcs.component';
import {RFCsignoffComponent} from '../pages/rfcsignoff/rfcsignoff.component';
import {Phase1Component} from '../pages/phase1/phase1.component';
import {Phase3Component} from '../pages/phase3/phase3.component';

const routes: Routes = [
  { path: '', redirectTo: '/phase3', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path: 'phase1' , component: Phase1Component},
  { path: 'home' , component: HomeComponent ,
  children: [
    { path: 'createRFC' , component: CreateRfcsComponent},
    { path: 'myRFCS' , component: MyRFCSComponent} ,
    { path: 'rfcsignoff' , component: RFCsignoffComponent},
    { path: 'currentrfcs' , component: CurrentRFCSComponent},
    {path: 'phase1' , component: Phase1Component}
  ] ,
    canActivate : [AuthGuard]

  },
  {path: 'phase3' , component: Phase3Component},
  {path: 'CurrentRFCsComponent', component: CurrentRFCSComponent},
  { path: '**', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

