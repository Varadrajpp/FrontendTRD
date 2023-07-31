import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  constructor(private router: Router,private authService: AuthService) { }

  navigateTo(route: string) {
    this.router.navigate(['doctor', route]);
  }

  isUserDoctor(): boolean {
    return this.authService.getRole() === 'doctor';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
