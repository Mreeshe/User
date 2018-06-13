import { TestBed, inject } from '@angular/core/testing';

import { SuborgService } from './suborg.service';

describe('SuborgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuborgService]
    });
  });

  it('should be created', inject([SuborgService], (service: SuborgService) => {
    expect(service).toBeTruthy();
  }));
});
