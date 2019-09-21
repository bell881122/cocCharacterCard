import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { StatusItemService } from '../characteristics/statusItem.service';


@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  // template:`  `,
  styles: [`
  .skill-list{
    height:1100px;
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
  title = 'Skill List'

  skills;
  items;
  skillTypePoint = {
    careerPoint: 0,
    hobbyPoint: 0
  };


  skillTotalPoint =
    {
      carrer: 0,
      hobby: 0
    };

  carrerValueTotal = [];
  hobbyValueTotal;



  carrerTotal = this.skillTotalPoint.carrer;
  hobbyTotal = this.skillTotalPoint.hobby;


  constructor(skillsService: SkillsService, statusItemService: StatusItemService) {
    this.skills = skillsService.getSkills();

    this.items = statusItemService.getItems();
    this.skillTypePoint.careerPoint = this.items[5].value * 20;
    this.skillTypePoint.hobbyPoint = this.items[7].value * 10;

  }

  // get skillTotalPoint
  getSkillTotal() {

    this.carrerTotal = 0;
    this.hobbyTotal = 0;
    setTimeout(() => {
      for (let i = 0; i < this.skills.length; i++) {
        this.carrerTotal += this.skills[i].carrerValue;
        this.hobbyTotal += this.skills[i].hobbyValue;
      }
    }, 10);


  }

  ngOnInit() {
  }

}
