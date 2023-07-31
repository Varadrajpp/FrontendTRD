import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';

interface AuthRequest{

  username:string,

  password:string,
  

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string='';

  constructor(private http: HttpClient,private router: Router, private authService: AuthService,private sharedService:SharedService) { }

  loginData:AuthRequest = { username: this.username, password: this.password };

  
  login() {
    console.log('Login clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Role:', this.role);

    this.loginData.username = this.username;
    this.loginData.password = this.password;

    this.http.post<string>('http://localhost:9194/auth/authenticate', this.loginData,{ responseType: 'text' as 'json' })

    .subscribe(
      (response: string) => {

        // Handle successful login

        // console.log('Login successful', response);

        window.alert('Login successful');
        console.log("success");
        
        localStorage.setItem('token', response);
        console.log(response);

        const isLoggedIn = this.authService.login(this.role);

        if (isLoggedIn) {
          switch (this.role) {
            case 'ADMIN':
              alert('Login Successful! Welcome Admin');
              this.sharedService.triggerChangeLogin();
              this.router.navigate(['admin']);
              break;
            case 'DOCTOR':
              alert('Login Successful! Welcome Doctor');
              this.sharedService.triggerChangeLogin();
              this.router.navigate(['doctor']);
              break;
            case 'customer':
              alert('Login Successful! Welcome Customer');
              this.router.navigate(['customer']);
              break;
            default:
              // Handle any other roles if necessary
              break;
          }
        } else {
          alert('Invalid credentials');
        }
             

      },

      (error) => {

        // Handle HTTP error or network error

        // console.log('Login failed', error);
        console.log(error);
        
        window.alert('Login failed');



      }

    );











    // Simulate the login process with AuthService
   
}
}




// import { HttpClient } from '@angular/common/http';

// import { Component } from '@angular/core';

// import { Router } from '@angular/router';

 

// interface AuthRequest{

//   username:string,

//   password:string

// }

 

// @Component({

//   selector: 'app-loginuser',

//   templateUrl: './loginuser.component.html',

//   styleUrls: ['./loginuser.component.css']

// })

// export class LoginuserComponent {

//   username: string = '';

//   password: string ='';

 

//   constructor(private http: HttpClient, private router: Router) {}

 

//   loginData:AuthRequest = { username: this.username, password: this.password };

 

 

//   loginUser() {

 

//     this.loginData.username=this.username;

//     this.loginData.password=this.password;

   

//     this.http.post<string>('http://localhost:9189/login/redirect',this.loginData,{ responseType: 'text' as 'json' }).subscribe(

//       (response: string) =>{

//         if(response==='ROLE_USER'){

//           this.router.navigate(['']);

//         }

//         console.log("Successful");

       

//       },(error) => {

//         // Handle HTTP error or network error

//         // console.log('Login failed', error);

//         window.alert('Login failed');

//         console.log("Failed")

 

//       }

//     )

   

//     this.http.post<string>('http://localhost:9090/auth/authenticate', this.loginData,{ responseType: 'text' as 'json' })

//       .subscribe(

       

//         (response: string) => {

//           // Handle successful login

//           // console.log('Login successful', response);

//           window.alert('Login successful');

//           localStorage.setItem('token', response);

//           this.router.navigate(['']);          

//         },

//         (error) => {

//           // Handle HTTP error or network error

//           // console.log('Login failed', error);

//           window.alert('Login failed');

 

//         }

//       );

//   }

//   }
















