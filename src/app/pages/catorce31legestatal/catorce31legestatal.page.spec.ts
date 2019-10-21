import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Catorce31legestatalPage } from './catorce31legestatal.page';

describe('Catorce31legestatalPage', () => {
  let component: Catorce31legestatalPage;
  let fixture: ComponentFixture<Catorce31legestatalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Catorce31legestatalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Catorce31legestatalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
