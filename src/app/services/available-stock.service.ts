import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvailableStock } from '../Model/available-stock.model';

@Injectable({
  providedIn: 'root'
})
export class AvailableStockService {
  

 
  private apiUrl = 'http://localhost:8081/inventory/available-stock';


  constructor(private http: HttpClient) {}

  addAvailableStock(availableStockList: AvailableStock[]): Observable<AvailableStock[]> {
    return this.http.post<AvailableStock[]>(this.apiUrl, availableStockList);
  }

  getAllAvailableStock(): Observable<AvailableStock[]> {
    return this.http.get<AvailableStock[]>(`${this.apiUrl}`);
  }

  deleteAvailableStockById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteAvailableStockByDrugName(drugName: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-by-drug-name/${drugName}`);
  }

  deleteAvailableStockByBatchId(batchId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-by-batch-id/${batchId}`);
  }

  getAvailableStockById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  searchAvailableStockByDrugName(drugName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search-by-drug-name/${drugName}`);
  }

  searchAvailableStockByBatchId(batchid: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/searchbyBatchid/${batchid}`);
  }

  getAvailableStockByBatchId(batchid: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/searchbyBatchid/${batchid}`);
  }
  updateDrug(drugId: number, drug: any) {
    const url = `${this.apiUrl}/update/${drugId}`;
    return this.http.put(url, drug);
  }

}
