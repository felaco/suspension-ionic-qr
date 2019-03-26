import {Component, OnInit} from '@angular/core';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner/ngx";
import {NavController} from "@ionic/angular";
import {QrResultService} from "../../providers/qr-result.service";

@Component({
    selector: 'app-qr-dialog',
    templateUrl: './qr-dialog.page.html',
    styleUrls: ['./qr-dialog.page.scss'],
})
export class QrDialogPage implements OnInit {
    private scanning = false;
    private content: HTMLElement;

    constructor(private qrScanner: QRScanner,
                private navCtrl: NavController,
                private qrResultProvider: QrResultService
    ) {
    }

    ngOnInit() {
        this.qrScanner.prepare().then((status: QRScannerStatus)=>{
            if (status.authorized){
                const scanSub = this.qrScanner.scan().subscribe((text:string)=>{
                    console.log('Scanner: ' + text);
                    this.qrResultProvider.qrResult = text;
                    this.content.style.display = 'block';

                    this.qrScanner.destroy();
                    scanSub.unsubscribe();
                    this.scanning = false;
                    this.navCtrl.navigateRoot('/actions-page');
                })
            }

            this.scanning = true;
            this.qrScanner.show();
            this.content = document.getElementById('qr-scanner-content-element');
            this.content.style.display = 'none';
        })
    }

    ngOnDestroy (){
        this.qrScanner.getStatus().then(status => {
            if(status.prepared){
                this.qrScanner.hide();
                this.qrScanner.destroy();
                console.log('destroyed scanner');
            }
        })
    }
}
