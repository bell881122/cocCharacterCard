import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { StatusItemService } from '../characteristics/statusItem.service';
import { NgForm } from '@angular/forms';

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

  careerTotalPoint;
  hobbyTotalPoint;

  // 母語&閃避 + 職業&興趣點數
  constructor(skillsService: SkillsService, statusItemService: StatusItemService) {
    this.skills = skillsService.getSkills();
    this.items = statusItemService.getItems();

    this.skillTypePoint.careerPoint = this.items[5].value * 20;
    this.skillTypePoint.hobbyPoint = this.items[7].value * 10;
    this.careerTotalPoint = this.skillTypePoint.careerPoint;
    this.hobbyTotalPoint = this.skillTypePoint.hobbyPoint;
  }




  skillTotalPoint =
    {
      carrer: 0,
      hobby: 0
    };









  // get skillTotalPoint
  getSkillTotal() {
    let varCareerTotalPoint = this.careerTotalPoint;
    let varHobbyTotalPoint = this.hobbyTotalPoint;


    this.skillTotalPoint.carrer = 0;
    this.skillTotalPoint.hobby = 0;
    // setTimeout(() => {
      for (let i = 0; i < this.skills.length; i++) {
        this.skillTotalPoint.carrer += this.skills[i].carrerValue;
        this.skillTotalPoint.hobby += this.skills[i].hobbyValue;
      }
    // }, 10);


    varCareerTotalPoint -= this.skillTotalPoint.carrer;
    this.skillTypePoint.careerPoint = varCareerTotalPoint;
    varHobbyTotalPoint -= this.skillTotalPoint.hobby;
    this.skillTypePoint.hobbyPoint = varHobbyTotalPoint;


  }

  ngOnInit() {
  }

}
