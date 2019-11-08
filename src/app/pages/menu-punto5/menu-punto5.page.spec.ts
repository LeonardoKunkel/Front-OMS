import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPunto5Page } from './menu-punto5.page';

describe('MenuPunto5Page', () => {
  let component: MenuPunto5Page;
  let fixture: ComponentFixture<MenuPunto5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPunto5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPunto5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
