import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoSeisMenuPage } from './punto-seis-menu.page';

describe('PuntoSeisMenuPage', () => {
  let component: PuntoSeisMenuPage;
  let fixture: ComponentFixture<PuntoSeisMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoSeisMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoSeisMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
