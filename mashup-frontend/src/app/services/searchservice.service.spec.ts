import { SearchserviceComponent } from './../_components/searchservice/searchservice.component';
import { TestBed, inject } from '@angular/core/testing';

import { SearchserviceService } from './searchservice.service';
import { async } from 'q';

describe('SearchserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchserviceService]
    });
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchserviceComponent ]
    })
    .compileComponents();
  }));

  it('should be created', inject([SearchserviceService],
    (service: SearchserviceService) => {
    expect(service).toBeTruthy();
  }));
});
