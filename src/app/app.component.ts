import {Component, QueryList, ViewChildren} from '@angular/core';

import {IonRouterOutlet, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        }).then(()=> this.manageBackButton());
    }

    private manageBackButton(){
        // this.routerOutlets.forEach(router => {
        //     this.platform.backButton.subscribe(()=>{
        //         if (router.canGoBack())
        //             window.history.back();
        //     })
        // })
    }
}
