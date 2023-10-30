import { Component } from '@angular/core';
import { CombinedOrder } from '../Model/Combinedorder.model';
import { OrderService } from '../services/OrderService.service';

@Component({
  selector: 'app-verifyorder',
  templateUrl: './verifyorder.component.html',
  styleUrls: ['./verifyorder.component.css']
})
export class VerifyorderComponent {

  orders!: CombinedOrder[];
  isVerified!: boolean;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getAllCombinedOrders().subscribe(
      (data: CombinedOrder[]) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  verifyOrder(order: CombinedOrder) {
    this.orderService.verifyDoctorExists(order.doctorName).subscribe(
      (isVerified: boolean) => {
        if (isVerified) {
          
          console.log('Order is verified');

        } else {
          
          console.log('Order is not verified');
        }
      },
      (error) => {
        console.error('Error verifying order:', error);
      }
    );
  }
  

}
