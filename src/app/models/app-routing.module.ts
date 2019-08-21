import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../pages/registration/registration.component';
import { LoginComponent } from '../pages/login/login.component';
import {MyRFCSComponent} from '../pages/my-rfcs/my-rfcs.component';
import {Phase1Component} from '../pages/phase1/phase1.component';
import {HomeComponent} from '../pages/home/home.component';
import {CurrentRFCSComponent} from '../pages/current-rfcs/current-rfcs.component';
import {RFCsignoffComponent} from '../pages/rfcsignoff/rfcsignoff.component';
import {Phase2Component} from '../pages/phase2/phase2.component';
import {RouteGuard} from '../guards/route.guard';
import {AuthGuard} from '../guards/auth.guard';
import {Phase3Component} from '../pages/phase3/phase3.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',        component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'phase1' ,      component: Phase2Component},
  { path: 'phase3' ,      component: Phase3Component},
  { path: 'home' ,        component: HomeComponent,
    canActivate: [AuthGuard] ,
    canActivateChild: [RouteGuard],
    children: [
      { path: 'createRFC' ,   component: Phase1Component },
      { path: 'myRFCS' ,      component: MyRFCSComponent } ,
      { path: 'rfcsignoff' ,  component: RFCsignoffComponent ,  data: { allowedRoles: ['1', '2'] }},
      { path: 'currentrfcs' , component: CurrentRFCSComponent , data: { allowedRoles: ['1', '2'] }},
      { path: 'phase1' ,      component: Phase2Component ,      data: { allowedRoles: ['1', '2'] }},
      { path: 'phase3' ,      component: Phase3Component}
      ]},
  { path: '**',           component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

