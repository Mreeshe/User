import { TestBed, inject } from '@angular/core/testing';

import { CliniccenterService } from './cliniccenter.service';

describe('CliniccenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CliniccenterService]
    });
  });

  it('should be created', inject([CliniccenterService], (service: CliniccenterService) => {
    expect(service).toBeTruthy();
  }));
});
