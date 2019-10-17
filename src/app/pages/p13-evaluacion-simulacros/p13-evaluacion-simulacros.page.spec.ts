import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P13EvaluacionSimulacrosPage } from './p13-evaluacion-simulacros.page';

describe('P13EvaluacionSimulacrosPage', () => {
  let component: P13EvaluacionSimulacrosPage;
  let fixture: ComponentFixture<P13EvaluacionSimulacrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P13EvaluacionSimulacrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P13EvaluacionSimulacrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
