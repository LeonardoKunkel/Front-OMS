import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoQuincePage } from './punto-quince.page';

describe('PuntoQuincePage', () => {
  let component: PuntoQuincePage;
  let fixture: ComponentFixture<PuntoQuincePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoQuincePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoQuincePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
