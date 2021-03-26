import { Component, OnInit } from '@angular/core';

import { Patient } from '../patient';
import { MessageService } from '../message.service';
import { PatientService } from '../patient.service';
import { Message } from '../message';

@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.css']
})
export class ListpatientComponent implements OnInit {

  patients: Array<Patient> = [];
  showPatient: Patient;
  isSelected: boolean = false;
  currentPatient: null;
  currentIndex: -1;
  deletedPatient: Patient;
  returnedMessage: string;

  constructor(private patientService: PatientService,
    private messageService: MessageService) { }

    setPatientDetails(patient: Patient){
      this.isSelected=!this.isSelected;
      if(this.isSelected){
        this.showPatient = patient;
      }else{
        this.showPatient = undefined;
      }
    }

      /**
   * Set deletedDoctor and reset returnedMessage = undefined
   * @param deletePatient
   */
  prepareDeletePatient(deletePatient: Patient){
    //assign delete-Patient
    this.deletedPatient = deletePatient;
    // reset returned-Message
    this.returnedMessage = undefined;
  }

  // refreshList(): void {
  //   this.retrieveAllPatients();
  //   this.currentPatient = null;
  //   this.currentIndex = -1;
  // }

  setActivePatient(patient, index): void {
    this.currentPatient = patient;
    this.currentIndex = index;
  }

  deletePatient(){

    console.log("--- Access deletePatient() function");

    this.patientService.deletePatient(this.deletedPatient.id)
                      .subscribe((message: Message) => {
                          console.log(message);
                          // remove a deletedDoctor from doctors list on view
                          this.patients = this.patients.filter(patient => {
                            return patient.id != this.deletedPatient.id;
                          })

                          // set a showing message in delete modal
                          this.returnedMessage = message.message;

                          // just reset showDoctor for not showing on view
                          this.showPatient = undefined;

                          // add the delete message to message app for showing
                          this.messageService.add(message.message);
                        },
                        (error) => {
                          console.log(error);
                          let errMsg: string = "Error! Details: " + error;
                          this.messageService.add(errMsg);
                        });
  }

  /**
   * Retrieve all Patient from Backend
   */
   retrieveAllPatients() {
    this.patientService.retrieveAllPatients()
                  .subscribe((message: Message) => {
                    console.log(message);
                    this.patients = message.patients;
                  }
                  , (error) => {
                    console.log(error);
                  });
  }

  ngOnInit(): void {
    this.retrieveAllPatients();
  }

}
