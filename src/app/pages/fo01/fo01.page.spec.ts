import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FO01Page } from './fo01.page';

describe('FO01Page', () => {
  let component: FO01Page;
  let fixture: ComponentFixture<FO01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FO01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FO01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
