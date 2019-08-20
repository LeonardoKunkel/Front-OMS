import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfVisualPage } from './pdf-visual.page';

describe('PdfVisualPage', () => {
  let component: PdfVisualPage;
  let fixture: ComponentFixture<PdfVisualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfVisualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfVisualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
