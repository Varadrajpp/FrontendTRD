import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsuppliersComponent } from './searchsuppliers.component';

describe('SearchsuppliersComponent', () => {
  let component: SearchsuppliersComponent;
  let fixture: ComponentFixture<SearchsuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchsuppliersComponent]
    });
    fixture = TestBed.createComponent(SearchsuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
