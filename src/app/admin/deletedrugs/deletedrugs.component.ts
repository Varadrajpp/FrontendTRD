import { Component } from '@angular/core';
import { AvailableStockService } from 'src/app/services/available-stock.service';

@Component({
  selector: 'app-deletedrugs',
  templateUrl: './deletedrugs.component.html',
  styleUrls: ['./deletedrugs.component.css']
})
export class DeletedrugsComponent {

  id!: number;
  drugName!: string;
  batchId!: string;

  constructor(private availableStockService: AvailableStockService) {}

  ngOnInit(): void {}

  deleteById(): void {
    this.availableStockService.deleteAvailableStockById(this.id)
      .subscribe(() => {
        // Handle successful deletion
      });
  }

  deleteByDrugName(): void {
    this.availableStockService.deleteAvailableStockByDrugName(this.drugName)
      .subscribe(() => {
        // Handle successful deletion
      });
  }

  deleteByBatchId(): void {
    this.availableStockService.deleteAvailableStockByBatchId(this.batchId)
      .subscribe(() => {
        // Handle successful deletion
      });
  }
}
