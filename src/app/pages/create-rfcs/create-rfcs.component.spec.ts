import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRfcsComponent } from './create-rfcs.component';

describe('CreateRfcsComponent', () => {
  let component: CreateRfcsComponent;
  let fixture: ComponentFixture<CreateRfcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRfcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRfcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
