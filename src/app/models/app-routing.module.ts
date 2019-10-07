/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../pages/registration/registration.component';
import { LoginComponent } from '../pages/login/login.component';
import { MyRFCSComponent } from '../pages/my-rfcs/my-rfcs.component';
import { Phase1Component } from '../pages/phase1/phase1.component';
import { HomeComponent } from '../pages/home/home.component';
import { CurrentRFCSComponent } from '../pages/current-rfcs/current-rfcs.component';
import { RFCsignoffComponent } from '../pages/rfcsignoff/rfcsignoff.component';
import { Phase2Component } from '../pages/phase2/phase2.component';
import { RouteGuard } from '../guards/route.guard';
import { AuthGuard } from '../guards/auth.guard';
import { Phase3Component } from '../pages/phase3/phase3.component';
import {AdminDashboardComponent} from '../pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',        component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'phase1' ,      component: Phase2Component},
  { path: 'phase3' ,      component: Phase3Component},
  { path: 'home' ,        component: HomeComponent,
    canActivate: [AuthGuard] ,
    canActivateChild: [RouteGuard],
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'createRFC' ,   component: Phase1Component ,      data: { allowedPermission: '1' } , runGuardsAndResolvers: 'always' },
      { path: 'myRFCS' ,      component: MyRFCSComponent ,      data: { allowedPermission: '2' }, runGuardsAndResolvers: 'always'},
      { path: 'rfcsignoff' ,  component: RFCsignoffComponent ,  data: { allowedPermission: '4' }, runGuardsAndResolvers: 'always'},
      { path: 'currentrfcs' , component: CurrentRFCSComponent , data: { allowedPermission: '3' }, runGuardsAndResolvers: 'always' ,
        children: [
          { path: 'phase2' ,      component: Phase2Component ,      data: { allowedPermission: '4' }, runGuardsAndResolvers: 'always'},
          { path: 'phase3' ,      component: Phase3Component ,      data: { allowedPermission: '5' }, runGuardsAndResolvers: 'always'},
        ]},
        // change permission level for admin dashboard to higher security level
      {path: 'adminDashboard', component: AdminDashboardComponent, data:{allowedPermission: '5'}, runGuardsAndResolvers: 'always'}
      ]},
  { path: '**',           component: LoginComponent },
  {path: 'phase3' , component: Phase3Component},
  {path: 'CurrentRFCsComponent', component: CurrentRFCSComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes , { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

