import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto15MenuPage } from './punto15-menu.page';

describe('Punto15MenuPage', () => {
  let component: Punto15MenuPage;
  let fixture: ComponentFixture<Punto15MenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto15MenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto15MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
