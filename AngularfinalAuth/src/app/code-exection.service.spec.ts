import { TestBed, inject } from '@angular/core/testing';

import { CodeExectionService } from './code-exection.service';

describe('CodeExectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeExectionService]
    });
  });

  it('should be created', inject([CodeExectionService], (service: CodeExectionService) => {
    expect(service).toBeTruthy();
  }));
});
