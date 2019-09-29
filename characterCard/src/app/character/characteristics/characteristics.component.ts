import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatusItemService } from './statusItem.service';

@Component({
    selector: 'characteristics',
    templateUrl: 'characteristics.component.html',
    providers: [StatusItemService]
})

export class CharacteristicsComponent {
    title = `Characteristics`;

    items;


    constructor(statusItemService: StatusItemService) {
        this.items = statusItemService.getItems();

        this.subItems[0].value = this.items[7].value * 5;
        this.subItems[1].value = this.items[2].value * 5;
        this.subItems[2].value = this.items[5].value * 5;
        this.subItems[3].value =
            Math.floor((this.items[4].value + this.items[6].value) / 2);
        this.subItems[4].value = this.items[2].value;
        this.subItems[5].value = this.items[2].value * 5;

        // console.log(this.items[7].value);
    }

    subItems = [
        { status: 'idea', value: 0 },
        { status: 'luck', value: 0 },
        { status: 'know', value: 0 },
        { status: 'hp', value: 0 },
        { status: 'mp', value: 0 },
        { status: 'san', value: 0 },
    ];

    saveStatusSubItems(){
        let saveStatusSubItems = this.subItems;
        localStorage.setItem('statusSubItemsData', JSON.stringify(saveStatusSubItems));
    }

    getStatusSubItems() {
        let data = JSON.parse(localStorage.getItem('statusSubItemsData'));
        this.subItems = data;
    }
    
    // console.log(data);


    saveStatusItem() {
        let saveStatusData = {
            "statusData": [
                this.items[0].value,
                this.items[1].value,
                this.items[2].value,
                this.items[3].value,
                this.items[4].value,
                this.items[5].value,
                this.items[6].value,
                this.items[7].value
            ]
        };
        localStorage.setItem('statusData', JSON.stringify(saveStatusData));
        // alert('資料已儲存');
    }

    getStatusItem() {
        let data = JSON.parse(localStorage.getItem('statusData'));
        this.items[0].value = data['statusData'][0];
        this.items[1].value = data['statusData'][1];
        this.items[2].value = data['statusData'][2];
        this.items[3].value = data['statusData'][3];
        this.items[4].value = data['statusData'][4];
        this.items[5].value = data['statusData'][5];
        this.items[6].value = data['statusData'][6];
        this.items[7].value = data['statusData'][7];
    }


}
