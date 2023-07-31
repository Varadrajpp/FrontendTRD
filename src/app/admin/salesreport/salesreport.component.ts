import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


import { SoldStock } from 'src/app/Model/sold-stock.model';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent {
  salesReportData: SoldStock[] = [];

  constructor(private http: HttpClient) {}

  generateSalesReport() {
    const headers = new HttpHeaders({ responseType: 'blob' as 'json' });

    this.http
      .get('http://localhost:9090/inventory/sold-stock/report', {
        headers,
        responseType: 'blob',
        observe: 'response', // Add this line to access the full response
      })
      .subscribe((response: HttpResponse<Blob>) => {
        const blob = new Blob([response.body as BlobPart], { type: 'application/pdf' });
        this.downloadFile(blob);
      });
  }

  private downloadFile(blob: Blob) {
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'sales_report.pdf';
    downloadLink.click();
  }

 
}
