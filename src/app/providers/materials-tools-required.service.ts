import {Injectable} from '@angular/core';

export class ToolsMaterials {
    public name;
    public reference;
    public notes;

    constructor(name, reference = 'N/A', notes = 'Commercially available') {
        this.name = name;
        this.reference = reference;
        this.notes = notes;
    }
}

@Injectable({
    providedIn: 'root'
})
export class MaterialsToolsRequiredService {
    public tools:ToolsMaterials[] = [];

    constructor() {
    }
}
