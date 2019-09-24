import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fs20TanquesPage } from './fs20-tanques.page';

describe('Fs20TanquesPage', () => {
  let component: Fs20TanquesPage;
  let fixture: ComponentFixture<Fs20TanquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fs20TanquesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fs20TanquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
