import { TestBed } from '@angular/core/testing';

import { PortfoliotableService } from './portfoliotable.service';

describe('PortfoliotableService', () => {
  let service: PortfoliotableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoliotableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
