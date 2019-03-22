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

    @Input() expanded = true;
    @Input() header = 'Expandir';

    constructor() {
    }

    ngAfterViewInit(){
    }

    private onExpand(){
        if (!this.content.nativeElement.style.maxHeight){
            if (this.expanded){
                console.log('expanded');
                this.content.nativeElement.style.maxHeight = this.content.nativeElement.scrollHeight + 'px';
            } else {
                this.content.nativeElement.style.maxHeight = '0';
            }
        }


        this.expanded = !this.expanded;
        if (this.expanded){
            this.content.nativeElement.style.maxHeight = this.content.nativeElement.scrollHeight + 'px';
        } else {
            this.content.nativeElement.style.maxHeight = '0';
        }
        console.log(this.content.nativeElement.maxHeight);
    }

}
