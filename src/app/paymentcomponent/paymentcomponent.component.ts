import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../services/OrderService.service';
import { PaymentService } from '../services/PaymentService.service';
import { ActivatedRoute } from '@angular/router';
import * as bigInt from 'big-integer';


declare var Razorpay: any;

@Component({
  selector: 'app-paymentcomponent',
  templateUrl: './paymentcomponent.component.html',
  styleUrls: ['./paymentcomponent.component.css']
})
export class PaymentcomponentComponent {


  form: any = {};
  paymentId: string = '';
  error: string = '';
  batchId: string='';
  price: number=1;
  quantity: number=1;
  totalprice!:number;
  disableInput = true; 
  totalPrice!:number;

  enableInput() {
    this.disableInput = false;
  }

  options = {
    key: '',
    amount: this.totalPrice,
    name: 'Pharmacy-Management-System',
    description: 'Case Study',
    image: 'https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png',
    order_id: '',
    paymentStatus:'Success',
    
 
   
    handler: (response: any) => {
      const event = new CustomEvent('payment.success', {
        detail: response,
        bubbles: true,
        cancelable: true
      });
      window.dispatchEvent(event);
    },
    prefill: {
      name: '',
      email: '',
      contact: ''
    },
    notes: {
      address: ''
    },
    theme: {
      color: '#3399cc'
    }
  };

  constructor(private http: HttpClient, private orderService: OrderService,private paymentService :PaymentService,private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.batchId = params['batchId'];
      this.price = params['price'];
      this.quantity = params['quantity'];

      // You can now use the batchId, price, and quantity in your component
      console.log('Batch ID:', this.batchId);
      console.log('Price:', this.price);
      console.log('Quantity:', this.quantity);
   
    this.totalPrice= this.totalprice=this.price*this.quantity;
console.log(this.price);
console.log(this.quantity);
    });
  }
 

  onSubmit(): void {
    this.paymentId = '';
    this.error = '';
    this.orderService.createOrder(this.form).subscribe(
      (data: any) => {
        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = this.totalPrice;
        this.options.prefill.name = 'Varadraj Patil ';
        this.options.prefill.email = 'varadrajpatil777@gmail.com';
        this.options.prefill.contact = '9834877113';
        this.options.paymentStatus='success';

         // Replace with the actual batch ID
        this.paymentService.deleteAvailableStockandUpdate(this.batchId).subscribe(
          () => {
            console.log('Available stock deleted and updated successfully');
          },
          (error: any) => {
            console.log('Error deleting available stock:', error);
          }
        );
    

        if (data.pgName === 'razor2') {
          
          this.options.image = '';
          const rzp1 = new Razorpay(this.options);
         
          rzp1.open(
            console.log(Response),
          );
          rzp1.on('payment.success', (response: any) => {
            console.log(response);
            this.onPaymentSuccess(response); // Call the onPaymentSuccess method passing the response
          });
          rzp1.on('payment.failed', (response: any) => {
            console.log(response);
            console.log(response.error.code);
            console.log(response.error.description);
            console.log(response.error.source);
            console.log(response.error.step);
            console.log(response.error.reason);
            console.log(response.error.metadata.order_id);
            console.log(response.error.metadata.payment_id);
            this.error = response.error.reason;
          });
        } else {
          const rzp2 = new Razorpay(this.options);
          rzp2.open();
        }
      },
      (err: any) => {
        this.error = err.error.message;
      }
    );
  }

  onPaymentSuccess(event: any): void {
   
    console.log(Response);
    const batchId = 'BATCH002'; // Replace with the actual batch ID
    this.paymentService.deleteAvailableStockandUpdate(batchId).subscribe(
      () => {
        console.log('Available stock deleted and updated successfully');
      },
      (error: any) => {
        console.log('Error deleting available stock:', error);
      }
    );
  }

  
 

}
