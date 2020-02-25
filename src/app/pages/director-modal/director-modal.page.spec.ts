import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorModalPage } from './director-modal.page';

describe('DirectorModalPage', () => {
  let component: DirectorModalPage;
  let fixture: ComponentFixture<DirectorModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
