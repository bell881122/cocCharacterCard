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

    title = `Character Card`
    subtitle = `CALL Of CTHULHU`;

    chCardBox = [];

    charactorNum = 1;
    CHcard = 'CH' + this.charactorNum;

    ngOnInit() {
        if (localStorage.getItem(this.CHcard) == null) {
            let data = { "Charactor": this.CHcard };
            localStorage.setItem(this.CHcard, JSON.stringify(data));
        }
        console.log(JSON.parse(localStorage.getItem(this.CHcard)));

        for (let i = 0; i < localStorage.length; i++) {
            let data = localStorage.key(i);
            this.chCardBox.push(data);
            // this.chCardBox[data] = JSON.parse(localStorage.getItem(data));
            console.log(this.chCardBox);

        }

    }

    checkoutCHcard;
    chooseCard(c){
        this.CHcard=c;
        console.log(c);
    }

    addNewCHcardData="";
    addNewCHcard() {
        if (this.addNewCHcardData == ""){
            alert("請輸入角色卡名稱");
        }else{
            console.log(this.addNewCHcardData);
            // this.CHcard = this.addNewCHcardData;
        }

    }



    saveAll() {
        if (localStorage.getItem(this.CHcard) == null) {
            let data = { "Charactor": this.CHcard };
            localStorage.setItem(this.CHcard, JSON.stringify(data));
        }

        // alert('所有資料已儲存');
    }

}