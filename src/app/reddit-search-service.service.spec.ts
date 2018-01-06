import { TestBed, inject } from '@angular/core/testing';

import { RedditSearchServiceService } from './reddit-search-service.service';

describe('RedditSearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditSearchServiceService]
    });
  });

  it('should be created', inject([RedditSearchServiceService], (service: RedditSearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
