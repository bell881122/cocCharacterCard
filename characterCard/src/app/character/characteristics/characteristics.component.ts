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

    // subItems=[]

    idea;
    luck;
    know;
    hp;
    mp;
    san;

    constructor(statusItemService: StatusItemService) {
        this.items = statusItemService.getItems();
        
        this.idea = this.items[7].value*5;
        this.luck = this.items[2].value * 5;
        this.know = this.items[5].value * 5;
        this.hp = this.items[5].value * 5;
        this.mp = 
            Math.floor((this.items[4].value + this.items[6].value)/2) ;
        this.san = this.items[2].value * 5;
    }

}
