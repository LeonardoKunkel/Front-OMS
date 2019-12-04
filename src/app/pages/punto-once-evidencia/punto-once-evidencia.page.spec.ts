import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoOnceEvidenciaPage } from './punto-once-evidencia.page';

describe('PuntoOnceEvidenciaPage', () => {
  let component: PuntoOnceEvidenciaPage;
  let fixture: ComponentFixture<PuntoOnceEvidenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoOnceEvidenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoOnceEvidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
