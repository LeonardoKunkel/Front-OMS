import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoOnceFO02Page } from './punto-once-fo02.page';

describe('PuntoOnceFO02Page', () => {
  let component: PuntoOnceFO02Page;
  let fixture: ComponentFixture<PuntoOnceFO02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoOnceFO02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoOnceFO02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
