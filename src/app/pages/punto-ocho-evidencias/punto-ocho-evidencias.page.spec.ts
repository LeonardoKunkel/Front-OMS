import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoOchoEvidenciasPage } from './punto-ocho-evidencias.page';

describe('PuntoOchoEvidenciasPage', () => {
  let component: PuntoOchoEvidenciasPage;
  let fixture: ComponentFixture<PuntoOchoEvidenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoOchoEvidenciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoOchoEvidenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
