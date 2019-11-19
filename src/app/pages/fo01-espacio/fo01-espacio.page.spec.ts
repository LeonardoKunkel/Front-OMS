import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo01EspacioPage } from './fo01-espacio.page';

describe('Fo01EspacioPage', () => {
  let component: Fo01EspacioPage;
  let fixture: ComponentFixture<Fo01EspacioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fo01EspacioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo01EspacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
