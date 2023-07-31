import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupplierDTO } from '../Model/supplier.DTO';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8081/inventory';

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<SupplierDTO[]> {
    return this.http.get<SupplierDTO[]>(`${this.baseUrl}/view-suppliers`);
  }

  deleteSupplier(drugName: string): Observable<void> {
    const url = `${this.baseUrl}/delete-supplier?drugName=${encodeURIComponent(drugName)}`;
    return this.http.delete<void>(url);
  }
}
