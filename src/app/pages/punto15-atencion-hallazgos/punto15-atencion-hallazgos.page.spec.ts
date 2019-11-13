import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto15AtencionHallazgosPage } from './punto15-atencion-hallazgos.page';

describe('Punto15AtencionHallazgosPage', () => {
  let component: Punto15AtencionHallazgosPage;
  let fixture: ComponentFixture<Punto15AtencionHallazgosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto15AtencionHallazgosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto15AtencionHallazgosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
