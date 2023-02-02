import { TestBed } from '@angular/core/testing';

import { EnrolledSubjectDataService } from './enrolled-subject-data.service';

describe('EnrolledSubjectDataService', () => {
  let service: EnrolledSubjectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolledSubjectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
