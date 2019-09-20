import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo08Page } from './fo08.page';

describe('Fo08Page', () => {
  let component: Fo08Page;
  let fixture: ComponentFixture<Fo08Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fo08Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
