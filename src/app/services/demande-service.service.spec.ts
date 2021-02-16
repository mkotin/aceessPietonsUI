import { TestBed } from '@angular/core/testing';

import { DemandeServiceService } from './demande-service.service';

describe('DemandeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeServiceService = TestBed.get(DemandeServiceService);
    expect(service).toBeTruthy();
  });
});
