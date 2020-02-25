import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoModalPage } from './mantenimiento-modal.page';

describe('MantenimientoModalPage', () => {
  let component: MantenimientoModalPage;
  let fixture: ComponentFixture<MantenimientoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
