import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'qr-dialog', loadChildren: './page/qr-dialog/qr-dialog.module#QrDialogPageModule'},
<<<<<<< HEAD
    {path: 'qr-page', loadChildren: './page/qr-page/qr-page.module#QrPagePageModule'},
  { path: 'removal', loadChildren: './page/removal/removal.module#RemovalPageModule' },
  { path: 'installation', loadChildren: './page/installation/installation.module#InstallationPageModule' },
=======
    {path: 'removal', loadChildren: './page/removal/removal.module#RemovalPageModule'},
    {
        path: 'material-detail/:index',
        loadChildren: './page/material-detail/material-detail.module#MaterialDetailPageModule'
    },
    {path: 'index-list', loadChildren: './page/index-list/index-list.module#IndexListPageModule'},
    {path: 'actions-page', loadChildren: './page/actions-page/actions-page.module#ActionsPagePageModule'},
    {path: 'actions-page-redirect', redirectTo:'actions-page'}
>>>>>>> bcb0d9a6eaa0994733e2465f94ad3c39727e530f
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
