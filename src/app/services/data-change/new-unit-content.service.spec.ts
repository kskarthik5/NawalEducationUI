import { TestBed } from '@angular/core/testing';

import { NewUnitContentService } from './new-unit-content.service';

describe('NewUnitContentService', () => {
  let service: NewUnitContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUnitContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
