import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fs20DispensariosPage } from './fs20-dispensarios.page';

describe('Fs20DispensariosPage', () => {
  let component: Fs20DispensariosPage;
  let fixture: ComponentFixture<Fs20DispensariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fs20DispensariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fs20DispensariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
