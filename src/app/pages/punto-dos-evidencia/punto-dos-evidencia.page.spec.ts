import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDosEvidenciaPage } from './punto-dos-evidencia.page';

describe('PuntoDosEvidenciaPage', () => {
  let component: PuntoDosEvidenciaPage;
  let fixture: ComponentFixture<PuntoDosEvidenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDosEvidenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDosEvidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
