import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';


@Component({
    selector: 'character',
    templateUrl: 'character.component.html'
})

export class CharacterComponent{

    // child to parent test
    // export class CharacterComponent implements AfterViewInit {
/*     @ViewChild(ProfileComponent,{static:false}) child;
    message: string;

    ngAfterViewInit() {
        this.message = this.child.profiledata[0];
    }
 */



    title = `Character Card`
    subtitle = `CALL Of CTHULHU`;

    saveAll() {
        alert('所有資料已儲存');
    }

    saveCharacter() {

    }

    getCharacter() { }

}