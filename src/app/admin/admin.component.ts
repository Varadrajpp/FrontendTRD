import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router,private authService: AuthService) { }

  navigateTo(route: string) {
    this.router.navigate(['admin', route]);
  }

  isUserAdmin(): boolean {
    return this.authService.getRole() === 'admin';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
