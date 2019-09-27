import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfIM02Page } from './pdf-im02.page';

describe('PdfIM02Page', () => {
  let component: PdfIM02Page;
  let fixture: ComponentFixture<PdfIM02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfIM02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfIM02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
