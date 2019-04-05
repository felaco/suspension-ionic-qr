import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MaterialsToolsRequiredService, ToolsMaterials} from "../../providers/materials-tools-required.service";

@Component({
    selector: 'app-material-detail',
    templateUrl: './material-detail.page.html',
    styleUrls: ['./material-detail.page.scss'],
})
export class MaterialDetailPage implements OnInit {
    public detail: ToolsMaterials;

    constructor(activatedRoute: ActivatedRoute,
                materialProvider: MaterialsToolsRequiredService
    ) {
        const index = activatedRoute.snapshot.paramMap.get('index');
        this.detail = materialProvider.tools[index];
        console.log(this.detail);
    }

    ngOnInit() {
    }

}
