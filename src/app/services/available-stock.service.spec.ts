import { TestBed } from '@angular/core/testing';

import { AvailableStockService } from './available-stock.service';

describe('AvailableStockService', () => {
  let service: AvailableStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
