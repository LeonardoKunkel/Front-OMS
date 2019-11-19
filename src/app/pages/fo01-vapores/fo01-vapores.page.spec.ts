import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo01VaporesPage } from './fo01-vapores.page';

describe('Fo01VaporesPage', () => {
  let component: Fo01VaporesPage;
  let fixture: ComponentFixture<Fo01VaporesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fo01VaporesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo01VaporesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
