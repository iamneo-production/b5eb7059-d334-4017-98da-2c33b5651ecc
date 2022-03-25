import { TestBed } from '@angular/core/testing';

import { PremiumplansService } from './premiumplans.service';

describe('PremiumplansService', () => {
  let service: PremiumplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiumplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
