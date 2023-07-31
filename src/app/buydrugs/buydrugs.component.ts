import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buydrugs',
  templateUrl: './buydrugs.component.html',
  styleUrls: ['./buydrugs.component.css']
})
export class BuydrugsComponent {
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.paymentForm = this.formBuilder.group({
    //   price: ['10', Validators.required],
    //   currency: ['', Validators.required],
    //   method: ['', Validators.required],
    //   intent: ['sale'],
    //   description: ['', Validators.required]
    // });
  }

  // makePayment() {
  //   if (this.paymentForm.valid) {
  //     const paymentData = this.paymentForm.value;
  //     // Perform the payment logic here
  //     console.log(paymentData);
  //   }
  // }
}
