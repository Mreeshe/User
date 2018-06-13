import { TestBed, inject } from '@angular/core/testing';

import { DiagnosticcentreService } from './diagnosticcentre.service';

describe('DiagnosticcentreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiagnosticcentreService]
    });
  });

  it('should be created', inject([DiagnosticcentreService], (service: DiagnosticcentreService) => {
    expect(service).toBeTruthy();
  }));
});
