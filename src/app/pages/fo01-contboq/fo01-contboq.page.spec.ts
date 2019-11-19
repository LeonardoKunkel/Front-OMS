import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo01ContboqPage } from './fo01-contboq.page';

describe('Fo01ContboqPage', () => {
  let component: Fo01ContboqPage;
  let fixture: ComponentFixture<Fo01ContboqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fo01ContboqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo01ContboqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
