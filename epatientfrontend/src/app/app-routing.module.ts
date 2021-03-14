import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { IntroComponent } from './intro/intro.component';
import { DocdetailsComponent } from './docdetails/docdetails.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { AdmaddpatComponent} from './admaddpat/admaddpat.component';
import { ViewpatprofComponent} from './viewpatprof/viewpatprof.component';
import { AddocComponent } from './addoc/addoc.component';
import { ViewdocprofComponent } from './viewdocprof/viewdocprof.component';
import {DocprescribComponent} from './docprescrib/docprescrib.component';
import {PatprescribComponent} from './patprescrib/patprescrib.component';
import {PatchangeComponent} from './patchange/patchange.component';
import {DocchangeComponent} from './docchange/docchange.component';
import {DocprescriptionComponent} from './docprescription/docprescription.component';
import {PatprescriptionComponent} from './patprescription/patprescription.component';
import {AddprescribComponent} from './addprescrib/addprescrib.component';

const routes: Routes = [
{ path: '', redirectTo: '', pathMatch: 'full'},
{ path: 'intro', component: IntroComponent},
{ path: 'patient', component: PatientComponent},
{ path: 'patientdetails', component: PatientDetailsComponent},
{ path: 'doctor', component: DoctorComponent},
{ path: 'docdetails', component: DocdetailsComponent },
{ path: 'admin', component: AdminComponent},
{ path: 'admindetails', component: AdmindetailsComponent },
{ path: 'admaddpat', component: AdmaddpatComponent },
{ path: 'viewpatprof', component: ViewpatprofComponent },
{ path: 'addoc', component: AddocComponent },
{ path: 'viewdocprof', component: ViewdocprofComponent },
{ path: 'docprescrib', component: DocprescribComponent},
{ path: 'patprescrib', component: PatprescribComponent},
{ path: 'patchange', component: PatchangeComponent},
{ path: 'docchange', component:DocchangeComponent},
{ path: 'docprescription', component:DocprescriptionComponent},
{ path: 'patprescription', component:PatprescriptionComponent},
{ path: 'addprescrib', component:AddprescribComponent},
{ path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
