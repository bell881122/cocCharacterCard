import { Component } from '@angular/core';

@Component({
    selector: 'mutildice',
    templateUrl: 'mutildice.component.html',
    styleUrls: ['mutildice.component.scss']
})

export class MutildiceComponent {
    // title ='MutildiceComponent';

    diceType;
    diceNumber = 1;
    diceCustom = 1;
    D3() {
        this.diceNumber = 1;
        this.diceType = 3;
        this.diceData = '';
    }
    D6() {
        this.diceNumber = 1;
        this.diceType = 6;
        this.diceData = '';
    }
    D10() {
        this.diceNumber = 1;
        this.diceType = 10;
        this.diceData = '';
    }
    D100() {
        this.diceNumber = 1;
        this.diceType = 100;
        this.diceData = '';
    }
    customDice() {
        this.diceNumber = 1;
        this.diceType = this.diceCustom;
        this.diceData = '';
    }

    diceData;
    randomDice() {
        let ramdomnum =
            Math.floor(
                (Math.random() *
                    (this.diceType * this.diceNumber - this.diceNumber + 1))
            ) + this.diceNumber;
        this.diceData = ramdomnum;
        // console.log('diceData', this.diceData);
        // console.log('diceNumber', this.diceNumber);
        // console.log('diceType', this.diceType);

    }


}
