import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddocComponent } from './addoc.component';

describe('AddocComponent', () => {
  let component: AddocComponent;
  let fixture: ComponentFixture<AddocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
