import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDiezOchoPage } from './punto-diez-ocho.page';

describe('PuntoDiezOchoPage', () => {
  let component: PuntoDiezOchoPage;
  let fixture: ComponentFixture<PuntoDiezOchoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDiezOchoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDiezOchoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
