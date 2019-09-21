import { Component, Input } from '@angular/core';


@Component({
    selector: 'skills',
    template: `

<div class="row d-flex  skill-group">
    <div class="col-2">
        <div class="row">
            <div class="col skilltype">
                <input type="checkbox" name="skill.skillName" value="carrer" checked><span class="checkbox">職</span><br>
            </div>
        </div>
        <div class="row">
            <div class="col skilltype">
                <input type="checkbox" name="skill.skillName" value="hobby" checked><span class="checkbox">興</span><br>
            </div>
        </div>
    </div>
    <div class="col-10 d-flex skill align-items-center">
        <label class="mr-2 mb-0 text-right">{{ skill.skillName }}</label>
        <input type="number" name="skill.skillName" class="form-control" [value]="skill.value"><span
            class="ml-1">%</span>
    </div>
</div>
    `,
    styles:[`
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
    .skilltype{
        padding:0px;
    }
    .skill{
        padding-left:0px;
    }
    `]


})


export class SkillsComponent {
    @Input() skill;



}