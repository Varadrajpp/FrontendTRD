import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvailableStockService } from '../services/available-stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editdrugs',
  templateUrl: './editdrugs.component.html',
  styleUrls: ['./editdrugs.component.css']
})
export class EditdrugsComponent {

  drugId!: number;
  id!:number;
  drug: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private apiService: AvailableStockService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.drugId = +params['id'];
      this.getDrugDetails();
    });
  }

  getDrugDetails() {
    this.apiService.getAvailableStockById(this.drugId).subscribe(
      data => {
        this.drug = data;
      },
      error => {
        console.log('Error occurred while fetching drug details:', error);
      }
    );
  }

  updateDrug() {
    this.apiService.updateDrug(this.drugId, this.drug).subscribe(data => {
      console.log('Drug updated successfully.');
      this.router.navigate(['customer/view-drugs']); // Redirect to the drugs list page
    });
  }

}
