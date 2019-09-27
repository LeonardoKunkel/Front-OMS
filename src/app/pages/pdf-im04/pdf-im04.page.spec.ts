import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfIM04Page } from './pdf-im04.page';

describe('PdfIM04Page', () => {
  let component: PdfIM04Page;
  let fixture: ComponentFixture<PdfIM04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfIM04Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfIM04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
