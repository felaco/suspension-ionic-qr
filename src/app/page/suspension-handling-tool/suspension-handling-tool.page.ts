import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from "@ionic/angular";

@Component({
    selector: 'app-suspension-handling-tool',
    templateUrl: './suspension-handling-tool.page.html',
    styleUrls: ['./suspension-handling-tool.page.scss'],
})
export class SuspensionHandlingToolPage implements OnInit {
    public tool_parts;
    @ViewChild(IonContent) content: IonContent;
    private expanded = false;

    constructor() {
        this.tool_parts = [
            'Rear Suspension',
            'Rear Suspension Handling Tool Lever Arm',
            'Rear Suspension Handling Tool',
            'Suspension Handling Tool Security Strap',
            'Chain Link'
        ]
    }

    ngOnInit() {
    }

    public scrollTo(mouseEvent){
        this.expanded = !this.expanded;

        if (this.expanded)
        {
            try {
                this.content.scrollToPoint(0, mouseEvent.srcElement.offsetTop, 500);
            } catch (e) {
                // modern problems require modern solutions
            }
        }
    }

}
