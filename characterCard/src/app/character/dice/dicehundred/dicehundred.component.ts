import { Component, Input } from '@angular/core';

@Component({
  selector: 'dicehundred',
  templateUrl: './dicehundred.component.html',
  styleUrls: ['dicehundred.component.scss']
})

export class DicehundredComponent {
  @Input() skillDice;


  getData() {
    let data;
    let diceA = document.querySelector('#dice');
    data = Math.ceil(Math.random() * 100);
    diceA.textContent = data;

    if (data <= this.skillDice.value) {
      diceA.setAttribute("style", "color:#000;")
      return;
    } else if (data > this.skillDice.value && data <= 95 && data >= 6) {
      diceA.setAttribute("style", "color:red;")
    } else if (data > 95) {
      diceA.setAttribute("style", "color:purple;")
    } else if (data < 6) {
      diceA.setAttribute("style", "color:orange;")
    } else {
      console.log(diceA);
      return;
    }
  }

}