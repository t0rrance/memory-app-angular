import { TestBed } from '@angular/core/testing';

import { LearningSessionService } from './learning-session.service';

describe('LearningSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearningSessionService = TestBed.get(LearningSessionService);
    expect(service).toBeTruthy();
  });
});
