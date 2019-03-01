import { TestBed, inject } from '@angular/core/testing';

import { ScorebadgeService } from './scorebadge.service';

describe('ScorebadgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScorebadgeService]
    });
  });

  it('should be created', inject([ScorebadgeService], (service: ScorebadgeService) => {
    expect(service).toBeTruthy();
  }));
});
