import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto15EvidenciaPage } from './punto15-evidencia.page';

describe('Punto15EvidenciaPage', () => {
  let component: Punto15EvidenciaPage;
  let fixture: ComponentFixture<Punto15EvidenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto15EvidenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto15EvidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
