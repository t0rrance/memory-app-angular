import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLearningSessionListComponent } from './review-learning-session-list.component';

describe('ReviewLearningSessionListComponent', () => {
  let component: ReviewLearningSessionListComponent;
  let fixture: ComponentFixture<ReviewLearningSessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLearningSessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLearningSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
