import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enquiry } from './enquiry.component';

describe('Enquiry', () => {
  let component: Enquiry;
  let fixture: ComponentFixture<Enquiry>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enquiry ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enquiry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
