import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovalPage } from './removal.page';

describe('RemovalPage', () => {
  let component: RemovalPage;
  let fixture: ComponentFixture<RemovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
