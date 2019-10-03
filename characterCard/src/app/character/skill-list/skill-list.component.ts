import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { StatusItemService } from '../characteristics/statusItem.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  // template:`  `,
  styles: [`
  .skill-list > div{
    width:22%;
  }
  .skill-list{
    height: 800px;
  }
  `],
  providers: [
    SkillsService,
    StatusItemService
  ]
})

export class SkillListComponent implements OnInit {
  title = 'Skill List'
  query;

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

  // get skillTotalPoint
  getSkillTotal() {
    let varCareerTotalPoint = this.careerTotalPoint;
    let varHobbyTotalPoint = this.hobbyTotalPoint;
    this.skillTotalPoint.carrer = 0;
    this.skillTotalPoint.hobby = 0;

    for (let i = 0; i < this.skills.length; i++) {
      this.skillTotalPoint.carrer += this.skills[i].carrerValue;
      this.skillTotalPoint.hobby += this.skills[i].hobbyValue;
    }

    varCareerTotalPoint -= this.skillTotalPoint.carrer;
    this.skillTypePoint.careerPoint = varCareerTotalPoint;
    varHobbyTotalPoint -= this.skillTotalPoint.hobby;
    this.skillTypePoint.hobbyPoint = varHobbyTotalPoint;

  }

  // 新增技能
  newSkillName;
  newSkillValue;
  addSkill(f: NgForm): void {
    let skillName = this.newSkillName;
    let skillValue = this.newSkillValue;
    let data = {
      skillId: "",
      skillName: skillName,
      basicValue: skillValue,
      value: skillValue,
      carrerChecked: false,
      hobbyChecked: false,
      carrerValue: 0,
      hobbyValue: 0
    };
    this.skills.push(data);
    this.newSkillName = '';
    this.newSkillValue = '初始值';
    alert('技能已新增');
  }

  // 刪除技能
  deleteSkillName;
  deleteSkill() {
    const findSkill = this.skills.filter(item => item.skillName === this.deleteSkillName);
    const skillIndex = this.skills.indexOf(findSkill[0]);
    this.skills.splice(skillIndex, 1);
    this.deleteSkillName = '';
    alert('技能已刪除');
  }

  // 儲存技能
  saveSkillData() {
    let skillData = {
      'skillData':
      {
        'skills': this.skills,
        'skillTotal': [this.skillTypePoint, this.skillTotalPoint]
      }
    };
    localStorage.setItem('skillData', JSON.stringify(skillData));
  }
  
  // 讀取技能
  getSkillData() {
    let data = JSON.parse(localStorage.getItem('skillData'));
    this.skills = data.skillData.skills;
    this.skillTypePoint = data.skillData.skillTotal[0];
    this.skillTotalPoint = data.skillData.skillTotal[1];
  }

  ngOnInit() { }

}
