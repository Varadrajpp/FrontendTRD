import { Component } from '@angular/core';
import { CombinedOrder } from 'src/app/Model/Combinedorder.model';
import { OrderService } from 'src/app/services/OrderService.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent {

  orders!: CombinedOrder[];

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
}
