import { Component, Input } from '@angular/core';


@Component({
    selector: 'skills',
    template: `
        <label class="mr-2 mb-0 text-right">{{ skill.skillName }}</label>
        <input type="number" class="form-control" [value]="skill.value"><span class="ml-1">%</span>
    `,
    styles:[`
    label{
        width:50%;
        font-size:12px;
    }
    `]


})


export class SkillsComponent {
    @Input() skill;



}