import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoUnoProcedimientoPage } from './punto-uno-procedimiento.page';

describe('PuntoUnoProcedimientoPage', () => {
  let component: PuntoUnoProcedimientoPage;
  let fixture: ComponentFixture<PuntoUnoProcedimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoUnoProcedimientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoUnoProcedimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
