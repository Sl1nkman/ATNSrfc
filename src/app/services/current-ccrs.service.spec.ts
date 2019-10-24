import { TestBed } from '@angular/core/testing';

import { CurrentCcrsService } from './current-ccrs.service';

describe('CurrentCcrsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentCcrsService = TestBed.get(CurrentCcrsService);
    expect(service).toBeTruthy();
  });
});
