import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private apiUrl = 'http://localhost:8182';

  adminKeyError: boolean = false;
  adminKey: string = '';
  registrationSuccess: boolean = false;
  user = { name: '', contactno: '', email: '', password: '', roles: '' };
  constructor(private http: HttpClient, private router: Router,private snackBar: MatSnackBar,private sanitizer: DomSanitizer) {}

  registrationSuccessful = false;
email: string = '';
name: string = '';
password: string = '';
confirmPassword: string = '';
roles: string ='';
 successmsg: string ="";
errorflag: boolean = true;

// if (registerUser.invalid) {
//   // Prevent registration if the form is not valid
//   alert('Please fill in all the required fields correctly.');
//   return;
// }

registerUser() {

  // if (registerForm.invalid) {
  //   // Prevent registration if the form is not valid
  //   alert('Please fill in all the required fields correctly.');
  //   return;
  // }

  // if (this.user.password !== this.confirmPassword) {
  //   // Prevent registration if passwords do not match
  //   alert('Passwords do not match.');
  //   return;
  // }

  const user = {

    name: this.name,

    email: this.email,

    password: this.password,

    roles: this.roles

  };

  console.log('1234');



  this.http.post<string>('http://localhost:9090/auth/new', user, { responseType: 'text' as 'json' }).subscribe(

(response:string) => {

    // console.log('Registration successful:', response);

  this.registrationSuccessful = true;

  this.successmsg=response

        if(this.successmsg=="This UserName is Already Registered.")

        {

          this.errorflag = false;

        }else{

          window.alert("Registration Successfull");

          this.router.navigate(['/login']);

        }

  // window.alert("Registration Successfull");

  // this.router.navigate(['/login']);

},

(error) => {

   console.error('Registration :', error);

  this.registrationSuccessful = false;

 // window.alert('Registration Successful , Happy to have you Onboard');

  this.snackBar.open('Registration Successful, Happy to have you Onboard', 'Dismiss', {
    duration: 10000, // Duration in milliseconds for how long the snackbar should be visible
    panelClass: ['your-custom-class'], // Apply your own CSS class for custom styling
  });
  this.router.navigate(['/login']);

}

);



}  


// registerUser(registerForm: NgForm) {

//     if (registerForm.invalid) {
//           // Prevent registration if the form is not valid
//           alert('Please fill in all the required fields correctly.');
//           return;
//         }
  
//   //  const m =  this.user = { name: this.user.name, contactno: this.user.contactno, email: this.user.email, password: this.user.password, roles: this.user.roles };
//   //   const url = `${this.apiUrl}/user/register`;
//   //   console.log(m);
//   //   return this.http.post(url, m, { responseType: 'text' }).subscribe(
//   //     (response: any) => { 
//   //       console.log(response);
//   //       this.registrationSuccess = true;
//   //       alert('REGISTRATION SUCCESSFULL , Email sent '); 
//   //       this.router.navigate(['/login']);
//   //     },
//   //     (error) => {
//   //       console.log(error);
//   //       alert('Please check your input once');
//   //     }
//   //   );
//   // }


//   // registerUser(registerForm: NgForm) {
//   //   if (registerForm.invalid) {
//   //     // Prevent registration if the form is not valid
//   //     alert('Please fill in all the required fields correctly.');
//   //     return;
//   //   }

//   //   if (this.user.role === 'admin' && this.adminKey !== 'pmsadmin') {
//   //     this.adminKeyError = true;
//   //     return;
//   //   }

//   //   const url = `${this.apiUrl}/user/register`;
//   //   return this.http.post(url, this.user, { responseType: 'text' }).subscribe(
//   //     (response: any) => {
//   //       console.log(response);
//   //       this.registrationSuccess = true;
//   //       alert('REGISTRATION SUCCESSFUL. Email sent.');
//   //       this.router.navigate(['/login']);
//   //     },
//   //     (error) => {
//   //       console.log(error);
//   //       alert('Please check your input once');
//   //     }
//   //   );
//   // }
// }
}
