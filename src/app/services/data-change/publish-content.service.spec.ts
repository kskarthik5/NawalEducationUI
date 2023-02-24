import { TestBed } from '@angular/core/testing';

import { PublishContentService } from './publish-content.service';

describe('PublishContentService', () => {
  let service: PublishContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
