import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDiezfs19Page } from './punto-diezfs19.page';

describe('PuntoDiezfs19Page', () => {
  let component: PuntoDiezfs19Page;
  let fixture: ComponentFixture<PuntoDiezfs19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDiezfs19Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDiezfs19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
