import { TestBed } from '@angular/core/testing';

import { CoursesProviderService } from './coursesprovider.service';

describe('CoursesProviderService', () => {
  let service: CoursesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
