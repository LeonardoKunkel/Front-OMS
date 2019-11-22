import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDieciseisProcedimientoPage } from './punto-dieciseis-procedimiento.page';

describe('PuntoDieciseisProcedimientoPage', () => {
  let component: PuntoDieciseisProcedimientoPage;
  let fixture: ComponentFixture<PuntoDieciseisProcedimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDieciseisProcedimientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDieciseisProcedimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
