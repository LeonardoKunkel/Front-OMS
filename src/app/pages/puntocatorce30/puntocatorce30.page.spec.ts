import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Puntocatorce30Page } from './puntocatorce30.page';

describe('Puntocatorce30Page', () => {
  let component: Puntocatorce30Page;
  let fixture: ComponentFixture<Puntocatorce30Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Puntocatorce30Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Puntocatorce30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
