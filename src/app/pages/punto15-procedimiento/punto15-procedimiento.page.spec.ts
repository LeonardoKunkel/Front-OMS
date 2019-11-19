import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto15ProcedimientoPage } from './punto15-procedimiento.page';

describe('Punto15ProcedimientoPage', () => {
  let component: Punto15ProcedimientoPage;
  let fixture: ComponentFixture<Punto15ProcedimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto15ProcedimientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto15ProcedimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
