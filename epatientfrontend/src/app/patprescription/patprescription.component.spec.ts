import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatprescriptionComponent } from './patprescription.component';

describe('PatprescriptionComponent', () => {
  let component: PatprescriptionComponent;
  let fixture: ComponentFixture<PatprescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatprescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
