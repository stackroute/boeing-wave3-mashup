import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFetchComponent } from './template-fetch.component';

describe('TemplateFetchComponent', () => {
  let component: TemplateFetchComponent;
  let fixture: ComponentFixture<TemplateFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
