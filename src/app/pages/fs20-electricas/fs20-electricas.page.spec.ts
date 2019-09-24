import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fs20ElectricasPage } from './fs20-electricas.page';

describe('Fs20ElectricasPage', () => {
  let component: Fs20ElectricasPage;
  let fixture: ComponentFixture<Fs20ElectricasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fs20ElectricasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fs20ElectricasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
