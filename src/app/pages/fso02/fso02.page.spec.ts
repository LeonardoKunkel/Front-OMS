import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fso02Page } from './fso02.page';

describe('Fso02Page', () => {
  let component: Fso02Page;
  let fixture: ComponentFixture<Fso02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fso02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fso02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
