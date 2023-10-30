import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { SearchsuppliersComponent } from './searchsuppliers.component';
import { ApiService } from 'src/app/services/supplierservice.service';
import { SupplierDTO } from 'src/app/Model/supplier.DTO';

describe('SearchsuppliersComponent', () => {
  let component: SearchsuppliersComponent;
  let fixture: ComponentFixture<SearchsuppliersComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  const mockSuppliers = [
    { supplierEmail: 'supplier1@example.com', drugName: 'Drug 1' ,batchId:'BATCH001'},
    { supplierEmail: 'supplier2@example.com', drugName: 'Drug 2' ,batchId:'BATCH002'},
    // Add more mock data if needed
  ];

  function createSupplierDTO(supplier: any): SupplierDTO {
    return {
      supplierEmail: supplier.supplierEmail,
      drugName: supplier.drugName,
      batchId:supplier.batchId
    };
  }

  beforeEach(waitForAsync(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['getSuppliers']);
    mockApiService.getSuppliers.and.returnValue(of(mockSuppliers));

    TestBed.configureTestingModule({
      declarations: [SearchsuppliersComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: ApiService, useValue: mockApiService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch suppliers on ngOnInit', () => {
    component.ngOnInit();
    expect(mockApiService.getSuppliers).toHaveBeenCalled();
    expect(component.suppliers).toEqual(mockSuppliers.map(createSupplierDTO));
  });

  it('should display supplier details', () => {
    component.suppliers = mockSuppliers.map(createSupplierDTO);
    fixture.detectChanges();

    const supplierCards = fixture.nativeElement.querySelectorAll('.supplier-card');
    expect(supplierCards.length).toBe(mockSuppliers.length);

    supplierCards.forEach((card: any, index: number) => {
      const supplier = mockSuppliers[index];
      const emailElement = card.querySelector('.supplier-email');
      const drugNameElement = card.querySelector('.drug-name');

      expect(emailElement.textContent).toContain(supplier.supplierEmail);
      expect(drugNameElement.textContent).toContain(supplier.drugName);
    });
  });


});
