import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:9195/pg'; // Replace with your payment microservice URL
private apiUrl='http://localhost:8081/inventory/available-stock';
  constructor(private http: HttpClient) {}

  deleteAvailableStockandUpdate(batchId: string) {
    const url = `${this.apiUrl}/delete-by-batchid/${batchId}`;
    return this.http.delete(url);
  }
}
