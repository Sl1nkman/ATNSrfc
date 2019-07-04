import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRFCSComponent } from './current-rfcs.component';

describe('CurrentRFCSComponent', () => {
  let component: CurrentRFCSComponent;
  let fixture: ComponentFixture<CurrentRFCSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRFCSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRFCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
