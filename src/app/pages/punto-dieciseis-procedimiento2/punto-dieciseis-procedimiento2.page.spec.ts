import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDieciseisProcedimiento2Page } from './punto-dieciseis-procedimiento2.page';

describe('PuntoDieciseisProcedimiento2Page', () => {
  let component: PuntoDieciseisProcedimiento2Page;
  let fixture: ComponentFixture<PuntoDieciseisProcedimiento2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDieciseisProcedimiento2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDieciseisProcedimiento2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
