import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P12CartaResponsivaPage } from './p12-carta-responsiva.page';

describe('P12CartaResponsivaPage', () => {
  let component: P12CartaResponsivaPage;
  let fixture: ComponentFixture<P12CartaResponsivaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P12CartaResponsivaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P12CartaResponsivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
