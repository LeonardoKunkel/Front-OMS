import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fso06Page } from './fso06.page';

describe('Fso06Page', () => {
  let component: Fso06Page;
  let fixture: ComponentFixture<Fso06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fso06Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fso06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
