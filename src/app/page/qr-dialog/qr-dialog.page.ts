import {Component, OnInit} from '@angular/core';
// import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
// import {QrResultService} from '../../providers/qr-result.service';
// import {IonNav, NavController, Platform} from '@ionic/angular';
// import {Router} from "@angular/router";
// import {ActionsPagePage} from "../actions-page/actions-page.page";

@Component({
    selector: 'app-qr-dialog',
    templateUrl: './qr-dialog.page.html',
    styleUrls: ['./qr-dialog.page.scss'],
})
export class QrDialogPage implements OnInit {
    public hasQr = false;
    public scanning = false;
    public qrText: string;
    private content: HTMLElement;

    // constructor(private qrScanner: QRScanner,
    //             private qrResultProvider: QrResultService,
    //             private navCtrl: NavController,
    //             private router:Router) {
    // }

    ngOnInit() {


        // this.qrScanner.prepare().then((status: QRScannerStatus) => {
        //     if (status.authorized) {
        //         const scanSub = this.qrScanner.scan().subscribe((text: string) => {
        //             console.log('Scanned: ' + text);
        //             this.qrResultProvider.qrResult = text;
        //
        //             this.qrText = text;
        //             this.hasQr = true;
        //
        //             this.qrScanner.destroy();
        //             scanSub.unsubscribe();
        //             // this.content.style.display = 'block';
        //             console.log(this);
        //             this.scanning = false;
        //
        //             this.navCtrl.navigateRoot('/actions-page', {skipLocationChange: true});
        //             // this.router.navigateByUrl('/actions-page-redirect');
        //             // this.navCtrl.setRoot(ActionsPagePage);
        //         });
        //
        //         this.scanning = true;
        //         this.qrScanner.show();
        //         this.content = document.getElementById('qr-scanner-content');
        //         this.content.style.display = 'none';
        //     } else if (status.denied) {
        //         this.qrScanner.openSettings();
        //     }
        // }).catch(err => {
        //     console.error(err);
        // });
    }

    OnDestroy() {
        // this.qrScanner.getStatus().then(status => {
        //     if (status.prepared) {
        //         this.qrScanner.hide();
        //         this.qrScanner.destroy();
        //     }
        // });
    }

}
