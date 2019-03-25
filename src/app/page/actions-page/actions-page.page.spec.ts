import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPagePage } from './actions-page.page';

describe('ActionsPagePage', () => {
  let component: ActionsPagePage;
  let fixture: ComponentFixture<ActionsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
