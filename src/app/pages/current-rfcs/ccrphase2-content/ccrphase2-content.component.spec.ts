import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccrphase2ContentComponent } from './ccrphase2-content.component';

describe('Ccrphase2ContentComponent', () => {
  let component: Ccrphase2ContentComponent;
  let fixture: ComponentFixture<Ccrphase2ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ccrphase2ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ccrphase2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
