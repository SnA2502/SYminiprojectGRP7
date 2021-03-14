import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatprofComponent } from './viewpatprof.component';

describe('ViewpatprofComponent', () => {
  let component: ViewpatprofComponent;
  let fixture: ComponentFixture<ViewpatprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpatprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpatprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
