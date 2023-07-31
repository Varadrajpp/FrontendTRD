import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private changeLoginSubject=new Subject<void>();

  changeLogin$=this.changeLoginSubject.asObservable();

  triggerChangeLogin(){
    this.changeLoginSubject.next();
  }


}
