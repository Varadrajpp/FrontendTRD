import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Supplier {
  supplierEmail: string;
  drugName: string;
  updatedDrugName:string;
  updatedSupplierEmail:string;
}

@Component({
  selector: 'app-addsuppliers',
  templateUrl: './addsuppliers.component.html',
  styleUrls: ['./addsuppliers.component.css']
})
export class AddsuppliersComponent implements OnInit {
  supplierList: Supplier[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchSuppliers();
  }

  fetchSuppliers() {
    this.http.get<Supplier[]>('http://localhost:8081/inventory/view-suppliers')
      .subscribe((response) => {
        this.supplierList = response;
      });
  }

  editSupplier(supplier: Supplier) {
    const payload = {
      supplierEmail: supplier.updatedSupplierEmail,
      drugName: supplier.updatedDrugName
    };

    // Check if the supplierEmail exists before making the request
    if (supplier.supplierEmail) {
      this.http.put<any>(`http://localhost:8081/inventory/edit-supplier/${supplier.supplierEmail}`, payload)
        .subscribe((response) => {
          console.log(response);
          this.fetchSuppliers(); // Update the supplier list after editing
        }, (error) => {
          console.error(error);
        });
    } else {
      console.error("Supplier's Email is missing.");
    }
  }
}
