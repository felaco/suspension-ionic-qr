import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-actions-page',
    templateUrl: './actions-page.page.html',
    styleUrls: ['./actions-page.page.scss'],
})
export class ActionsPagePage implements OnInit {
    private title = 'Rear Suspension';

    constructor(private router:Router) {
    }

    ngOnInit() {
    }

    onBackButton(){
        console.log(this.router.getCurrentNavigation());
        console.log(this.router.routerState)
    }
}
