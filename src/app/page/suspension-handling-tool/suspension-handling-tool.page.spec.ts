import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensionHandlingToolPage } from './suspension-handling-tool.page';

describe('SuspensionHandlingToolPage', () => {
  let component: SuspensionHandlingToolPage;
  let fixture: ComponentFixture<SuspensionHandlingToolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspensionHandlingToolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspensionHandlingToolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
