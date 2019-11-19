import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoOchoListaDistribucionPage } from './punto-ocho-lista-distribucion.page';

describe('PuntoOchoListaDistribucionPage', () => {
  let component: PuntoOchoListaDistribucionPage;
  let fixture: ComponentFixture<PuntoOchoListaDistribucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoOchoListaDistribucionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoOchoListaDistribucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
