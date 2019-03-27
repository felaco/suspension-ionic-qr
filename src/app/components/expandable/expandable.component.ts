import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-expandable',
    templateUrl: './expandable.component.html',
    styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {
    @Input() background = 'primary';
    @Input() fontColor = '#DDD';
    @ViewChild('content') content: ElementRef;
    @Input() buttonClass = '';

    @Input() expanded = true;
    @Input() header = 'Expandir';

    constructor() {
    }

    ngOnInit(): void {
        // aparentemente viewchild no se ejecuta aun en este punto.
        // asi que lo tiro a un timeout como hack
        setTimeout(() => {
            if (this.expanded) {
                this.content.nativeElement.style.maxHeight = this.content.nativeElement.scrollHeight + 'px';
            } else {
                this.content.nativeElement.style.maxHeight = '0';
            }
        }, 100);
    }


    private onExpand() {

        this.expanded = !this.expanded;
        if (this.expanded) {
            this.content.nativeElement.style.maxHeight = this.content.nativeElement.scrollHeight + 'px';
        } else {
            this.content.nativeElement.style.maxHeight = '0';
        }
    }

}
