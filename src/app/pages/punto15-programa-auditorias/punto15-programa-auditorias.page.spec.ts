import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto15ProgramaAuditoriasPage } from './punto15-programa-auditorias.page';

describe('Punto15ProgramaAuditoriasPage', () => {
  let component: Punto15ProgramaAuditoriasPage;
  let fixture: ComponentFixture<Punto15ProgramaAuditoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto15ProgramaAuditoriasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto15ProgramaAuditoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
