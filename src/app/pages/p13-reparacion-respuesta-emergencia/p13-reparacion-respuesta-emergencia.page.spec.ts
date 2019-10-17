import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P13ReparacionRespuestaEmergenciaPage } from './p13-reparacion-respuesta-emergencia.page';

describe('P13ReparacionRespuestaEmergenciaPage', () => {
  let component: P13ReparacionRespuestaEmergenciaPage;
  let fixture: ComponentFixture<P13ReparacionRespuestaEmergenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P13ReparacionRespuestaEmergenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P13ReparacionRespuestaEmergenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
