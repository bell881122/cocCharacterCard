import { Component, Input, ViewChild, AfterViewInit, Directive, ɵConsole } from '@angular/core';
import { ProfileComponent} from '../character/profile/profile.component';
import { CharacteristicsComponent } from '../character/characteristics/characteristics.component';
import { SkillListComponent } from '../character/skill-list/skill-list.component';
import { BackstoryComponent } from '../character/otherdata/backstory.component';

@Component({
    selector: 'character',
    templateUrl: 'character.component.html',
    styles: [`
    img{
        width:600px;
        height:auto;
    }
    `]
})

export class CharacterComponent implements AfterViewInit {

    title = `Character Card`
    subtitle = `CALL Of CTHULHU`;

    charactorNum = 1
    CHcard = 'CH' + this.charactorNum;
    saveData={};

    @ViewChild(ProfileComponent, { static: false }) profile: ProfileComponent;
    @ViewChild(CharacteristicsComponent, { static: false }) characteristics: CharacteristicsComponent;
    @ViewChild(SkillListComponent, { static: false }) skillList: SkillListComponent;
    @ViewChild(BackstoryComponent, { static: false }) backstory: BackstoryComponent;




    ngAfterViewInit() {
        console.log(this.characteristics.subItems);
        /*
        let data = this.saveData;
        data[this.CHcard] = 'charactor1';
        console.log(data);
        */
    }

    saveAll() {
        alert('所有資料已儲存');

        // console.log(this.profile.title);
        let data = this.saveData;
        data.StatusData = this.characteristics.saveStatusData;
        localStorage.setItem(this.CHcard, JSON.stringify(data));
        // console.log(data);
    }

    getAllData;

    getAll() {
        this.getAllData = JSON.parse(localStorage.getItem(this.CHcard));
        console.log(this.getAllData);

    }

}