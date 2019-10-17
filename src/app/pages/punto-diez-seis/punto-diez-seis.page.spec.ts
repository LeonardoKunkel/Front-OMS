import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDiezSeisPage } from './punto-diez-seis.page';

describe('PuntoDiezSeisPage', () => {
  let component: PuntoDiezSeisPage;
  let fixture: ComponentFixture<PuntoDiezSeisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDiezSeisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDiezSeisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
