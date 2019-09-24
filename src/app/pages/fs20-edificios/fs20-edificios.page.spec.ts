import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fs20EdificiosPage } from './fs20-edificios.page';

describe('Fs20EdificiosPage', () => {
  let component: Fs20EdificiosPage;
  let fixture: ComponentFixture<Fs20EdificiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fs20EdificiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fs20EdificiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
