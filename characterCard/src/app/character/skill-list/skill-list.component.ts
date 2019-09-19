import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';



@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styles:[`
  .skill-list{
    height:930px;
  }
  .skill-list > div{
    width:30%;
  }
  `],
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
