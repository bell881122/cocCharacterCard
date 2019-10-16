import { Component } from '@angular/core';

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

    CHcard = 'CH1';

    ngOnInit() {
        if (localStorage.getItem(this.CHcard) == null) {
            let data = { "Charactor": this.CHcard };
            localStorage.setItem(this.CHcard, JSON.stringify(data));
        }
        // console.log(JSON.parse(localStorage.getItem(this.CHcard)));

        for (let i = 0; i < localStorage.length; i++) {
            let data = localStorage.key(i);
            this.chCardBox.push(data);
            // this.chCardBox[data] = JSON.parse(localStorage.getItem(data));
        }
        this.lastCard = this.CHcard;
        // console.log(this.chCardBox);
        // localStorage.removeItem("My Charactor Card");
    }

    checkoutCHcard;
    chooseCard(c) {
        this.CHcard = c;
        console.log(c);
    }

    // 以新名稱儲存檔案
    addNew = false;
    addNewTrue() {
        if (this.addNewCHcardData == "") {
            alert("請輸入角色卡名稱");
            return;
        } else {
            this.addNew = true;
        }
    }

    addNewCHcardData = "";
    lastCard;
    addNewCHcard() {
        if (this.addNewCHcardData == "") {
            // alert("請輸入角色卡名稱");
            return;
        } else {
            this.lastCard = this.CHcard;
            this.CHcard = this.addNewCHcardData;
        }
        // console.log(this.chCardBox);
    }

    addNewFalse() {
        this.addNew = false;
        this.addNewCHcardData = "";
    }

    DontSave() {
        this.CHcard = this.lastCard;
    }
    // console.log(this.addNewCHcardData);

    saveAll() {
        if (localStorage.getItem(this.CHcard) == null) {
            let data = { "Charactor": this.CHcard };
            localStorage.setItem(this.CHcard, JSON.stringify(data));
            this.chCardBox.push(data["Charactor"]);
        }
        this.addNewCHcardData = "";
        alert('所有資料已儲存');
        // console.log(this.chCardBox);
    }

    // json檔案
    jsonData;
    downloadJson() {

        let data = localStorage.getItem(this.CHcard);
        this.jsonData =
            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
${data}    
</body>
</html>
        `;

        let jsonUrl = this.jsonData;
        // document.write(
        window.open(jsonUrl.toHtmlObject);

        console.log(this.jsonData);

        // let a = document.getElementById('saveJson');

        // var blob = new Blob([JSON.stringify(this.CHcard)], { type: "" });
        // a.downlo
        // saveAs(blob, "CoCcharactor.json");
    }


}