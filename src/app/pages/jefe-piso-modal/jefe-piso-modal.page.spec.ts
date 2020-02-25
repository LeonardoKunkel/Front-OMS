import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JefePisoModalPage } from './jefe-piso-modal.page';

describe('JefePisoModalPage', () => {
  let component: JefePisoModalPage;
  let fixture: ComponentFixture<JefePisoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JefePisoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JefePisoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
