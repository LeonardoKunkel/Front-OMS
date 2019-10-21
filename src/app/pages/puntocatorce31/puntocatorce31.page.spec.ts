import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Puntocatorce31Page } from './puntocatorce31.page';

describe('Puntocatorce31Page', () => {
  let component: Puntocatorce31Page;
  let fixture: ComponentFixture<Puntocatorce31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Puntocatorce31Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Puntocatorce31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
