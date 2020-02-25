import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachadoresModalPage } from './despachadores-modal.page';

describe('DespachadoresModalPage', () => {
  let component: DespachadoresModalPage;
  let fixture: ComponentFixture<DespachadoresModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespachadoresModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespachadoresModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
