import { TestBed } from '@angular/core/testing';

import { CurrentSubjectDataService } from './current-subject-data.service';

describe('CurrentSubjectDataService', () => {
  let service: CurrentSubjectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentSubjectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
