import { TestBed } from '@angular/core/testing';

import { UsertableService } from './usertable.service';

describe('UsertableService', () => {
  let service: UsertableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsertableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
