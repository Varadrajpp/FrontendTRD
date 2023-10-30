import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AvailableStock } from '../Model/available-stock.model';
import { AvailableStockService } from '../services/available-stock.service';


@Component({
  selector: 'app-adddrugs',
  templateUrl: './adddrugs.component.html',
  styleUrls: ['./adddrugs.component.css']
})
export class AdddrugsComponent {
  availableStockList: AvailableStock[] = [];
  newDrug: AvailableStock = new AvailableStock();

  constructor(private availableStockService: AvailableStockService) {}

  addDrug(): void {
    const emptyDrug: AvailableStock = new AvailableStock();
    this.availableStockList.push(this.newDrug);
  }

  saveDrugs(): void {
    this.availableStockService.addAvailableStock([this.newDrug])
      .subscribe(response => {
        // Handle the response from the API
      });
  }
}
