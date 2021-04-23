import { Component, OnInit } from '@angular/core';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Message } from '../message';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-admaddpat',
  templateUrl: './admaddpat.component.html',
  styleUrls: ['./admaddpat.component.css']
})
export class AdmaddpatComponent implements OnInit {

  patient: Patient;
  /**
   * Constructing Http Patient Service
   * @param patientService 
   */


  constructor(private patientService: PatientService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.patient = new Patient();
  }

 /**
   * Store a Patient to backend server
   */
  save() {
    this.patientService.createPatient(this.patient)
          .subscribe((message: Message) => {
            console.log(message);
            let patient = message.patients[0];
            let msg = "Success -> Post a Patient: " 
                + "<ul>"
                    + "<li>id: " + patient.id + "</li>"  
                    + "<li>firstname: " + patient.firstname + "</li>"
                    + "<li>lastname: " + patient.lastname + "</li>"
                    + "<li>address: " + patient.email + "</li>"
                    + "<li>contact_no: " + patient.contact_no + "</li>"
                + "</ul>";

            this.messageService.add(msg);
          }, error => {
            console.log(error);
            let msg = "Error! -> Action Posting a Patient:" 
                      + "<ul>"
                        + "<li>id = " + this.patient.id + "</li>"  
                        + "<li>firstname = " + this.patient.firstname + "</li>"
                        + "<li>lastname = " + this.patient.lastname + "</li>"
                        + "<li>address: " + this.patient.email + "</li>"
                    + "<li>contact_no: " + this.patient.contact_no + "</li>"
                      + "</ul>";

            this.messageService.add(msg);
          });
  }

  reset(){
    this.patient = new Patient();
  }

   /**
   * Function handles form submitting
   */
    onSubmit() {
      this.save();
      this.reset();
    }

}
