import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fs22Page } from './fs22.page';

describe('Fs22Page', () => {
  let component: Fs22Page;
  let fixture: ComponentFixture<Fs22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fs22Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fs22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
