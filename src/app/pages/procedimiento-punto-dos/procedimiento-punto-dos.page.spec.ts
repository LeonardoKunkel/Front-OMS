import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientoPuntoDosPage } from './procedimiento-punto-dos.page';

describe('ProcedimientoPuntoDosPage', () => {
  let component: ProcedimientoPuntoDosPage;
  let fixture: ComponentFixture<ProcedimientoPuntoDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientoPuntoDosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientoPuntoDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
