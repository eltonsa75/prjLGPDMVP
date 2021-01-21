import { TestBed } from '@angular/core/testing';

import { CscService } from './csc.service';

describe('CscService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CscService = TestBed.get(CscService);
    expect(service).toBeTruthy();
  });
});
