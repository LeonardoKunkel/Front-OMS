import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Catorce31aseaPage } from './catorce31asea.page';

describe('Catorce31aseaPage', () => {
  let component: Catorce31aseaPage;
  let fixture: ComponentFixture<Catorce31aseaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Catorce31aseaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Catorce31aseaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
