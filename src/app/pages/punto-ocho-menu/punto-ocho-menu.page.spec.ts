import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoOchoMenuPage } from './punto-ocho-menu.page';

describe('PuntoOchoMenuPage', () => {
  let component: PuntoOchoMenuPage;
  let fixture: ComponentFixture<PuntoOchoMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoOchoMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoOchoMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
