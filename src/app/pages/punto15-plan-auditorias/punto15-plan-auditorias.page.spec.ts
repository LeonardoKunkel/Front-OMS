import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto15PlanAuditoriasPage } from './punto15-plan-auditorias.page';

describe('Punto15PlanAuditoriasPage', () => {
  let component: Punto15PlanAuditoriasPage;
  let fixture: ComponentFixture<Punto15PlanAuditoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto15PlanAuditoriasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto15PlanAuditoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
