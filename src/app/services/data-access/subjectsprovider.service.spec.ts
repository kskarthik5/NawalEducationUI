import { TestBed } from '@angular/core/testing';

import { SubjectsProviderService } from './subjectsprovider.service';

describe('SubjectsProviderService', () => {
  let service: SubjectsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
