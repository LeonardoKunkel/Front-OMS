import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoCuatroMenuPage } from './punto-cuatro-menu.page';

describe('PuntoCuatroMenuPage', () => {
  let component: PuntoCuatroMenuPage;
  let fixture: ComponentFixture<PuntoCuatroMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoCuatroMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoCuatroMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
