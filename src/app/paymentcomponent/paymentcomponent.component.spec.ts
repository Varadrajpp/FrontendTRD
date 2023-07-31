import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentcomponentComponent } from './paymentcomponent.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { PaymentService } from '../services/PaymentService.service';
import { OrderService } from '../services/OrderService.service';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('PaymentcomponentComponent', () => {
  let component: PaymentcomponentComponent;
  let fixture: ComponentFixture<PaymentcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentcomponentComponent],
      imports: [FormsModule], // Import FormsModule for ngModel
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form on initialization', () => {
    // Since there are no required fields, the form should be valid on initialization
    expect(component.form.valid).toBeTruthy();
  });

  

  it('should show error messages for invalid inputs', () => {
    // Set invalid values for Name, Email, Phone, and Amount fields
    component.form.name = ''; // Invalid (required)
    component.form.email = 'invalid-email'; // Invalid email format
    component.form.phone = '12345'; // Invalid phone length
    component.totalPrice = 0; // Invalid (required)

    fixture.detectChanges();

    // Check for error messages displayed in the template
    expect(fixture.nativeElement.querySelector('[name="name"] .alert-danger').textContent).toContain('Name is required');
    expect(fixture.nativeElement.querySelector('[name="email"] .alert-danger').textContent).toContain('Email is required');
    expect(fixture.nativeElement.querySelector('[name="phone"] .alert-danger').textContent).toContain('Phone must be 10 digits');
    expect(fixture.nativeElement.querySelector('[name="amount"] .alert-danger').textContent).toContain('Amount is required');
  });

  it('should submit the payment form and handle payment success', () => {
    // Mock OrderService, PaymentService, and HttpClient to simulate API calls
    const mockOrderService = TestBed.inject(OrderService);
    const mockPaymentService = TestBed.inject(PaymentService);
    const mockHttpClient = TestBed.inject(HttpClient);

    // Spy on necessary methods of mock services to simulate behavior
    spyOn(mockOrderService, 'createOrder').and.returnValue(of({ secretId: 'abc123', razorpayOrderId: 'order123', pgName: 'razor2' }));
    spyOn(mockPaymentService, 'deleteAvailableStockandUpdate').and.returnValue(of(''));
    spyOn(mockHttpClient, 'post').and.returnValue(of({}));

    // Set valid values for form fields
    component.form.name = 'John Doe';
    component.form.email = 'john@example.com';
    component.form.phone = '1234567890';
    component.totalPrice = 100;

    fixture.detectChanges();

    // Trigger form submission
    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));

    // Expect payment success behavior
    expect(mockOrderService.createOrder).toHaveBeenCalled();
    expect(mockPaymentService.deleteAvailableStockandUpdate).toHaveBeenCalled();
    expect(mockHttpClient.post).toHaveBeenCalled();
    // ... Add more expectations as needed based on your component's behavior
  });

  it('should handle payment failure and display error message', () => {
    // Mock OrderService, PaymentService, and HttpClient to simulate API calls
    const mockOrderService = TestBed.inject(OrderService);
    const mockPaymentService = TestBed.inject(PaymentService);
    const mockHttpClient = TestBed.inject(HttpClient);

    // Spy on necessary methods of mock services to simulate behavior
    spyOn(mockOrderService, 'createOrder').and.returnValue(throwError({ error: { message: 'Payment failed' } }));
    spyOn(mockPaymentService, 'deleteAvailableStockandUpdate').and.returnValue(of(''));
    spyOn(mockHttpClient, 'post').and.returnValue(of({}));

    // Set valid values for form fields
    component.form.name = 'John Doe';
    component.form.email = 'john@example.com';
    component.form.phone = '1234567890';
    component.totalPrice = 100;

    fixture.detectChanges();

    
    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));

    // Expect payment failure behavior
    expect(mockOrderService.createOrder).toHaveBeenCalled();
    expect(mockPaymentService.deleteAvailableStockandUpdate).not.toHaveBeenCalled(); // Payment failed, so stock should not be updated
    expect(mockHttpClient.post).not.toHaveBeenCalled(); // Payment failed, so the payment request should not be made
    expect(component.error).toBe('Payment failed');
   
  });

  
});
