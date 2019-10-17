import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P13ProgramaSimulacrosPage } from './p13-programa-simulacros.page';

describe('P13ProgramaSimulacrosPage', () => {
  let component: P13ProgramaSimulacrosPage;
  let fixture: ComponentFixture<P13ProgramaSimulacrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P13ProgramaSimulacrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P13ProgramaSimulacrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
