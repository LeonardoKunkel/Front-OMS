import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P13PlaneacionSimulacrosPage } from './p13-planeacion-simulacros.page';

describe('P13PlaneacionSimulacrosPage', () => {
  let component: P13PlaneacionSimulacrosPage;
  let fixture: ComponentFixture<P13PlaneacionSimulacrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P13PlaneacionSimulacrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P13PlaneacionSimulacrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
