import { Component } from '@angular/core';

@Component({
    selector:'headshot',
    templateUrl:'headshot.component.html',
    styleUrls: ['headshot.component.scss']
})

export class HeadshotComponent{
    imgUrl ="https://image.flaticon.com/icons/png/512/55/55089.png";
    inputImgUrl;
    updateHeadshot(){
        this.imgUrl =this.inputImgUrl;
    }
}