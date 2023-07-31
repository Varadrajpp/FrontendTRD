import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
 
 
  

    constructor(private router: Router) { }
  
    navigateTo(route: string) {
      this.router.navigate(['customer', route]);
    }
  
  
  
}
