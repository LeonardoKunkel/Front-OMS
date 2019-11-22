import { TestBed } from '@angular/core/testing';

import { MapsServicesService } from './maps-services.service';

describe('MapsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapsServicesService = TestBed.get(MapsServicesService);
    expect(service).toBeTruthy();
  });
});
