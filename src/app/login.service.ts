import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   constructor(private http:HttpClient) { }
// private apirUrl=
login(username:string,password:string){
   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   return this.http.get("http://localhost:8182/",{headers,responseType: 'text' as 'json'})
  }

//   login(username: string, password: string) {
//     const loginRequest = { username, password };
//     const url = `${this.apiUrl}/delete-by-batch-id/${batchId}`;
//     return this.http.post(url, loginRequest)
//   }
}
