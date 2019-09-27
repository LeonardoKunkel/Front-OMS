import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo07Page } from './fo07.page';

describe('Fo07Page', () => {
  let component: Fo07Page;
  let fixture: ComponentFixture<Fo07Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fo07Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
