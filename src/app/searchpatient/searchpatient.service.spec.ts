import { TestBed, inject } from '@angular/core/testing';

import { SearchpatientService } from './searchpatient.service';

describe('SearchpatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchpatientService]
    });
  });

  it('should be created', inject([SearchpatientService], (service: SearchpatientService) => {
    expect(service).toBeTruthy();
  }));
});
