import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P13ActaConformacionPage } from './p13-acta-conformacion.page';

describe('P13ActaConformacionPage', () => {
  let component: P13ActaConformacionPage;
  let fixture: ComponentFixture<P13ActaConformacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P13ActaConformacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P13ActaConformacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
