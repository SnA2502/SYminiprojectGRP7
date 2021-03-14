import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdocprofComponent } from './viewdocprof.component';

describe('ViewdocprofComponent', () => {
  let component: ViewdocprofComponent;
  let fixture: ComponentFixture<ViewdocprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdocprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdocprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
