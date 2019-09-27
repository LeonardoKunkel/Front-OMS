import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfIM01Page } from './pdf-im01.page';

describe('PdfIM01Page', () => {
  let component: PdfIM01Page;
  let fixture: ComponentFixture<PdfIM01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfIM01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfIM01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
