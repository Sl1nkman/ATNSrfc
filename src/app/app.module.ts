import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';


const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  // { path: 'newservice', component: ServicesComponent },
  // { path: 'upsquotes', component: UpsQuotesComponent },
  // { path: 'generatorquotes', component: GeneratorQuotesComponent },
  // { path: 'aboutus', component: AboutUsComponent },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: '**', component: RegistrationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SweetAlert2Module.forRoot(),
    PasswordStrengthMeterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
