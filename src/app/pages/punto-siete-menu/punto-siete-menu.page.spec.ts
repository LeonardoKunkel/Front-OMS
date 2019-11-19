import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoSieteMenuPage } from './punto-siete-menu.page';

describe('PuntoSieteMenuPage', () => {
  let component: PuntoSieteMenuPage;
  let fixture: ComponentFixture<PuntoSieteMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoSieteMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoSieteMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
