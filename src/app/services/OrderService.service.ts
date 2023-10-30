import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CombinedOrder } from '../Model/Combinedorder.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
	private apiUrl='http://localhost:8082/orders';
	
  constructor(private http: HttpClient) {

	}
  
  createOrder(order: { name: any; email:any; phone:any; amount: any; }): Observable<any> {
		return this.http.post("http://localhost:9190/pg/createOrder", {
		customerName: order.name,
		email: order.email,
		phoneNumber: order.phone,
		amount: order.amount
		}, httpOptions);
	}


	  getAllCombinedOrders() {
		const url = `${this.apiUrl}/combined`;
		return this.http.get<CombinedOrder[]>(url);
	  }

	  verifyDoctorExists(doctorName: string) {
		const url = `${this.apiUrl}/doctor/verify?doctorName=${doctorName}`; // Assuming there is an API endpoint to verify the doctor order existence
		return this.http.get<boolean>(url);
	  }

}