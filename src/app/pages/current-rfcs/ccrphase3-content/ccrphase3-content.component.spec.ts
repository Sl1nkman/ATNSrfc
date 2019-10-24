import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccrphase3ContentComponent } from './ccrphase3-content.component';

describe('Ccrphase3ContentComponent', () => {
  let component: Ccrphase3ContentComponent;
  let fixture: ComponentFixture<Ccrphase3ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ccrphase3ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ccrphase3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
