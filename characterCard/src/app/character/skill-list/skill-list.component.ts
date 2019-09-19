import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';



@Component({
  selector: 'skill-list',
  template: `

    <h3 class="text-center">{{title}}</h3>
  <div class="row">
    <div class="border border-secondary rounded p-3">
        <div *ngFor="let s of skills" class="col-4 mb-2">
        <skills [skill]="s" class="d-flex"></skills>
        </div>
    </div>

</div>
  `,
  providers: [SkillsService]
})
export class SkillListComponent implements OnInit {
  title='Skill List'

  skills;
  constructor(skillsService: SkillsService) {
    this.skills = skillsService.getSkills();

   }

  ngOnInit() {
  }

}
