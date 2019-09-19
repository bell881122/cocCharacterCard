import { Component } from '@angular/core';

@Component({
    selector:'headshot',
    template:`
    <div class="headshot w-100 h-100">
    <div class="border border-secondary rounded p-3">
    <img src="https://image.flaticon.com/icons/png/512/55/55089.png">
    </div>
    </div>
<!--
    <input type="url" id="headshot" value="">
    <button type="submit">更新</button>
-->
    `,
    styles:[`
    .headshot img{
        width:100%;
    }
    `]
})

export class HeadshotComponent{

}