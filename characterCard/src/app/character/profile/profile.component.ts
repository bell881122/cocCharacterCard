import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styles: [`
    label{
        font-size:12px;
        margin-right:10px;
    }
    `]
})

export class ProfileComponent {
    title = `Profile`;

    chName;
    plName;
    age;
    gender;
    occupation;
    birthplace;

    saveProfileData(f: NgForm): void {
        let profiledata = {
            "profiledata": [
                this.chName,
                this.plName,
                this.age,
                this.gender,
                this.occupation,
                this.birthplace
            ]
        };
        // console.log(this.profiledata);
        localStorage.setItem('profiledata', JSON.stringify(profiledata));
        alert('資料已儲存');
        console.log(profiledata);
    }

    getProfileData() {
        let data = JSON.parse(localStorage.getItem('profiledata'));
        // console.log(data);
        // console.log(data['profiledata'][0]);
        this.chName= data['profiledata'][0];
            this.plName= data['profiledata'][1];
            this.age= data['profiledata'][2];
            this.gender= data['profiledata'][3];
            this.occupation= data['profiledata'][4];
            this.birthplace= data['profiledata'][5];
    }
}
