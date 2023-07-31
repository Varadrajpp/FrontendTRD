import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SupplierDTO } from 'src/app/Model/supplier.DTO';
import { ApiService } from 'src/app/services/supplierservice.service';

@Component({
  selector: 'app-deletesuppliers',
  templateUrl: './deletesuppliers.component.html',
  styleUrls: ['./deletesuppliers.component.css']
})
export class DeletesuppliersComponent implements OnInit {

  suppliers!: SupplierDTO[];

  constructor(private apiService: ApiService, private http: HttpClient) { }

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

  deleteSupplier(drugName: string) {
    this.apiService.deleteSupplier(drugName).subscribe(
      () => {
        console.log('Supplier deleted successfully');
        // Handle success, such as refreshing the supplier list
        this.fetchSuppliers();
      },
      (error) => {
        console.error('Error deleting supplier:', error);
        // Handle error, show error message, etc.
      }
    );
  }
}
