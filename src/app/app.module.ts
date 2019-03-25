import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';
import {QrResultService} from './providers/qr-result.service';
import {ComponentsModule} from "./components/components.module";
import {MaterialsToolsRequiredService} from "./providers/materials-tools-required.service";

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ComponentsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        QRScanner,
        QrResultService,
        MaterialsToolsRequiredService,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
