import { Component, Input } from '@angular/core';

@Component({
    selector: 'skills',
    template: `
        <label class="mr-2">{{ skill}}</label>
        <input type="number" class="form-control">
    
    `



})

export class SkillsComponent {
    @Input() skill;
}