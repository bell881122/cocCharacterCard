import { Component,Input } from '@angular/core';

@Component({
    selector:'headshot',
    templateUrl:'headshot.component.html',
    styleUrls: ['headshot.component.scss']
})

export class HeadshotComponent{
    // imgUrl = "https://image.flaticon.com/icons/png/512/55/55089.png";
    defaultUrl = "../../../assets/character-273364_1920.jpg"
    imgUrl = this.defaultUrl;
    inputImgUrl='';

    @Input() CHcard;
    updateHeadshot(){
        let data = /^http/;
        if (this.inputImgUrl.match(data)){
            this.imgUrl =this.inputImgUrl;
        }
    }

    getHeadshot(){
        if (this.inputImgUrl == ""){
            this.imgUrl = "../../../assets/character-273364_1920.jpg";
        }else{
            this.imgUrl = this.inputImgUrl;
        }
    }

}