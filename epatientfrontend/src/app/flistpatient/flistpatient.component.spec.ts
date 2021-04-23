import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FListpatientComponent } from './flistpatient.component';

describe('FListpatientComponent', () => {
  let component: FListpatientComponent;
  let fixture: ComponentFixture<FListpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FListpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FListpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
