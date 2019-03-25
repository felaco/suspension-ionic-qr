import {Component, OnInit} from '@angular/core';
import {MaterialsToolsRequiredService, ToolsMaterials} from "../../providers/materials-tools-required.service";

@Component({
    selector: 'app-removal',
    templateUrl: './removal.page.html',
    styleUrls: ['./removal.page.scss'],
})
export class RemovalPage implements OnInit {
    private tools:ToolsMaterials[];

    constructor(private materialProvider: MaterialsToolsRequiredService) {
        this.tools = [
            new ToolsMaterials('Pin Puller', 'Reference: Pin Puller T-124-C, page 102', ''),
            new ToolsMaterials('Lifting device and support for the haul truck chassis (rear)'),
            new ToolsMaterials('Lifting device for the rear suspensions'),
            new ToolsMaterials('Applicable shipping pallet forthe suspension being removed'),
            new ToolsMaterials('Band-strap'),
        ];

        this.materialProvider.tools = this.tools;
    }

    ngOnInit() {
    }

}
