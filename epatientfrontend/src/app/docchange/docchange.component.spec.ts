import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocchangeComponent } from './docchange.component';

describe('DocchangeComponent', () => {
  let component: DocchangeComponent;
  let fixture: ComponentFixture<DocchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
