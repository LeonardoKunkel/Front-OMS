import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo06Page } from './fo06.page';

describe('Fo06Page', () => {
  let component: Fo06Page;
  let fixture: ComponentFixture<Fo06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fo06Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
