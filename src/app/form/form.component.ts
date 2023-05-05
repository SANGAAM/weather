import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @ViewChild('postalCodeInput') postalCodeInput: ElementRef<HTMLInputElement>;
  
   formUsers: any[]=[];
   formObj:any={
     age:   0,
     state:   '',
     district: '',
     Fname:  '',
     Lname:   '',
     mobile:  '',
     gender: '',
     postalCode: ''
   }
  

  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
  }

  calculateAge(event: MatDatepickerInputEvent<Date>) {
    const dob = event.value;
    const today = new Date();
    let age2 = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age2--;
    }
    const ageInput = document.getElementById('ageInput') as HTMLInputElement;
    ageInput.value = age2.toString();
  }

  onPostalCodeChange(postalCode: string) {
    if (postalCode.length === 6) {
      this.http.get(`https://api.postalpincode.in/pincode/${postalCode}`).subscribe({
        next: data => {
          const result = data[0];
          if (result.Status === 'Success') {
            this.formObj.state = result.PostOffice[0].State;
            this.formObj.district = result.PostOffice[0].District;

          } else {
            console.error('Invalid postal code');
          }
        },
        error: error => {
          console.error('An error occurred:', error);
        }
      });
    }
    
  }
  onSubmit() {
   
      this.formUsers.push(this.formObj);
      localStorage.setItem('formUsers',JSON.stringify(this.formUsers));
       
    }
  

}
