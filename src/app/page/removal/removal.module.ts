import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RemovalPage} from './removal.page';
import {ComponentsModule} from "../../components/components.module";

const routes: Routes = [
    {
        path: '',
        component: RemovalPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    declarations: [RemovalPage]
})
export class RemovalPageModule {
}
