import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';


import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Message } from '../message';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
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
  save() {
    this.doctorService.login(this.doctor)
          .subscribe((message: Message) => {
            console.log(message);
           // let doctor = message.doctors[0];
            let msg = "Successful Login ";
  
            this.messageService.add(msg);
          }, error => {
            console.log(error);
            let msg = "Auth Failed" ;
  
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
