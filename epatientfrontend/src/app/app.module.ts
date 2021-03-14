import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DocdetailsComponent } from './docdetails/docdetails.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { ViewpatprofComponent } from './viewpatprof/viewpatprof.component';
import { AdmaddpatComponent } from './admaddpat/admaddpat.component';
import { ViewdocprofComponent } from './viewdocprof/viewdocprof.component';
import { PatchangeComponent } from './patchange/patchange.component';
import { DocchangeComponent } from './docchange/docchange.component';
import { AddocComponent } from './addoc/addoc.component';
import { DocprescribComponent } from './docprescrib/docprescrib.component';
import { PatprescribComponent } from './patprescrib/patprescrib.component';
import { DocprescriptionComponent } from './docprescription/docprescription.component';
import { PatprescriptionComponent } from './patprescription/patprescription.component';
import { AddprescribComponent } from './addprescrib/addprescrib.component';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PatientComponent,
    DoctorComponent,
    AdminComponent,
    PatientDetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    DocdetailsComponent,
    AdmindetailsComponent,
    ViewpatprofComponent,
    AdmaddpatComponent,
    ViewdocprofComponent,
    PatchangeComponent,
    DocchangeComponent,
    AddocComponent,
    DocprescribComponent,
    PatprescribComponent,
    DocprescriptionComponent,
    PatprescriptionComponent,
    AddprescribComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
