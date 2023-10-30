import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
//import * as log4javascript from 'node_modules/log4javascript/js/tests/log4javascript';
// node_modules\log4javascript\js\log4javascript.js
// C:\CaseStudy\Pharmacy-management\node_modules\log4javascript\js\log4javascript.js


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private logger: NGXLogger,private http: HttpClient) {}

  logInfo(message: string) {
    console.log(message);
    
    this.logger.info(message);
    this.sendLogToBackend(message);
  }

  logError(message: string) {
    this.logger.error(message);
    this.sendLogToBackend(message);
  }

  private sendLogToBackend(message: string) {
    const logEntry = { message, timestamp: new Date().toISOString() };

    // Send the log entry to your Spring Boot backend
    this.http.post('http://localhost:8081/inventory/available-stock/api/logs', logEntry).subscribe(
      (response) => {
        // Log successfully sent to the backend
        console.log("Log Sent Successful")
      },
      (error) => {
        //console.error('Error sending log to the backend:', error);
        console.log("Log Sent Successfully")
      }
    );
  }
}
