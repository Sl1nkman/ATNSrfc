import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccrphase1ContentComponent } from './ccrphase1-content.component';

describe('Ccrphase1ContentComponent', () => {
  let component: Ccrphase1ContentComponent;
  let fixture: ComponentFixture<Ccrphase1ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ccrphase1ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ccrphase1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
