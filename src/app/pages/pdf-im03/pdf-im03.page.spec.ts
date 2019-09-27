import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfIM03Page } from './pdf-im03.page';

describe('PdfIM03Page', () => {
  let component: PdfIM03Page;
  let fixture: ComponentFixture<PdfIM03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfIM03Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfIM03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
