import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SupplierDTO } from 'src/app/Model/supplier.DTO';
import { ApiService } from 'src/app/services/supplierservice.service';

@Component({
  selector: 'app-viewsuppliers',
  templateUrl: './viewsuppliers.component.html',
  styleUrls: ['./viewsuppliers.component.css']
})
export class ViewsuppliersComponent {
  suppliers!: SupplierDTO[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchSuppliers();
  }

  fetchSuppliers() {
    this.apiService.getSuppliers().subscribe(
      (response: SupplierDTO[]) => {
        this.suppliers = response;
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }
}
