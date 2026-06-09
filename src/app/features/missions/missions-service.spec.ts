import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MissionsService } from './missions-service';

describe('MissionsService', () => {
  let service: MissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(MissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
