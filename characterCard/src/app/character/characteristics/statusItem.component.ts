import { Component, Input } from '@angular/core';

@Component({
    selector: 'statusItem',
    // <h5 class="mr-2"> {{ item.status | uppercase}}</h5>
    template: `
   
        <label class="mr-2">{{ item.status | uppercase}}</label>
        <input type="number" class="form-control" [id]="item.status" [value]="item.value">
    
    `



})

export class StatusItemComponent {
    @Input() item;

   
}