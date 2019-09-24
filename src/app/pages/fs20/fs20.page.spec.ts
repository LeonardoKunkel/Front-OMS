import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fs20Page } from './fs20.page';

describe('Fs20Page', () => {
  let component: Fs20Page;
  let fixture: ComponentFixture<Fs20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fs20Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fs20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
