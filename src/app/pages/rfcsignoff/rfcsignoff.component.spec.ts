import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFCsignoffComponent } from './rfcsignoff.component';

describe('RFCsignoffComponent', () => {
  let component: RFCsignoffComponent;
  let fixture: ComponentFixture<RFCsignoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFCsignoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFCsignoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
