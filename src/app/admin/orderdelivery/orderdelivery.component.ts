import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orderdelivery',
  templateUrl: './orderdelivery.component.html',
  styleUrls: ['./orderdelivery.component.css']
})
export class OrderdeliveryComponent {

  batchId!: string;
  responseMessage!: string;

  constructor(private http: HttpClient) { }

  markStockAsDelivered() {
    this.http.post<any>(`http://localhost:8081/inventory/delivered-stock/${this.batchId}/mark-as-delivered`, {})
      .subscribe(
        response => {
          this.responseMessage = response.message;
        },
        error => {
          console.log(error);
          this.responseMessage = 'Error occurred while marking stock as delivered';
        }
      );
  }

}
