import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QrResultService {
    public qrResult = 'Aún no escanea ningún codigo qr';

    constructor() {
    }
}
