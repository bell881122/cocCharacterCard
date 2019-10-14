import { Component, Input, AfterViewInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { StatusItemService } from '../characteristics/statusItem.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  // template:`  `,
  styleUrls: ['skill-list.component.scss'],
  providers: [
    SkillsService,
    StatusItemService
  ]
})

export class SkillListComponent implements AfterViewInit {
  title = 'Skill List'
  query;

  skills;
  items;

  skillTypePoint =
    {
      careerPoint: 0,
      hobbyPoint: 0
    };

  skillTotalPoint = {
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

    // console.log(this.skillTypePoint.careerPoint);
  }

  // ngOnInit() {
  //   let data = JSON.parse(localStorage.getItem(this.CHcard));
  // }

  ngAfterViewInit() {
    // console.log(this.skillTypePoint);
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
    
    // console.log(varCareerTotalPoint);
    varCareerTotalPoint -= this.skillTotalPoint.carrer;
    this.skillTypePoint.careerPoint = varCareerTotalPoint;
    varHobbyTotalPoint -= this.skillTotalPoint.hobby;
    this.skillTypePoint.hobbyPoint = varHobbyTotalPoint;

    // console.log(this.skillTypePoint);


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

  @Input() CHcard;

  // 儲存技能
  saveSkillData() {
    let skillData =
    {
      'skills': this.skills,
      'skillTotal': [this.skillTypePoint, this.skillTotalPoint]
    };
    let data = JSON.parse(localStorage.getItem(this.CHcard));
    data.skillData = skillData;
    localStorage.setItem(this.CHcard, JSON.stringify(data));
  }


  // 讀取技能
  getSkillData() {

    let data = JSON.parse(localStorage.getItem(this.CHcard));

    if (data.skillData == undefined) {
      return;
    } else {
      this.skills = data.skillData.skills;
      this.skillTypePoint = data.skillData.skillTotal[0];
      this.skillTotalPoint = data.skillData.skillTotal[1];

      console.log(this.skillTypePoint.careerPoint);
      console.log(this.careerTotalPoint);
      // this.skillTotalPoint = data.skillData.skillTotal[1];
    }
    // console.log(this.skillTypePoint);


  }


}
