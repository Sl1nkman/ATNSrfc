import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports for bootstrap forms
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
// ngx imports
import {BsDatepickerModule} from 'ngx-bootstrap';
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
import { CreateRfcsComponent } from './pages/create-rfcs/create-rfcs.component';
import { HomeComponent } from './pages/home/home.component';
import { RFCsignoffComponent } from './pages/rfcsignoff/rfcsignoff.component';
import { Phase1Component } from './pages/phase1/phase1.component';
import { Phase3Component } from './pages/phase3/phase3.component';
// Routing guards, module and auth service
import {AuthGuard} from './guards/auth.guard';
import {RouteGuard} from './guards/route.guard';
import { AppRoutingModule } from './models/app-routing.module';
import {RouteAuthorisationService} from './services/route-authorisation.service';

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
    Phase3Component,

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
    ],
  providers: [AuthGuard , CookieService , RouteAuthorisationService , RouteGuard  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
