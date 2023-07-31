import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  images: string[]=[
    './assets/img/slider/img-1.jpg',
      './assets/img/slider/img-2.jpg',
      './assets/img/slider/img-3.jpg',
      './assets/img/store.jpg',
      './assets/img/wap1.jpg',
      './assets/img/slider/img-5.jpg',
      './assets/img/pharmacy.jpg',
      './assets/img/pharma_shop.jpg',
  ];
  imageIndex = 1;

  constructor() { }

  

}
