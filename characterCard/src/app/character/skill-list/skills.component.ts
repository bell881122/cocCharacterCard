import { Component, Input } from '@angular/core';

@Component({
    selector: 'skills',
    templateUrl: 'skills.component.html',
/*     template: `

    `,
 */    styles:[`
    .checkbox,
    input[type="checkbox"]{
        font-size:8px;
    }
    label{
        width:50%;
        font-size:14px;
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
    `]


})



export class SkillsComponent {
    @Input() skill;
    
    
    changeCarrerPoint() {
        let thisSkill = document.querySelector('#' + this.skill.skillName);


        if (this.skill.carrerChecked) {
            this.skill.carrerValue = this.skill.value;
        }else{
            this.skill.carrerValue =0;
        }
        console.log(thisSkill);
    }

    changeHobbyPoint() {
        if (this.skill.hobbyChecked) {
            this.skill.hobbyValue = this.skill.value;
        } else {
            this.skill.hobbyValue = 0;
        }
        console.log(this);
    }
}