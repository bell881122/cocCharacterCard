import { Component, Input } from '@angular/core';

@Component({
    selector: 'skills',
    templateUrl: 'skills.component.html',
    styles: [`
    .checkbox,
    input[type="checkbox"]{
        font-size:8px;
    }
    label{
        width:50%;
        font-size:18px;
    }
    .skill-group{
        margin: 0px;
    }
    .skillTypePoint{
        padding:0px;
    }
    .skill{
        padding-left:0px;
    }
    #skillValue{
        width:55%;
    }
    `]
})

export class SkillsComponent {
    
    constructor() { }
    
    @Input() skill;
    @Input() getSkill;
    
    changeCarrerPoint() {
        if (this.skill.carrerChecked) {
            this.skill.carrerValue = this.skill.value;
            let variable = this.skill.carrerValue - this.skill.basicValue;
            this.skill.carrerValue = variable;
        } else {
            this.skill.carrerValue = 0;
        }
    }

    changeHobbyPoint() {
        if (this.skill.hobbyChecked) {
            this.skill.hobbyValue = this.skill.value;
            let variable = this.skill.hobbyValue - this.skill.basicValue;
            this.skill.hobbyValue = variable;
        } else {
            this.skill.hobbyValue = 0;
        }
    }

}