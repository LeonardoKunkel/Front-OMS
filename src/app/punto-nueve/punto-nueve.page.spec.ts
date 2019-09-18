import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoNuevePage } from './punto-nueve.page';

describe('PuntoNuevePage', () => {
  let component: PuntoNuevePage;
  let fixture: ComponentFixture<PuntoNuevePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoNuevePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoNuevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
