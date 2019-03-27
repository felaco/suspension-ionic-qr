import {Component, OnInit, ViewChild} from '@angular/core';
import {MaterialsToolsRequiredService, ToolsMaterials} from "../../providers/materials-tools-required.service";
import {IonContent} from "@ionic/angular";

@Component({
    selector: 'app-setup',
    templateUrl: './setup.page.html',
    styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
    private tools: ToolsMaterials[];
    @ViewChild(IonContent) content : IonContent;

    constructor(private materialProvider: MaterialsToolsRequiredService) {
        this.tools = [
            new ToolsMaterials('Liebherr Plus Artic Oil or approved equivalent',
                'Reference: Oil and Lubricant Specifications, page 117', ''),

            new ToolsMaterials('nitrogen Charging Kit',
                'Reference: Nitrogen Charging Kit 11100172, page 98'),

            new ToolsMaterials('Nitrogen'),
            new ToolsMaterials('Lifting device and support for the haul truck chassis(rear)'),
        ];
        this.materialProvider.tools = this.tools;
    }

    ngOnInit() {
    }

    private scrollTo(mouseEvent){
        try {
            this.content.scrollToPoint(0, mouseEvent.srcElement.offsetTop, 500);
        } catch (e) {
            // modern problems require modern solutions
        }
    }

}
