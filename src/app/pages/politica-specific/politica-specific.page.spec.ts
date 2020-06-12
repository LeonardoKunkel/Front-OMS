import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaSpecificPage } from './politica-specific.page';

describe('PoliticaSpecificPage', () => {
  let component: PoliticaSpecificPage;
  let fixture: ComponentFixture<PoliticaSpecificPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaSpecificPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaSpecificPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
