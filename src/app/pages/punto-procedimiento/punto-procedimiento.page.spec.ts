import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoProcedimientoPage } from './punto-procedimiento.page';

describe('PuntoProcedimientoPage', () => {
  let component: PuntoProcedimientoPage;
  let fixture: ComponentFixture<PuntoProcedimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoProcedimientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoProcedimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
