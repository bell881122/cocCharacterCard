import { Component } from '@angular/core';
import { StatusItemService } from './statusItem.service';

@Component({
    selector: 'characteristics',
    templateUrl: 'characteristics.component.html',
    providers: [StatusItemService]
})

export class CharacteristicsComponent {
    title = `Characteristics`;

    items;

    subItems = [
        { status: 'idea', value: 0 },
        { status: 'luck', value: 0 },
        { status: 'know', value: 0 },
        { status: 'hp', value: 0 },
        { status: 'mp', value: 0 },
        { status: 'san', value: 0 },
    ]
    constructor(statusItemService: StatusItemService) {
        this.items = statusItemService.getItems();

        this.subItems[0].value = this.items[7].value * 5;
        this.subItems[1].value = this.items[2].value * 5;
        this.subItems[2].value = this.items[5].value * 5;
        this.subItems[3].value =
            Math.floor((this.items[4].value + this.items[6].value) / 2);
        this.subItems[4].value = this.items[2].value;
        this.subItems[5].value = this.items[2].value * 5;
    }

}
