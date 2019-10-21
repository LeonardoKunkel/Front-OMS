import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoUnoEvidenciaPage } from './punto-uno-evidencia.page';

describe('PuntoUnoEvidenciaPage', () => {
  let component: PuntoUnoEvidenciaPage;
  let fixture: ComponentFixture<PuntoUnoEvidenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoUnoEvidenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoUnoEvidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
