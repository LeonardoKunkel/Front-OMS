import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistasModalPage } from './contratistas-modal.page';

describe('ContratistasModalPage', () => {
  let component: ContratistasModalPage;
  let fixture: ComponentFixture<ContratistasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratistasModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
