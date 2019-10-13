import { Component, Input, ViewChild, AfterViewInit, Directive, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatusItemService } from './statusItem.service';
import { HeadshotComponent } from '../profile/headshot.component';

@Component({
    selector: 'characteristics',
    templateUrl: 'characteristics.component.html',
    providers: [StatusItemService],
    styleUrls: ['characteristics.component.scss']
})

export class CharacteristicsComponent implements AfterViewInit {
    title = `Characteristics`;

    items;

    @Input() getAllData;
    @ViewChild(HeadshotComponent, { static: false }) headshot: HeadshotComponent;


    ngAfterViewInit() {   }


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

    subItems = [
        { status: 'idea', value: 0 },
        { status: 'luck', value: 0 },
        { status: 'know', value: 0 },
        { status: 'hp', value: 0 },
        { status: 'mp', value: 0 },
        { status: 'san', value: 0 },
    ];


    saveStatusData;

    saveStatus() {
        // saveStatusItem
        let Data1 = {
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
        let Data2 = this.subItems;

        this.saveStatusData=[Data1,Data2];

        localStorage.setItem('statusData', JSON.stringify(Data1));

        // saveStatusSubItem
        localStorage.setItem('statusSubItemsData', JSON.stringify(Data2));

        console.log(this.headshot.imgUrl);
    }

    getStatus() {
        // getStatusItem

        let data1 = JSON.parse(localStorage.getItem('statusData'));
        this.items[0].value = data1['statusData'][0];
        this.items[1].value = data1['statusData'][1];
        this.items[2].value = data1['statusData'][2];
        this.items[3].value = data1['statusData'][3];
        this.items[4].value = data1['statusData'][4];
        this.items[5].value = data1['statusData'][5];
        this.items[6].value = data1['statusData'][6];
        this.items[7].value = data1['statusData'][7];

        // getStatusSubItem
        let data2 = JSON.parse(localStorage.getItem('statusSubItemsData'));
        this.subItems = data2;
    }





}
