import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P13PlanesRespuestaEmergenciaPage } from './p13-planes-respuesta-emergencia.page';

describe('P13PlanesRespuestaEmergenciaPage', () => {
  let component: P13PlanesRespuestaEmergenciaPage;
  let fixture: ComponentFixture<P13PlanesRespuestaEmergenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P13PlanesRespuestaEmergenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P13PlanesRespuestaEmergenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
