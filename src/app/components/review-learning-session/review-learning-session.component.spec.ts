import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLearningSessionComponent } from './review-learning-session.component';

describe('ReviewLearningSessionComponent', () => {
  let component: ReviewLearningSessionComponent;
  let fixture: ComponentFixture<ReviewLearningSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLearningSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLearningSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
