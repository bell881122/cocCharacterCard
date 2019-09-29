import { Component, Input } from '@angular/core';

@Component({
  selector: 'dicehundred',
  templateUrl: './dicehundred.component.html',
  styleUrls: ['dicehundred.component.scss']
})

export class DicehundredComponent {
  @Input() skill;

  diceData;

  getData() {
    let data;
    data = Math.ceil(Math.random() * 100);
    this.diceData = data;
    console.log(this.skill.value);
    console.log(this.diceData);
    let diceA = document.querySelector('#dice');
    if (data <= this.skill.value) {
      diceA.setAttribute("style", "color:green;")
      console.log(diceA);
    } else if (data > this.skill.value) {
      diceA.setAttribute("style", "color:red;")
    } else {
      return;
    }
  }

}
