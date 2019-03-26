import {Component, QueryList, ViewChildren} from '@angular/core';

import {IonRouterOutlet, NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private navCtrl: NavController,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        }).then(() => this.manageBackButton());
    }

    // https://forum.ionicframework.com/t/hardware-back-button-with-ionic-4/137905/56
    private manageBackButton() {
        this.routerOutlets.forEach(router => {
            this.platform.backButton.subscribe(() => {
                if (!router.canGoBack()){
                    if (this.router.url === '/actions-page'){
                        this.navCtrl.navigateBack('/home')
                    } else {
                        navigator['app'].exitApp();
                    }
                }
            })
        })
    }
}
