import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {IonicModule, NavController} from '@ionic/angular';

import { QrDialogPage } from './qr-dialog.page';
import {QrResultService} from '../../providers/qr-result.service';

const routes: Routes = [
  {
    path: '',
    component: QrDialogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QrDialogPage],
  providers: [
      NavController
  ]
})
export class QrDialogPageModule {}
