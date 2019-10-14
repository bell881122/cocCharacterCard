import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';


@Component({
    selector: 'character',
    templateUrl: 'character.component.html',
    styles: [`
    img{
        width:600px;
        height:auto;
    }
    `]
})

export class CharacterComponent {

    ngOnInit() {
        if (localStorage.getItem(this.CHcard) === null) {
            let data = { "Charactor": this.CHcard };
            localStorage.setItem(this.CHcard, JSON.stringify(data));
        }
        console.log(JSON.parse(localStorage.getItem(this.CHcard)));
    }

    title = `Character Card`
    subtitle = `CALL Of CTHULHU`;

    charactorNum = 1
    CHcard = 'CH' + this.charactorNum;

    saveAll() {
        // alert('所有資料已儲存');
    }

}