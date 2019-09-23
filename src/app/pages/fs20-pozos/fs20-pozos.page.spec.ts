import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fs20PozosPage } from './fs20-pozos.page';

describe('Fs20PozosPage', () => {
  let component: Fs20PozosPage;
  let fixture: ComponentFixture<Fs20PozosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fs20PozosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fs20PozosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
