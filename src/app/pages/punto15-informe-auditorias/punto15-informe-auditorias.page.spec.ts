import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto15InformeAuditoriasPage } from './punto15-informe-auditorias.page';

describe('Punto15InformeAuditoriasPage', () => {
  let component: Punto15InformeAuditoriasPage;
  let fixture: ComponentFixture<Punto15InformeAuditoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto15InformeAuditoriasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto15InformeAuditoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
