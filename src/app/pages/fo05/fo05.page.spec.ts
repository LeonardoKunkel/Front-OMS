import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo05Page } from './fo05.page';

describe('Fo05Page', () => {
  let component: Fo05Page;
  let fixture: ComponentFixture<Fo05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fo05Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
