import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { MessageService } from '../message.service';
import { PatientService } from '../patient.service';
import { Message } from '../message';


@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {


  patients: Array<Patient> = [];
  // showPatient: Patient;
  isSelected: boolean = false;
  deletedPatient: Patient;
  returnedMessage: string;
  currentPatient: Patient;
  message = '';

  // setPatientDetails(patient: Patient){
  //   this.isSelected=!this.isSelected;
  //   if(this.isSelected){
  //     this.currentPatient = patient;
  //   }else{
  //     this.currentPatient = undefined;
  //   }
  // }

  constructor(private patientService: PatientService,
    private route: ActivatedRoute,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.message = '';
    this.getPatient(this.route.snapshot.paramMap.get('id'));
  }


  getPatient(id): void {
    this.patientService.get(id)
      .subscribe(
        data => {
          this.currentPatient = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  updatePatient() {
    this.patientService.updatePatientPrescription(this.currentPatient)
                      .subscribe((message: Message) => {
                        console.log(message);
                        // update customers list
                        this.patients.map(x => {
                          if(x.id == this.currentPatient.id){
                            x = this.currentPatient;
                          }
                        });

                        let msg: string = "Update prescription Successfully!: <br>"
                                          + "<ul>"
                                          + "<li>" + "id: " + this.currentPatient.id + "</li>"
                                          + "<li>" + "firstname: " + this.currentPatient.firstname + "</li>"
                                          + "<li>" +  "prescription: " + this.currentPatient.prescription + "</li>"
                                          + "</ul>";
                        this.messageService.add(msg);
                      }
                      , (error) => {
                        console.log(error);
                        let errMsg = "Update Fail ! Error = " + error;
                        this.messageService.add(errMsg);
                      });
  }








  // updatePrescription(): void {
  //   this.patientService.updatePatientPrescription(this.currentPatient.id, this.currentPatient)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = 'The Prescription was updated successfully!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

}
