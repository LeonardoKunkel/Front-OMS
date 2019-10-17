import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDocePage } from './punto-doce.page';

describe('PuntoDocePage', () => {
  let component: PuntoDocePage;
  let fixture: ComponentFixture<PuntoDocePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDocePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDocePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
