

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
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home' , component: HomeComponent ,
  children: [
    { path: 'createRFC' , component: CreateRfcsComponent},
    { path: 'myRFCS' , component: MyRFCSComponent} ,
    { path: 'rfcsignoff' , component: RFCsignoffComponent},
    { path: 'currentrfcs' , component: CurrentRFCSComponent}
  ] ,
    canActivate : [AuthGuard]

  },
  { path: '**', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

