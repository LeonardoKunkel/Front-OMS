import { TestBed } from '@angular/core/testing';

import { ObjetivosMetasService } from './objetivos-metas.service';

describe('ObjetivosMetasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjetivosMetasService = TestBed.get(ObjetivosMetasService);
    expect(service).toBeTruthy();
  });
});
