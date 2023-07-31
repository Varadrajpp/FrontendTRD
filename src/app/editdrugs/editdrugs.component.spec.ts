import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { EditdrugsComponent } from './editdrugs.component';
import { AvailableStockService } from '../services/available-stock.service';

describe('EditdrugsComponent', () => {
  let component: EditdrugsComponent;
  let fixture: ComponentFixture<EditdrugsComponent>;
  let mockAvailableStockService: jasmine.SpyObj<AvailableStockService>;
  let mockActivatedRoute: any;
  let mockRouter: any;

  beforeEach(() => {
    mockAvailableStockService = jasmine.createSpyObj('AvailableStockService', ['getAvailableStockById', 'updateDrug']);
    mockActivatedRoute = { params: of({ id: 1 }) };
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [EditdrugsComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: AvailableStockService, useValue: mockAvailableStockService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditdrugsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch drug details on component initialization', () => {
    const mockDrug = { id: 1, drugName: 'Drug 1' };
    mockAvailableStockService.getAvailableStockById.and.returnValue(of(mockDrug));

    component.ngOnInit();

    expect(component.drug).toEqual(mockDrug);
    expect(mockAvailableStockService.getAvailableStockById).toHaveBeenCalledWith(component.drugId);
  });

  it('should update drug details and navigate to the drugs list page', () => {
    const mockUpdatedDrug = { id: 1, drugName: 'Updated Drug 1' };
    mockAvailableStockService.updateDrug.and.returnValue(of(mockUpdatedDrug));

    component.updateDrug();

    expect(mockAvailableStockService.updateDrug).toHaveBeenCalledWith(component.drugId, component.drug);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['customer/view-drugs']);
  });
});
