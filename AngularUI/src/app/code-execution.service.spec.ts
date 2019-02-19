import { TestBed, inject } from '@angular/core/testing';

import { CodeExecutionService } from './code-execution.service';

describe('CodeExecutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeExecutionService]
    });
  });

  it('should be created', inject([CodeExecutionService], (service: CodeExecutionService) => {
    expect(service).toBeTruthy();
  }));
});
