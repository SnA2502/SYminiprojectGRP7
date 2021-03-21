import { Component, OnInit } from '@angular/core';


import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Message } from '../message';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-addoc',
  templateUrl: './addoc.component.html',
  styleUrls: ['./addoc.component.css']
})
export class AddocComponent implements OnInit {

  doctor: Doctor;
  /**
   * Constructing Http Patient Service
   * @param doctorService 
   */


  constructor(private doctorService: DoctorService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.doctor = new Doctor();
  }

/**
   * Store a Doctor to backend server
   */
 save() {
  this.doctorService.createDoctor(this.doctor)
        .subscribe((message: Message) => {
          console.log(message);
          let doctor = message.doctors[0];
          let msg = "Success -> Post a Doctor: " 
              + "<ul>"
                  + "<li>id: " + doctor.id + "</li>"  
                  + "<li>firstname: " + doctor.firstname + "</li>"
                  + "<li>lastname: " + doctor.lastname + "</li>"
                  + "<li>age: " + doctor.age + "</li>"
                  + "<li>address: " + doctor.email + "</li>"
              + "</ul>";

          this.messageService.add(msg);
        }, error => {
          console.log(error);
          let msg = "Error! -> Action Posting a Doctor:" 
                    + "<ul>"
                      + "<li>id = " + this.doctor.id + "</li>"  
                      + "<li>firstname = " + this.doctor.firstname + "</li>"
                      + "<li>lastname = " + this.doctor.lastname + "</li>"
                      + "<li>age = " + this.doctor.age + "</li>"
                      + "<li>address = " + this.doctor.email + "</li>"
                    + "</ul>";

          this.messageService.add(msg);
        });
}

reset(){
  this.doctor = new Doctor();
}

/**
   * Function handles form submitting
   */
 onSubmit() {
  this.save();
  this.reset();
}

}
