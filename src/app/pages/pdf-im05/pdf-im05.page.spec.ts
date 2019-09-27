import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfIM05Page } from './pdf-im05.page';

describe('PdfIM05Page', () => {
  let component: PdfIM05Page;
  let fixture: ComponentFixture<PdfIM05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfIM05Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfIM05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
