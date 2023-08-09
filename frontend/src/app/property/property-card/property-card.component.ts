import { Component, Input } from "@angular/core";
import { IPropertyBase } from "src/app/model/ipropertyBase";

@Component({
    selector:'app-property-card',
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css']
})
export class PropertyCardComponent {
    @Input() cardProperty! :IPropertyBase;
    @Input() hideIcons:boolean =false;
}