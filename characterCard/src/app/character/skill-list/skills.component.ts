import { Component, Input } from '@angular/core';

@Component({
    selector: 'skills',
    template: `
        <label class="mr-2">{{ skill.skillName }}</label>
        <input type="number" class="form-control" [value]="skill.skillName">
    
    `



})

export class SkillsComponent {
    @Input() skill;
}