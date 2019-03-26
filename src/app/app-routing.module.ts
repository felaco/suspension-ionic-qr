import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'qr-dialog', loadChildren: './page/qr-dialog/qr-dialog.module#QrDialogPageModule'},

    {path: 'installation', loadChildren: './page/installation/installation.module#InstallationPageModule' },

    {path: 'removal', loadChildren: './page/removal/removal.module#RemovalPageModule'},
    {
    path: 'material-detail/:index',
        loadChildren: './page/material-detail/material-detail.module#MaterialDetailPageModule'
    },
    {path: 'index-list', loadChildren: './page/index-list/index-list.module#IndexListPageModule'},
    {path: 'actions-page', loadChildren: './page/actions-page/actions-page.module#ActionsPagePageModule'},
    {path: 'actions-page-redirect', redirectTo: 'actions-page'},
  { path: 'oil', loadChildren: './page/oil/oil.module#OilPageModule' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
