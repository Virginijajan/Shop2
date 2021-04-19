import { TestBed } from '@angular/core/testing';

import { AllShopsService } from './all-shops.service';

describe('AllShopsService', () => {
  let service: AllShopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllShopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
