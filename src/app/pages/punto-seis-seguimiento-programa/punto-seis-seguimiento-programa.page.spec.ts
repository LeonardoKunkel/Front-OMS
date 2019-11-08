import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoSeisSeguimientoProgramaPage } from './punto-seis-seguimiento-programa.page';

describe('PuntoSeisSeguimientoProgramaPage', () => {
  let component: PuntoSeisSeguimientoProgramaPage;
  let fixture: ComponentFixture<PuntoSeisSeguimientoProgramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoSeisSeguimientoProgramaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoSeisSeguimientoProgramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
