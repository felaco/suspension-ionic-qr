import {Component, OnInit} from '@angular/core';
import {QrResultService} from '../../providers/qr-result.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-qr-page',
    templateUrl: './qr-page.page.html',
    styleUrls: ['./qr-page.page.scss'],
})
export class QrPagePage implements OnInit {

    constructor(private qrResultProvider: QrResultService, private navCtrl: NavController) {
    }

    ngOnInit() {
        console.log(this.qrResultProvider);
    }

    ionViewWillEnter() {
        console.log(this.qrResultProvider);
    }

    onScan() {
        this.qrResultProvider.qrResult = 'No se escaneó ningún código qr.';
        this.navCtrl.navigateForward('/qr-dialog');
    }

}
