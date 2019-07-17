import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2'
import {AppRoutingModule} from './models/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { LoginComponent } from './pages/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap';
import { NgxFileDropModule } from 'ngx-file-drop';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyRFCSComponent } from './pages/my-rfcs/my-rfcs.component';
import { CreateRfcsComponent } from './pages/create-rfcs/create-rfcs.component';
import { HomeComponent } from './pages/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import { CurrentRFCSComponent } from './pages/current-rfcs/current-rfcs.component';
import { RFCsignoffComponent } from './pages/rfcsignoff/rfcsignoff.component';
import { Phase1Component } from './pages/phase1/phase1.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    MyRFCSComponent,
    CreateRfcsComponent,
    HomeComponent,
    CurrentRFCSComponent,
    RFCsignoffComponent,
    Phase1Component,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    PasswordStrengthMeterModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    NgxFileDropModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
