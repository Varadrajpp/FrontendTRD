
// import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';

 

 

@Injectable({

  providedIn: 'root'

})

export class TokenInterceptorService {

  constructor(private inject:Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // let authservice=this.inject.get(AuthService);

    const token = localStorage.getItem('token');

    if(req.url.includes('http://localhost:9090/admin/inventory/sold-stock/report')){

    console.log('token');

    let jwtToken = req.clone({

      setHeaders: {

        Authorization: 'Bearer '+token

      }

    });

    console.log(Headers);

    console.log(token);

   

   

    return next.handle(jwtToken);

  
  }
  return next.handle(req);

  }

}

 