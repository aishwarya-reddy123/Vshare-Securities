import { TestBed } from '@angular/core/testing';

import { CompanytableService } from './companytable.service';

describe('CompanytableService', () => {
  let service: CompanytableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanytableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
