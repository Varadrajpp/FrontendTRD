import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  roleAs: string | null = null;

  constructor() {
    // Get the login state and role from local storage on service initialization
    this.isLogin = localStorage.getItem('STATE') === 'true';
    this.roleAs = localStorage.getItem('ROLE');
  }

  login(value: string) {
    // Simulate the login process
    if (value === 'ADMIN' || value === 'DOCTOR' || value === 'customer') {
      this.isLogin = true;
      this.roleAs = value;
      localStorage.setItem('STATE', 'true');
      localStorage.setItem('ROLE', this.roleAs);
      return true;
    }

    return false;
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
  }

  isLoggedIn() {
    return this.isLogin;
  }

  getRole() {
    return this.roleAs;
  }
}
