import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'qr-dialog', loadChildren: './page/qr-dialog/qr-dialog.module#QrDialogPageModule'},
    {path: 'qr-page', loadChildren: './page/qr-page/qr-page.module#QrPagePageModule'},
  { path: 'removal', loadChildren: './page/removal/removal.module#RemovalPageModule' },
  { path: 'installation', loadChildren: './page/installation/installation.module#InstallationPageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
