import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrDialogPage } from './qr-dialog.page';

describe('QrDialogPage', () => {
  let component: QrDialogPage;
  let fixture: ComponentFixture<QrDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrDialogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
