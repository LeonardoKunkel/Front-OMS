import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoModalPage } from './encargado-modal.page';

describe('EncargadoModalPage', () => {
  let component: EncargadoModalPage;
  let fixture: ComponentFixture<EncargadoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncargadoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
