import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoCincoMatrizPage } from './punto-cinco-matriz.page';

describe('PuntoCincoMatrizPage', () => {
  let component: PuntoCincoMatrizPage;
  let fixture: ComponentFixture<PuntoCincoMatrizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoCincoMatrizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoCincoMatrizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
