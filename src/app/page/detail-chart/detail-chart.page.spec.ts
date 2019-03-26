import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChartPage } from './detail-chart.page';

describe('DetailChartPage', () => {
  let component: DetailChartPage;
  let fixture: ComponentFixture<DetailChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
