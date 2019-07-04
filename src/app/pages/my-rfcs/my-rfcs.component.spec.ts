import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRFCSComponent } from './my-rfcs.component';

describe('MyRFCSComponent', () => {
  let component: MyRFCSComponent;
  let fixture: ComponentFixture<MyRFCSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRFCSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRFCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
