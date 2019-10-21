import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Puntocatorcefs29Page } from './puntocatorcefs29.page';

describe('Puntocatorcefs29Page', () => {
  let component: Puntocatorcefs29Page;
  let fixture: ComponentFixture<Puntocatorcefs29Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Puntocatorcefs29Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Puntocatorcefs29Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
