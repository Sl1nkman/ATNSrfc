/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
// imports for bootstrap forms
import { HttpClientModule , HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModalModule, NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
// ngx imports
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CookieService } from 'ngx-cookie-service';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
// Application components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MyRFCSComponent } from './pages/my-rfcs/my-rfcs.component';
import { CurrentRFCSComponent } from './pages/current-rfcs/current-rfcs.component';
import { Phase1Component } from './pages/phase1/phase1.component';
import { HomeComponent } from './pages/home/home.component';
import { RFCsignoffComponent } from './pages/rfcsignoff/rfcsignoff.component';
import { Phase2Component } from './pages/phase2/phase2.component';
import { Phase3Component } from './pages/phase3/phase3.component';
import { Ccrphase1ContentComponent } from './pages/current-rfcs/ccrphase1-content/ccrphase1-content.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Ccrphase2ContentComponent } from './pages/current-rfcs/ccrphase2-content/ccrphase2-content.component';
import { SpecialistCommentsComponent } from './pages/current-rfcs/specialist-comments/specialist-comments.component';
// Routing guards, module and auth service
import { AuthGuard } from './guards/auth.guard';
import { RouteGuard } from './guards/route.guard';
import { AppRoutingModule } from './models/app-routing.module';
import { RouteAuthorisationService } from './services/route-authorisation.service';
import { CcrHttpInterceptor } from './services/ccr-http-interceptor';
import { Ccrphase3ContentComponent } from './pages/current-rfcs/ccrphase3-content/ccrphase3-content.component';
import { ManagerCommentsComponent } from './pages/current-rfcs/manager-comments/manager-comments.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    MyRFCSComponent,
    Phase1Component,
    HomeComponent,
    CurrentRFCSComponent,
    RFCsignoffComponent,
    Phase2Component,
    Phase3Component,
    AdminDashboardComponent,
    ForgotPasswordComponent,
    Ccrphase1ContentComponent,
    Ccrphase2ContentComponent,
    SpecialistCommentsComponent,
    Ccrphase3ContentComponent,
    ManagerCommentsComponent,

  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        SweetAlert2Module.forRoot(),
        PasswordStrengthMeterModule,
        CollapseModule.forRoot(),
        AppRoutingModule,
        CommonModule,
        BsDatepickerModule.forRoot(),
        NgxFileDropModule,
        NgbPopoverModule,
        SelectDropDownModule,
        NgbModalModule
    ],
    providers: [AuthGuard , CookieService , RouteAuthorisationService , RouteGuard ,
      { provide: HTTP_INTERCEPTORS, useClass: CcrHttpInterceptor, multi: true }],
    bootstrap: [AppComponent] ,
    entryComponents: [ Ccrphase1ContentComponent , Ccrphase2ContentComponent, Ccrphase3ContentComponent , SpecialistCommentsComponent, ManagerCommentsComponent ]
})
export class AppModule {
}
