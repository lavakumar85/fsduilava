import { TestBed, inject } from '@angular/core/testing';

import { TestUserService } from './test-user.service';

describe('TestUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestUserService]
    });
  });

  it('should be created', inject([TestUserService], (service: TestUserService) => {
    expect(service).toBeTruthy();
  }));
});
