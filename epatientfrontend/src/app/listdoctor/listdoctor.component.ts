import { Component, OnInit } from '@angular/core';

import { Doctor } from '../doctor';
import { MessageService } from '../message.service';
import { DoctorService } from '../doctor.service';
import { Message } from '../message';

@Component({
  selector: 'app-listdoctor',
  templateUrl: './listdoctor.component.html',
  styleUrls: ['./listdoctor.component.css']
})
export class ListdoctorComponent implements OnInit {

  doctors: Array<Doctor> = [];
  showDoctor: Doctor;
  isSelected: boolean = false;
  deletedDoctor: Doctor;
  returnedMessage: string;

  constructor(private doctorService: DoctorService,
    private messageService: MessageService) { }

    setDoctorDetails(doctor: Doctor){
      this.isSelected=!this.isSelected;
      if(this.isSelected){
        this.showDoctor = doctor;
      }else{
        this.showDoctor = undefined;
      }
    }

    /**
   * Set deletedDoctor and reset returnedMessage = undefined
   * @param deleteDoctor
   */
  prepareDeleteDoctor(deleteDoctor: Doctor){
    //assign delete-Doctor
    this.deletedDoctor = deleteDoctor;
    // reset returned-Message
    this.returnedMessage = undefined;
  }

  deleteDoctor(){

    console.log("--- Access delelteDoctor() function");

    this.doctorService.deleteDoctor(this.deletedDoctor.id)
                      .subscribe((message: Message) => {
                          console.log(message);
                          // remove a deletedDoctor from doctors list on view
                          this.doctors = this.doctors.filter(doctor => {
                            return doctor.id != this.deletedDoctor.id;
                          })

                          // set a showing message in delete modal
                          this.returnedMessage = message.message;

                          // just reset showDoctor for not showing on view
                          this.showDoctor = undefined;

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
   * Retrieve all Doctor from Backend
   */
   retrieveAllDoctors() {
    this.doctorService.retrieveAllDoctors()
                  .subscribe((message: Message) => {
                    console.log(message);
                    this.doctors = message.doctors;
                  }
                  , (error) => {
                    console.log(error);
                  });
  }

  ngOnInit(): void {
    this.retrieveAllDoctors();
  }

}
