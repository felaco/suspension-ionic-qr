import {Component, OnInit} from '@angular/core';
import {MaterialsToolsRequiredService, ToolsMaterials} from "../../providers/materials-tools-required.service";

@Component({
    selector: 'app-installation',
    templateUrl: './installation.page.html',
    styleUrls: ['./installation.page.scss'],
})
export class InstallationPage implements OnInit {
    public tools: ToolsMaterials[];

    constructor(private materialProvider: MaterialsToolsRequiredService) {
        this.tools = [
            new ToolsMaterials('Rear Suspension Handling Tool Assembly',
                'Reference: Rear Suspension Handling Tool (for forklift) 10881510, page 97', ''),
            new ToolsMaterials('Lifting device and support for the haul truck chassis(rear)', 'N/A', 'Commercially available'),
            new ToolsMaterials('Fork lift for lifting the suspension handling tool witch rear suspesion', 'N/A', 'Commercially available'),
            new ToolsMaterials('torque wrench', 'N/A', '(925 N*m (682 lbf ft))'),
            new ToolsMaterials('Anti-seize', 'N/A', 'Commercially available'),
        ];

        this.materialProvider.tools = this.tools;
    }

    ngOnInit() {
    }
}
