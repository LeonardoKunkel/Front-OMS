import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoSieteProcedimientoPage } from './punto-siete-procedimiento.page';

describe('PuntoSieteProcedimientoPage', () => {
  let component: PuntoSieteProcedimientoPage;
  let fixture: ComponentFixture<PuntoSieteProcedimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoSieteProcedimientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoSieteProcedimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
