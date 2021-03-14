import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatprescribComponent } from './patprescrib.component';

describe('PatprescribComponent', () => {
  let component: PatprescribComponent;
  let fixture: ComponentFixture<PatprescribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatprescribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatprescribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
