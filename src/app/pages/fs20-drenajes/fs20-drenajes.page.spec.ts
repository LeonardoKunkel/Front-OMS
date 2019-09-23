import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fs20DrenajesPage } from './fs20-drenajes.page';

describe('Fs20DrenajesPage', () => {
  let component: Fs20DrenajesPage;
  let fixture: ComponentFixture<Fs20DrenajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fs20DrenajesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fs20DrenajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
