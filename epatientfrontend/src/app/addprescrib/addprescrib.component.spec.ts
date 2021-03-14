import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprescribComponent } from './addprescrib.component';

describe('AddprescribComponent', () => {
  let component: AddprescribComponent;
  let fixture: ComponentFixture<AddprescribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprescribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprescribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
