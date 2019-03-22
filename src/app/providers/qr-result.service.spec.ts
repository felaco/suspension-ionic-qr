import { TestBed } from '@angular/core/testing';

import { QrResultService } from './qr-result.service';

describe('QrResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrResultService = TestBed.get(QrResultService);
    expect(service).toBeTruthy();
  });
});
