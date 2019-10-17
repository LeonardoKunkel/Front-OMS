import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P12SeguridadContratistaPage } from './p12-seguridad-contratista.page';

describe('P12SeguridadContratistaPage', () => {
  let component: P12SeguridadContratistaPage;
  let fixture: ComponentFixture<P12SeguridadContratistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P12SeguridadContratistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P12SeguridadContratistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
