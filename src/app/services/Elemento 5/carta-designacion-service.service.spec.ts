import { TestBed } from '@angular/core/testing';

import { CartaDesignacionServiceService } from './carta-designacion-service.service';

describe('CartaDesignacionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartaDesignacionServiceService = TestBed.get(CartaDesignacionServiceService);
    expect(service).toBeTruthy();
  });
});
