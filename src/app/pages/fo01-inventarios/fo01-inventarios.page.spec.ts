import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo01InventariosPage } from './fo01-inventarios.page';

describe('Fo01InventariosPage', () => {
  let component: Fo01InventariosPage;
  let fixture: ComponentFixture<Fo01InventariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fo01InventariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo01InventariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
