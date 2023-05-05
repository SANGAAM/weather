import { Component,ViewChild,ElementRef } from '@angular/core';
// import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   @ViewChild('postalCodeInput') postalCodeInput: ElementRef<HTMLInputElement>;

//   public age: number = 0;
//   public state: string = '';
//   public district: string = '';
//   public Fname: string = '';
//   public Lname: string = '';
//   public email: string = '';
//   public mobile: string = '';
//   public gender: string = '';

//   constructor(private http: HttpClient,private router: Router) {}

//   calculateAge(event: MatDatepickerInputEvent<Date>) {
//     const dob = event.value;
//     const today = new Date();
//     let age = today.getFullYear() - dob.getFullYear();
//     const monthDiff = today.getMonth() - dob.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
//       age--;
//     }
//     const ageInput = document.getElementById('ageInput') as HTMLInputElement;
//     ageInput.value = age.toString();
//   }
  
//   onPostalCodeChange(postalCode: string) {
//     if (postalCode.length === 6) {
//       this.http.get(`https://api.postalpincode.in/pincode/${postalCode}`).subscribe({
//         next: data => {
//           const result = data[0];
//           if (result.Status === 'Success') {
//             this.state = result.PostOffice[0].State;
//             this.district = result.PostOffice[0].District;
            
//           } else {
//             console.error('Invalid postal code');
//           }
//         },
//         error: error => {
//           console.error('An error occurred:', error);
//         }
//       });
//     }
//   }
//   onSubmit() {
//     if (this.postalCodeInput) {
//       console.log('postalCodeInput:', this.postalCodeInput);

//       const postalCode = this.postalCodeInput.nativeElement.value;
//     let formData = {
//       Fname: this.Fname,
//       Lname: this.Lname,
//       email: this.email,
//       mobile: this.mobile,
//       gender: this.gender,
//       age: this.age,
//       state: this.state,
//       district: this.district,
//       postalCode: this.postalCodeInput.nativeElement.value
//     };
//     localStorage.setItem('formData', JSON.stringify(formData));
//     // this.router.navigate(['/view']);

//   }
// }
}

