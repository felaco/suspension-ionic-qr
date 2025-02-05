import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'removal', loadChildren: './page/removal/removal.module#RemovalPageModule'},
    {
        path: 'material-detail/:index',
        loadChildren: './page/material-detail/material-detail.module#MaterialDetailPageModule'
    },
    {path: 'index-list', loadChildren: './page/index-list/index-list.module#IndexListPageModule'},
    {path: 'actions-page', loadChildren: './page/actions-page/actions-page.module#ActionsPagePageModule'},
    {path: 'oil', loadChildren: './page/oil/oil.module#OilPageModule' },
    {path: 'qr-dialog', loadChildren: './page/qr-dialog/qr-dialog.module#QrDialogPageModule'},
    {path: 'description', loadChildren: './page/description/description.module#DescriptionPageModule'},
    {path: 'installation', loadChildren: './page/installation/installation.module#InstallationPageModule'},
    {path: 'setup', loadChildren: './page/setup/setup.module#SetupPageModule'},
    {path: 'detail-chart', loadChildren: './page/detail-chart/detail-chart.module#DetailChartPageModule'},
  { path: 'suspension-handling-tool', loadChildren: './page/suspension-handling-tool/suspension-handling-tool.module#SuspensionHandlingToolPageModule' },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
