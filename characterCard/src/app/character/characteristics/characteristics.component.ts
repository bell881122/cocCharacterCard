import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
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


    @Input() CHcard;



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

    }

    subItems = [
        { status: 'idea', value: 0 },
        { status: 'luck', value: 0 },
        { status: 'know', value: 0 },
        { status: 'hp', value: 0 },
        { status: 'mp', value: 0 },
        { status: 'san', value: 0 },
    ];

    @ViewChild(HeadshotComponent, { static: false }) headshot: HeadshotComponent;
    ngAfterViewInit() {
    }

    saveStatus() {
        // console.log("aa");

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
        let Data2 = { "statusSubData": this.subItems };
        console.log(this.subItems);
        let saveStatusData = [Data1, Data2];

        let data = JSON.parse(localStorage.getItem(this.CHcard));
        data.saveStatusData = saveStatusData;
        data.headshotUrl = this.headshot.inputImgUrl;
        localStorage.setItem(this.CHcard, JSON.stringify(data));

    }

    getStatus() {
        let data = JSON.parse(localStorage.getItem(this.CHcard));
        console.log(data.saveStatusData);

        if (data.saveStatusData == undefined) {
            return;
        } else {
            this.subItems = data.saveStatusData[1].statusSubData;
            this.items[0].value = data.saveStatusData[0].statusData[0];
            this.items[1].value = data.saveStatusData[0].statusData[1];
            this.items[2].value = data.saveStatusData[0].statusData[2];
            this.items[3].value = data.saveStatusData[0].statusData[3];
            this.items[4].value = data.saveStatusData[0].statusData[4];
            this.items[5].value = data.saveStatusData[0].statusData[5];
            this.items[6].value = data.saveStatusData[0].statusData[6];
            this.items[7].value = data.saveStatusData[0].statusData[7];
            this.headshot.inputImgUrl = data.headshotUrl;
            this.headshot.getHeadshot();

        }
    }

}
