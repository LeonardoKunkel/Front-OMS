import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Puntocatorce32Page } from './puntocatorce32.page';

describe('Puntocatorce32Page', () => {
  let component: Puntocatorce32Page;
  let fixture: ComponentFixture<Puntocatorce32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Puntocatorce32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Puntocatorce32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
