import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmaddpatComponent } from './admaddpat.component';

describe('AdmaddpatComponent', () => {
  let component: AdmaddpatComponent;
  let fixture: ComponentFixture<AdmaddpatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmaddpatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmaddpatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
