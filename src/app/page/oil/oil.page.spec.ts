import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilPage } from './oil.page';

describe('OilPage', () => {
  let component: OilPage;
  let fixture: ComponentFixture<OilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
