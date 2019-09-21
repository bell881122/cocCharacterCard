import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { StatusItemService } from '../characteristics/statusItem.service';


@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  // template:`  `,
  styles:[`
  .skill-list{
    height:1000px;
  }
  .skill-list > div{
    width:23%;
  }
  `],
  providers: [
    SkillsService,
     StatusItemService
    ]
})

export class SkillListComponent implements OnInit {
  title='Skill List'

  skills;
  items;
  subItems=[
    { status: 'careerPoint', value: 0 },
    { status: 'hobbyPoint', value: 0 },
    ];

  constructor(skillsService: SkillsService, statusItemService: StatusItemService) {
    this.skills = skillsService.getSkills();

    this.items = statusItemService.getItems();
    this.subItems[0].value = this.items[5].value * 20;
    this.subItems[1].value = this.items[7].value * 10;

   }

  ngOnInit() {
  }

}
