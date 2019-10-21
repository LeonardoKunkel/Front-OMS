import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDiezfo09Page } from './punto-diezfo09.page';

describe('PuntoDiezfo09Page', () => {
  let component: PuntoDiezfo09Page;
  let fixture: ComponentFixture<PuntoDiezfo09Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDiezfo09Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDiezfo09Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
