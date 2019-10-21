import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Catorce31secretariaPage } from './catorce31secretaria.page';

describe('Catorce31secretariaPage', () => {
  let component: Catorce31secretariaPage;
  let fixture: ComponentFixture<Catorce31secretariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Catorce31secretariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Catorce31secretariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
