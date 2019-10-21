import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Catorce31comisionPage } from './catorce31comision.page';

describe('Catorce31comisionPage', () => {
  let component: Catorce31comisionPage;
  let fixture: ComponentFixture<Catorce31comisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Catorce31comisionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Catorce31comisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
