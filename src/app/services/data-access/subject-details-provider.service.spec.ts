import { TestBed } from '@angular/core/testing';

import { SubjectDetailsProviderService } from './subject-details-provider.service';

describe('SubjectDetailsProviderService', () => {
  let service: SubjectDetailsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectDetailsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
