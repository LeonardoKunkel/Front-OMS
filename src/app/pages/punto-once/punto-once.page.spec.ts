import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoOncePage } from './punto-once.page';

describe('PuntoOncePage', () => {
  let component: PuntoOncePage;
  let fixture: ComponentFixture<PuntoOncePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoOncePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoOncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
