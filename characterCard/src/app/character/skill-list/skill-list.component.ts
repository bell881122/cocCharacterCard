import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { StatusItemService } from '../characteristics/statusItem.service';


@Component({
  selector: 'skill-list',
  // templateUrl: './skill-list.component.html',
  template:`
  <h3 class="text-center">{{title}}</h3>

<div class="border border-secondary rounded p-3 my-2">
    <div class="d-flex">
        <p class="mr-5">職業點數：{{subItems[0].value}}</p>
        <p class="mr-5">興趣點數：{{subItems[1].value}}</p>
    </div>
        <div class="skill-list d-flex flex-column flex-wrap">
            <div *ngFor="let s of skills" class="mb-2">
                <skills [skill]="s" class="d-flex d-flex align-items-center"></skills>
        </div>
    </div>
</div>
  
  `,
  styles:[`
  .skill-list{
    height:860px;
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
