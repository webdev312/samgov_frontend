import { TestBed } from '@angular/core/testing';

import { DatamngService } from './datamng.service';

describe('DatamngService', () => {
  let service: DatamngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
