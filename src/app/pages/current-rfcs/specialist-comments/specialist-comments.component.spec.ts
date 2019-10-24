import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistCommentsComponent } from './specialist-comments.component';

describe('SpecialistCommentsComponent', () => {
  let component: SpecialistCommentsComponent;
  let fixture: ComponentFixture<SpecialistCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
