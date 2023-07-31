import { Component, NgModule, Pipe, PipeTransform  } from '@angular/core';
import { AvailableStockService } from '../services/available-stock.service';
import { AvailableStock } from '../Model/available-stock.model';

@Pipe({
  name: 'keyvalue'
})
export class KeyValuePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return Object.entries(value);
  }
}
@Component({
  selector: 'app-searchdrugs',
  templateUrl: './searchdrugs.component.html',
  styleUrls: ['./searchdrugs.component.css'],
 
})

export class SearchdrugsComponent {
  id!: number;
  drugName!: string;
  batchid!: string;
  searchResults!: AvailableStock[];



  constructor(private inventoryService: AvailableStockService) { }

  getAvailableStockById() {
    this.inventoryService.getAvailableStockById(this.id).subscribe(
      (response: AvailableStock) => {
        // Handle the response data
        console.log(response);
        this.searchResults = [response];
      },
      error => {
        // Handle errors
        console.error(error);
        this.searchResults = [];
      }
    );
  }

  searchAvailableStockByDrugName() {
    this.inventoryService.searchAvailableStockByDrugName(this.drugName).subscribe(
      (response: AvailableStock[]) => {
        // Handle the response data
        console.log(response);
        this.searchResults = response;
      },
      error => {
        // Handle errors
        console.error(error);
        this.searchResults = [];
      }
    );
  }

  getAvailableStockByBatchId() {
    this.inventoryService.getAvailableStockByBatchId(this.batchid).subscribe(
      (response: AvailableStock[]) => {
        // Handle the response data
        console.log(response);
        this.searchResults = response;
      },
      error => {
        // Handle errors
        console.error(error);
        this.searchResults = [];
      }
    );
  }
}
