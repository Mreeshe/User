import { TestBed, inject } from '@angular/core/testing';

import { DatadictionaryService } from './datadictionary.service';

describe('DatadictionaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatadictionaryService]
    });
  });

  it('should be created', inject([DatadictionaryService], (service: DatadictionaryService) => {
    expect(service).toBeTruthy();
  }));
});
