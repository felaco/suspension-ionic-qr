import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDetailPage } from './material-detail.page';

describe('MaterialDetailPage', () => {
  let component: MaterialDetailPage;
  let fixture: ComponentFixture<MaterialDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
