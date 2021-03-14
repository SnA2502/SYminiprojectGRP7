import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchangeComponent } from './patchange.component';

describe('PatchangeComponent', () => {
  let component: PatchangeComponent;
  let fixture: ComponentFixture<PatchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
