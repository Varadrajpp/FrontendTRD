import { Component } from '@angular/core';
import { AvailableStock } from '../Model/available-stock.model';
import { AvailableStockService } from '../services/available-stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdrugs',
  templateUrl: './viewdrugs.component.html',
  styleUrls: ['./viewdrugs.component.css']
})
export class ViewdrugsComponent {

  availableStockList: AvailableStock[] = [];

  constructor(private availableStockService: AvailableStockService,
    private router: Router) {}

  ngOnInit(): void {
    this.getAllAvailableStock();
  }

  getAllAvailableStock(): void {
    this.availableStockService.getAllAvailableStock()
      .subscribe((data: AvailableStock[]) => {
        this.availableStockList = data;
        this.availableStockList.forEach(stock => {
          console.log('Price:', stock.price);
        });
      });
  }
  buyDrug(batchId: string): void {
    // Redirect to buy component with batch ID
    this.router.navigate(['buy', batchId]);
  }

}
