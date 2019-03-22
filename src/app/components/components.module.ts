import {NgModule} from "@angular/core";
import {ExpandableComponent} from "./expandable/expandable.component";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
    ],
    declarations: [
        ExpandableComponent
    ],
    exports: [
        ExpandableComponent
    ]
})
export class ComponentsModule {
}
