import { TestBed } from '@angular/core/testing';

import { NewSubjectService } from './new-subject.service';

describe('NewSubjectService', () => {
  let service: NewSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
