import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})

export class ProfileComponent {
    title = `Profile`;

    @Input() CHcard;

    chName = '';
    plName = '';
    age = '';
    gender = '';
    occupation = '';
    birthplace = '';

    profiledata = {
        "profiledata": [
            this.chName,
            this.plName,
            this.age,
            this.gender,
            this.occupation,
            this.birthplace
        ]
    };

    saveProfileData() {
        let profiledata = [
            this.chName,
            this.plName,
            this.age,
            this.gender,
            this.occupation,
            this.birthplace
        ];
        let data = JSON.parse(localStorage.getItem(this.CHcard));
        data.profiledata = profiledata;
        localStorage.setItem(this.CHcard, JSON.stringify(data));
    }

    getProfileData() {
        let data = JSON.parse(localStorage.getItem(this.CHcard));
        // console.log(data);
        if (data.profiledata == undefined) {
            return;
        } else {
            this.chName = data.profiledata[0];
            this.plName = data.profiledata[1];
            this.age = data.profiledata[2];
            this.gender = data.profiledata[3];
            this.occupation = data.profiledata[4];
            this.birthplace = data.profiledata[5];
        }
        // console.log(profiledata);
    }

}
