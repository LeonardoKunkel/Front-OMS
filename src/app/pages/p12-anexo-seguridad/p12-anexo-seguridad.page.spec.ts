import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P12AnexoSeguridadPage } from './p12-anexo-seguridad.page';

describe('P12AnexoSeguridadPage', () => {
  let component: P12AnexoSeguridadPage;
  let fixture: ComponentFixture<P12AnexoSeguridadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P12AnexoSeguridadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P12AnexoSeguridadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
