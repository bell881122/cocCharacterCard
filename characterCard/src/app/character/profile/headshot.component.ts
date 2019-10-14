import { Component,Input } from '@angular/core';

@Component({
    selector:'headshot',
    templateUrl:'headshot.component.html',
    styleUrls: ['headshot.component.scss']
})

export class HeadshotComponent{
    // imgUrl = "https://image.flaticon.com/icons/png/512/55/55089.png";
    imgUrl ="../../../assets/character-273364_1920.jpg";
    inputImgUrl='';

    @Input() CHcard;
    updateHeadshot(){
        let data = /^http/;
        if (this.inputImgUrl.match(data)){
            this.imgUrl =this.inputImgUrl;
        }
    }

    getHeadshot(){
        this.imgUrl = this.inputImgUrl;
    }

}