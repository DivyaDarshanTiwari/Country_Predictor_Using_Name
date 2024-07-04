import { TestBed } from '@angular/core/testing';

import { CountryPredictorService } from './country-predictor.service';

describe('CountryPredictorService', () => {
  let service: CountryPredictorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryPredictorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
