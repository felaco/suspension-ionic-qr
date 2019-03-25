import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexListPage } from './index-list.page';

describe('IndexListPage', () => {
  let component: IndexListPage;
  let fixture: ComponentFixture<IndexListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
