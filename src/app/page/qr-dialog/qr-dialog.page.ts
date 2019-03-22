import {Component, OnInit, ViewChild} from '@angular/core';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
import {QrResultService} from '../../providers/qr-result.service';
import {NavController} from '@ionic/angular';

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

    constructor(private qrScanner: QRScanner,
                private qrResultProvider: QrResultService,
                private navCtrl: NavController) {
    }

    ngOnInit() {

        this.qrScanner.prepare().then((status: QRScannerStatus) => {
            if (status.authorized) {
                const scanSub = this.qrScanner.scan().subscribe((text: string) => {
                    console.log('Scanned: ' + text);
                    this.qrResultProvider.qrResult = text;

                    this.qrText = text;
                    this.hasQr = true;

                    this.qrScanner.destroy();
                    scanSub.unsubscribe();
                    // this.content.style.display = 'block';
                    console.log(this);
                    this.scanning = false;

                    this.navCtrl.back();
                });

                this.scanning = true;
                this.qrScanner.show();
                this.content = document.getElementById('qr-scanner-content');
                this.content.style.display = 'none';
            } else if (status.denied) {
                this.qrScanner.openSettings();
            }
        }).catch(err => {
            console.error(err);
        });
    }

    OnDestroy() {
        this.qrScanner.getStatus().then(status => {
            console.log(status);
        });
    }

    onBackButton() {
        this.qrScanner.getStatus().then(status => {
            if (status.prepared) {
                this.qrScanner.hide();
                this.qrScanner.destroy();
            }
        });
    }

}
