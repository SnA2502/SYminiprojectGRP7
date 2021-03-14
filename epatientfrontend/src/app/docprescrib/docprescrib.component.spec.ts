import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocprescribComponent } from './docprescrib.component';

describe('DocprescribComponent', () => {
  let component: DocprescribComponent;
  let fixture: ComponentFixture<DocprescribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocprescribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocprescribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
