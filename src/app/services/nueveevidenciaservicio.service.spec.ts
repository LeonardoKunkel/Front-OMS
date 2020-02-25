import { TestBed } from '@angular/core/testing';

import { NueveevidenciaservicioService } from './nueveevidenciaservicio.service';

describe('NueveevidenciaservicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NueveevidenciaservicioService = TestBed.get(NueveevidenciaservicioService);
    expect(service).toBeTruthy();
  });
});
