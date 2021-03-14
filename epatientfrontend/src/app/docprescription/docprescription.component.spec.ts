import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocprescriptionComponent } from './docprescription.component';

describe('DocprescriptionComponent', () => {
  let component: DocprescriptionComponent;
  let fixture: ComponentFixture<DocprescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocprescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
