import { Component } from '@angular/core';

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
}