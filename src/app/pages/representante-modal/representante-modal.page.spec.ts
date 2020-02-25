import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentanteModalPage } from './representante-modal.page';

describe('RepresentanteModalPage', () => {
  let component: RepresentanteModalPage;
  let fixture: ComponentFixture<RepresentanteModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentanteModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentanteModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
