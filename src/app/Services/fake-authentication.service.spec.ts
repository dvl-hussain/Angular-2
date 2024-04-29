import { TestBed } from '@angular/core/testing';

import { FakeAuthenticationService } from './fake-authentication.service';

describe('FakeAuthenticationService', () => {
  let service: FakeAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
