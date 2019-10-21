import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Catorce31semarnatPage } from './catorce31semarnat.page';

describe('Catorce31semarnatPage', () => {
  let component: Catorce31semarnatPage;
  let fixture: ComponentFixture<Catorce31semarnatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Catorce31semarnatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Catorce31semarnatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
