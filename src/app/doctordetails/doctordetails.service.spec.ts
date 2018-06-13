import { TestBed, inject } from '@angular/core/testing';

import { DoctordetailsService } from './doctordetails.service';

describe('DoctordetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctordetailsService]
    });
  });

  it('should be created', inject([DoctordetailsService], (service: DoctordetailsService) => {
    expect(service).toBeTruthy();
  }));
});
