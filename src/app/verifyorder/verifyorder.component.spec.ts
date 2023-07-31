import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { VerifyorderComponent } from './verifyorder.component';
import { OrderService } from '../services/OrderService.service';
import { CombinedOrder } from '../Model/Combinedorder.model';

describe('VerifyorderComponent', () => {
  let component: VerifyorderComponent;
  let fixture: ComponentFixture<VerifyorderComponent>;
  let orderService: OrderService;
  const mockOrders: CombinedOrder[] = [
    { 
      id: 1, 
      doctorName: 'Doctor 1',
      doctorContactNumber: '1234567890',
      doctorEmail: 'doctor1@example.com',
      customerName: 'Customer 1',
      customerContactNumber: '9876543210',
      customerEmail: 'customer1@example.com',
      drugName: 'Drug 1',
      drugPrice: 9.99,
      quantity: 1,
      totalPrice: 9.99,
      pickupDate: new Date()
    },
    { 
      id: 2, 
      doctorName: 'Doctor 2',
      doctorContactNumber: '1234567890',
      doctorEmail: 'doctor2@example.com',
      customerName: 'Customer 2',
      customerContactNumber: '9876543210',
      customerEmail: 'customer2@example.com',
      drugName: 'Drug 2',
      drugPrice: 19.99,
      quantity: 2,
      totalPrice: 39.98,
      pickupDate: new Date()
    }
  ];
  
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyorderComponent],
      imports: [HttpClientTestingModule],
      providers: [OrderService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyorderComponent);
    component = fixture.componentInstance;
    orderService = TestBed.inject(OrderService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should fetch orders on initialization', () => {
    //const mockOrders = [{ id: 1, doctorName: 'Doctor 1' }, { id: 2, doctorName: 'Doctor 2' }];
    spyOn(orderService, 'getAllCombinedOrders').and.returnValue(of(mockOrders));
  
    component.ngOnInit();
  
    expect(component.orders).toEqual(mockOrders);
    expect(orderService.getAllCombinedOrders).toHaveBeenCalled();
  });
  
  // it('should verify an order', () => {
  //   //const mockOrder = { id: 1, doctorName: 'Doctor 1' };
  //   spyOn(orderService, 'verifyDoctorExists').and.returnValue(of(true));
  
  //   component.verifyOrder(mockOrders);
  
  //   expect(orderService.verifyDoctorExists).toHaveBeenCalledWith(mockOrders.doctorName);
  //   // Add your assertions for the verification logic here
  // });
  
});
