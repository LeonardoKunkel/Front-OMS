import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoOchoEvidenciaPage } from './punto-ocho-evidencia.page';

describe('PuntoOchoEvidenciaPage', () => {
  let component: PuntoOchoEvidenciaPage;
  let fixture: ComponentFixture<PuntoOchoEvidenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoOchoEvidenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoOchoEvidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
