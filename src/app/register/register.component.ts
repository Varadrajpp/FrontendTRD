import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  private apiUrl = 'http://localhost:8182';

  adminKeyError: boolean = false;
  adminKey: string = '';
  registrationSuccess: boolean = false;
  user = { name: '', contactno: '', email: '', password: '', roles: '' };
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  registrationSuccessful = false;
  email: string = '';
  name: string = '';
  password: string = '';
  confirmPassword: string = '';
  roles: string = '';
  successmsg: string = '';
  errorflag: boolean = true;

  registerUser(registerForm: NgForm) {
    if (registerForm.invalid) {
      // Prevent registration if the form is not valid
      alert('Please fill in all the required fields correctly.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      // Prevent registration if passwords do not match
      alert('Passwords do not match.');
      return;
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      roles: this.roles,
    };

    this.http
      .post<string>('http://localhost:9090/auth/new', user, {
        responseType: 'text' as 'json',
      })
      .subscribe(
        (response: string) => {
          this.registrationSuccessful = true;
          this.successmsg = response;
          if (this.successmsg === 'This UserName is Already Registered.') {
            this.errorflag = false;
          } else {
            window.alert('Registration Successful');
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          console.error('Registration :', error);
          this.registrationSuccessful = false;
          this.snackBar.open(
            'Registration Successful, Happy to have you Onboard',
            'Dismiss',
            {
              duration: 10000,
              panelClass: ['your-custom-class'],
            }
          );
          this.router.navigate(['/login']);
        }
      );
  }
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

