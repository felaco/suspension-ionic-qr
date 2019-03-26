import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-detail-chart',
    templateUrl: './detail-chart.page.html',
    styleUrls: ['./detail-chart.page.scss'],
})
export class DetailChartPage implements OnInit {
    private imgs = [];

    constructor() {
        this.imgs = [
            '/assets/img/susp_9614138.PNG',
            '/assets/img/susp_51784ap.PNG',
            '/assets/img/susp_51784AK.PNG',
            '/assets/img/susp_51784Z.PNG',
        ]
    }

    ngOnInit() {
    }

}
