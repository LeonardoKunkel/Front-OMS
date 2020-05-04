import { TestBed } from '@angular/core/testing';

import { EvidenciaElementoUnoService } from './evidencia-elemento-uno.service';

describe('EvidenciaElementoUnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvidenciaElementoUnoService = TestBed.get(EvidenciaElementoUnoService);
    expect(service).toBeTruthy();
  });
});
